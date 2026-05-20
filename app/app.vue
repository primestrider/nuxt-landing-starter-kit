<script setup lang="ts">
const { locale } = useI18n();
const route = useRoute();
const { pageTransition } = useMotionPresets();

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
  },
}));
</script>

<template>
  <UApp>
    <NuxtLayout>
      <AnimatePresence mode="wait">
        <NuxtPage />
      </AnimatePresence>
    </NuxtLayout>
  </UApp>
</template>
