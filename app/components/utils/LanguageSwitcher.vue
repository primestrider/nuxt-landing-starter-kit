<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();

const { locale } = useI18n();

const changeLanguage = async (lang: "id" | "en") => {
  await router.push(switchLocalePath(lang));
};
</script>

<template>
  <div class="flex items-center gap-2">
    <button
      type="button"
      @click="changeLanguage('id')"
      :style="{
        fontWeight: locale === 'id' ? 'bold' : 'normal',
      }">
      ID
    </button>

    <button
      type="button"
      @click="changeLanguage('en')"
      :style="{
        fontWeight: locale === 'en' ? 'bold' : 'normal',
      }">
      EN
    </button>
  </div>
</template>
