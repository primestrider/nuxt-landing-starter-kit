<script setup lang="ts">
import { computed } from "vue";
import type { UseSeoMetaInput } from "@unhead/vue/types";
import LanguageSwitcher from "~/components/utils/LanguageSwitcher.vue";

const { translate } = useTranslate();

const seoMeta = computed<UseSeoMetaInput>(() => ({
  title: translate("home.meta.title"),
  description: translate("home.meta.description"),
  ogTitle: translate("home.meta.title"),
  ogDescription: translate("home.meta.description"),
}));

useSeoMeta(seoMeta.value);
</script>

<template>
  <div class="flex items-center gap-2">
    <p>{{ translate("home.title") }}</p>

    <LanguageSwitcher />
  </div>
</template>
