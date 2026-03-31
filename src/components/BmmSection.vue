<template>
  <section id="BMM" class="page-section">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">{{ bmm.title }}</h2>
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <div class="row justify-content-center">
        <a class="col-lg-6 mx-auto text-center text-decoration-none" :href="bmm.url">
          <img :src="bmm.image" :alt="bmm.imageAlt" class="img-fluid mb-2" />
          <h3>{{ bmm.subtitle }}</h3>
          <p>{{ bmm.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  bmm: {
    type: Object,
    required: true,
  },
});
</script>
