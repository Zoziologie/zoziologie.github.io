<template>
  <footer class="footer text-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">{{ footer.heading }}</h4>
          <a
            v-for="link in footer.socialLinks"
            :key="link.label"
            class="btn btn-outline-light btn-social mx-1"
            :href="link.url"
            :aria-label="link.label"
          >
            <i v-if="link.icon" :class="link.icon"></i>
            <img v-else :src="link.image" :alt="link.label" style="height: 21px" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  footer: {
    type: Object,
    required: true,
  },
});
</script>
