<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();
const { locale, locales } = useI18n();

const changeLanguage = async (code: string) => {
  await router.push(switchLocalePath(code));
};
</script>

<template>
  <Motion
    as="motion.div"
    class="flex gap-1 rounded-lg border border-default bg-elevated/80 p-1 backdrop-blur-sm"
    :initial="{ opacity: 0, scale: 0.9 }"
    :animate="{ opacity: 1, scale: 1 }"
    :transition="{ duration: 0.3 }">
    <Motion
      v-for="item in locales"
      :key="item.code"
      as="motion.button"
      type="button"
      class="rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
      :class="
        locale === item.code
          ? 'bg-primary text-inverted shadow-sm'
          : 'text-muted hover:text-default'
      "
      :while-hover="{ scale: 1.05 }"
      :while-press="{ scale: 0.95 }"
      @click="changeLanguage(item.code)">
      {{ item.code.toUpperCase() }}
    </Motion>
  </Motion>
</template>
