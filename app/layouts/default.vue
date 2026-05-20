<script setup lang="ts">
import FooterComponent from "~/components/layouts/FooterComponent.vue";
import HeaderComponent from "~/components/layouts/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />
  <UMain>
    <slot />
  </UMain>
  <FooterComponent />
</template>
