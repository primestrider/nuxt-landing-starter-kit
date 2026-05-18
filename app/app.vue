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
        <Motion
          :key="route.fullPath"
          as="motion.div"
          class="w-full"
          :initial="pageTransition.initial"
          :animate="pageTransition.animate"
          :exit="pageTransition.exit"
          :transition="pageTransition.transition">
          <NuxtPage />
        </Motion>
      </AnimatePresence>
    </NuxtLayout>
  </UApp>
</template>
