<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import LanguageSwitcher from "~/components/utils/LanguageSwitcher.vue";

const route = useRoute();
const localePath = useLocalePath();
const { translate } = useTranslate();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: translate("common.nav.home"),
    to: localePath("/"),
    active: route.path === localePath("/"),
  },
  {
    label: translate("common.nav.about"),
    to: localePath("/about-us"),
    active: route.path.startsWith(localePath("/about-us")),
  },
  {
    label: translate("common.nav.contact"),
    to: localePath("/contact-us"),
    active: route.path.startsWith(localePath("/contact-us")),
  },
  {
    label: translate("common.nav.releases"),
    to: "https://github.com/nuxt/ui/releases",
    target: "_blank",
  },
]);
</script>

<template>
  <Motion
    as="motion.div"
    :initial="{ opacity: 0, y: -12 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }">
  <UHeader>
    <template #title>
      <Logo />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <LanguageSwitcher />
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5" />
    </template>
  </UHeader>
  </Motion>
</template>
