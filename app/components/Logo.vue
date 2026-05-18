<script setup lang="ts">
const localePath = useLocalePath();
const { translate } = useTranslate();
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    class="flex items-center gap-2 font-semibold text-default">
    <UIcon name="i-lucide-rocket" class="size-6 text-primary" />
    <span>{{ translate("common.brand") }}</span>
  </NuxtLink>
</template>
