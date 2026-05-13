<script setup lang="ts">
const { locale } = useI18n();

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
  },
}));
</script>
<template>
  <UApp>
    <main>
      <UMain>
        <NuxtPage></NuxtPage>
      </UMain>
    </main>
  </UApp>
</template>
