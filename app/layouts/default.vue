<script setup lang="ts">
import FooterComponent from "~/components/layouts/FooterComponent.vue";
import HeaderComponent from "~/components/layouts/HeaderComponent.vue";
</script>

<template>
  <div class="page-gradient min-h-screen">
    <HeaderComponent />
    <UMain>
      <slot />
    </UMain>
    <FooterComponent />
  </div>
</template>
