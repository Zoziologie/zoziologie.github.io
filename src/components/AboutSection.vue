<template>
  <section id="about" class="page-section bg-primary text-white mb-0">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-white">{{ about.title }}</h2>
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <div class="row">
        <div class="col-lg-4 ms-auto">
          <p class="lead">{{ about.intro }}</p>
        </div>
        <div class="col-lg-4 me-auto">
          <p class="lead"><em>Zoziologie</em> {{ about.story }}</p>
        </div>
      </div>
      <div class="text-center mt-4">
        <a class="btn btn-xl btn-outline-light" :href="about.button.url">
          <i :class="about.button.iconClass"></i>
          {{ about.button.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  about: {
    type: Object,
    required: true,
  },
});
</script>
