<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string;
    delay?: number;
    y?: number;
    once?: boolean;
  }>(),
  {
    as: "motion.div",
    delay: 0,
    y: 28,
    once: true,
  },
);

const transition = computed(() => ({
  duration: 0.55,
  delay: props.delay,
  ease: [0.22, 1, 0.36, 1] as const,
}));
</script>

<template>
  <Motion
    :as="as"
    :initial="{ opacity: 0, y }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :viewport="{ once, margin: '-80px' }"
    :transition="transition">
    <slot />
  </Motion>
</template>
