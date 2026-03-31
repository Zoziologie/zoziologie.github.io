<template>
  <section id="webapp" class="page-section webapp">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Webapps</h2>
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>

      <div class="row justify-content-center">
        <a
          v-for="app in webapps"
          :key="app.id"
          :href="app.url"
          class="col-md-6 col-xl-4 mb-5 text-decoration-none"
          :aria-disabled="app.disabled ? 'true' : null"
          :tabindex="app.disabled ? -1 : null"
          @click="handleDisabledClick($event, app)"
        >
          <div class="webapp-item mx-auto">
            <img
              :src="imageSrc(app)"
              :alt="app.alt"
              class="img-fluid mb-2"
              @mouseenter="hoveredAppId = app.id"
              @mouseleave="hoveredAppId = null"
            />
            <h3>{{ app.title }}</h3>
            <p>{{ app.description }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  webapps: {
    type: Array,
    required: true,
  },
});

const hoveredAppId = ref(null);

const imageSrc = (app) => {
  if (hoveredAppId.value === app.id && app.hoverImage) {
    return app.hoverImage;
  }
  return app.image;
};

const handleDisabledClick = (event, app) => {
  if (app.disabled) {
    event.preventDefault();
  }
};
</script>
