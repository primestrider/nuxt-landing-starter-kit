<script setup lang="ts">
import type { UseSeoMetaInput } from "@unhead/vue/types";
import type { TabsItem } from "@nuxt/ui";

const { translate, t } = useTranslate();
const { staggerContainer, staggerItem, hoverLift, scaleIn } = useMotionPresets();

type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

type StatItem = {
  label: string;
  value: string;
};

const seoMeta = computed<UseSeoMetaInput>(() => ({
  title: translate("about.meta.title"),
  description: translate("about.meta.description"),
  ogTitle: translate("about.meta.title"),
  ogDescription: translate("about.meta.description"),
}));

useSeoMeta(seoMeta);

const teamMembers = computed(() => t<TeamMember[]>("about.team.members"));
const stats = computed(() => t<StatItem[]>("about.stats.items"));

const tabItems = computed<TabsItem[]>(() => [
  { label: translate("about.tabs.mission"), value: "mission" },
  { label: translate("about.tabs.vision"), value: "vision" },
  { label: translate("about.tabs.values"), value: "values" },
]);

const avatarColors = ["primary", "success", "info"] as const;
const localePath = useLocalePath();
const activeTab = ref("mission");

const tabContent = computed(() => {
  if (activeTab.value === "vision") {
    return translate("about.tabContent.vision");
  }
  if (activeTab.value === "values") {
    return translate("about.tabContent.values");
  }
  return translate("about.tabContent.mission");
});

const ctaLinks = computed(() => [
  {
    label: translate("home.cta.primary"),
    to: localePath("/contact-us"),
  },
]);
</script>

<template>
  <Motion as="motion.div" class="relative overflow-hidden">
    <Motion
      as="motion.div"
      class="pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-success/15 blur-3xl"
      :animate="{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }"
      :transition="{ duration: 10, repeat: Infinity }" />

    <Motion
      as="motion.div"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5 }">
      <UPageHero
        :title="translate('about.hero.title')"
        :description="translate('about.hero.description')" />
    </Motion>

    <MotionReveal as="motion.section">
      <UPageSection>
        <UContainer class="max-w-3xl">
          <UCard class="glass-card overflow-hidden">
            <UTabs v-model="activeTab" :items="tabItems" class="px-2 pt-2" />
            <AnimatePresence mode="wait">
              <Motion
                :key="activeTab"
                as="motion.div"
                class="border-t border-default p-6"
                :initial="{ opacity: 0, y: 12 }"
                :animate="{ opacity: 1, y: 0 }"
                :exit="{ opacity: 0, y: -8 }"
                :transition="{ duration: 0.28 }">
                <p class="text-muted leading-relaxed">{{ tabContent }}</p>
              </Motion>
            </AnimatePresence>
          </UCard>
        </UContainer>
      </UPageSection>
    </MotionReveal>

    <MotionReveal as="motion.section" :delay="0.05">
      <UPageSection
        :headline="translate('about.stats.headline')"
        :title="translate('about.stats.title')">
        <UContainer>
          <Motion
            as="motion.div"
            class="grid gap-4 sm:grid-cols-3"
            v-bind="staggerContainer">
            <Motion
              v-for="stat in stats"
              :key="stat.label"
              as="motion.div"
              v-bind="{ ...staggerItem, ...hoverLift }">
              <UCard variant="subtle" class="glass-card text-center">
                <Motion
                  as="motion.p"
                  class="text-4xl font-bold text-primary"
                  v-bind="scaleIn">
                  {{ stat.value }}
                </Motion>
                <p class="mt-2 text-sm text-muted">{{ stat.label }}</p>
              </UCard>
            </Motion>
          </Motion>
        </UContainer>
      </UPageSection>
    </MotionReveal>

    <MotionReveal as="motion.section" :delay="0.1">
      <UPageSection
        :headline="translate('about.team.headline')"
        :title="translate('about.team.title')"
        :description="translate('about.team.description')">
        <UContainer>
          <Motion
            as="motion.div"
            class="grid gap-6 md:grid-cols-3"
            v-bind="staggerContainer">
            <Motion
              v-for="(member, index) in teamMembers"
              :key="member.name"
              as="motion.div"
              v-bind="{ ...staggerItem, ...hoverLift }">
              <UCard variant="subtle" class="glass-card h-full">
                <div class="flex flex-col items-center text-center">
                  <Motion
                    as="motion.div"
                    :while-hover="{ scale: 1.08, rotate: 3 }"
                    :transition="hoverLift.transition">
                    <UAvatar
                      :alt="member.name"
                      :text="member.name.charAt(0)"
                      size="xl"
                      :color="avatarColors[index % avatarColors.length]"
                      class="mb-4" />
                  </Motion>
                  <h3 class="text-lg font-semibold">{{ member.name }}</h3>
                  <p class="text-sm text-primary">{{ member.role }}</p>
                  <p class="mt-3 text-sm text-muted">{{ member.bio }}</p>
                </div>
              </UCard>
            </Motion>
          </Motion>
        </UContainer>
      </UPageSection>
    </MotionReveal>

    <MotionReveal as="motion.section">
      <UPageCTA
        :title="translate('home.cta.title')"
        :description="translate('home.cta.description')"
        :links="ctaLinks" />
    </MotionReveal>
  </Motion>
</template>
