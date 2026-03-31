<template>
  <header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <img class="masthead-avatar mb-5" src="/assets/logo_w.svg" alt="Zoziologie logo" />
      <h1 class="masthead-heading text-uppercase mb-0">{{ brandName }}</h1>
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <p class="masthead-subheading fw-light mb-0">{{ tagline }}</p>
    </div>
  </header>
</template>

<script setup>
defineProps({
  brandName: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
});
</script>
