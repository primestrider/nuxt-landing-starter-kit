<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { translate } = useTranslate();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: translate("common.footer.figma"),
    to: "https://go.nuxt.com/figma-ui",
    target: "_blank",
  },
  {
    label: translate("common.footer.playground"),
    to: "https://stackblitz.com/edit/nuxt-ui",
    target: "_blank",
  },
  {
    label: translate("common.footer.releases"),
    to: "https://github.com/nuxt/ui/releases",
    target: "_blank",
  },
]);
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        © {{ new Date().getFullYear() }} — {{ translate("common.footer.copyright") }}
      </p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
        icon="i-simple-icons-discord"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/discord"
        target="_blank"
        aria-label="Discord" />
      <UButton
        icon="i-simple-icons-x"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/x"
        target="_blank"
        aria-label="X" />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/nuxt/nuxt"
        target="_blank"
        aria-label="GitHub" />
    </template>
  </UFooter>
</template>
