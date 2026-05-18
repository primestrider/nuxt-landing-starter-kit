<script setup lang="ts">
import type { UseSeoMetaInput } from "@unhead/vue/types";

const localePath = useLocalePath();
const { translate, t } = useTranslate();
const { staggerContainer, staggerItem, hoverLift, float, fadeUp } =
  useMotionPresets();

type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

type PricingPlan = {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

const seoMeta = computed<UseSeoMetaInput>(() => ({
  title: translate("home.meta.title"),
  description: translate("home.meta.description"),
  ogTitle: translate("home.meta.title"),
  ogDescription: translate("home.meta.description"),
}));

useSeoMeta(seoMeta);

const features = computed(() => t<FeatureItem[]>("home.features.items"));
const plans = computed(() => t<PricingPlan[]>("home.pricing.plans"));

const heroLinks = computed(() => [
  {
    label: translate("home.hero.primaryCta"),
    to: localePath("/contact-us"),
    icon: "i-lucide-send",
  },
  {
    label: translate("home.hero.secondaryCta"),
    to: "#features",
    color: "neutral" as const,
    variant: "subtle" as const,
    trailingIcon: "i-lucide-arrow-right",
  },
]);

const ctaLinks = computed(() => [
  {
    label: translate("home.cta.primary"),
    to: localePath("/contact-us"),
    color: "neutral" as const,
  },
  {
    label: translate("home.cta.secondary"),
    to: "https://github.com/nuxt/ui",
    target: "_blank",
    color: "neutral" as const,
    variant: "subtle" as const,
    trailingIcon: "i-lucide-arrow-right",
  },
]);

const accordionItems = computed(() => [
  {
    label: translate("home.showcase.accordion.q1"),
    content: translate("home.showcase.accordion.a1"),
  },
  {
    label: translate("home.showcase.accordion.q2"),
    content: translate("home.showcase.accordion.a2"),
  },
  {
    label: translate("home.showcase.accordion.q3"),
    content: translate("home.showcase.accordion.a3"),
  },
]);

const logoIcons = [
  "i-simple-icons-nuxtdotjs",
  "i-simple-icons-vuedotjs",
  "i-simple-icons-tailwindcss",
  "i-simple-icons-github",
  "i-simple-icons-figma",
];

const badges = [
  { label: "Nuxt 4", color: "primary" as const },
  { label: "Nuxt UI v4", color: "neutral" as const },
  { label: "i18n", color: "success" as const },
  { label: "SEO", color: "info" as const },
];
</script>

<template>
  <div class="overflow-hidden">
    <!-- Ambient orbs -->
    <Motion
      as="motion.div"
      class="pointer-events-none absolute -left-32 top-20 size-72 rounded-full bg-primary/20 blur-3xl"
      :animate="{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }"
      :transition="{ duration: 8, repeat: Infinity, ease: 'easeInOut' }" />
    <Motion
      as="motion.div"
      class="pointer-events-none absolute -right-24 top-40 size-64 rounded-full bg-info/20 blur-3xl"
      :animate="{ scale: [1.1, 0.95, 1.1], opacity: [0.25, 0.45, 0.25] }"
      :transition="{ duration: 9, repeat: Infinity, ease: 'easeInOut' }" />

    <UPageHero
      :title="translate('home.hero.title')"
      :description="translate('home.hero.description')"
      :links="heroLinks"
      orientation="horizontal"
      class="relative">
      <Motion
        as="motion.div"
        v-bind="float"
        class="w-full max-w-lg">
        <UCard class="glass-card glow-primary overflow-hidden ring ring-default">
          <div
            class="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-elevated">
            <Motion
              as="motion.div"
              class="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-info/20"
              :animate="{ opacity: [0.4, 0.7, 0.4] }"
              :transition="{ duration: 4, repeat: Infinity }" />
            <Motion
              as="motion.div"
              :initial="{ scale: 0.8, opacity: 0 }"
              :animate="{ scale: 1, opacity: 1 }"
              :transition="{ delay: 0.2, ...hoverLift.transition }">
              <UIcon
                name="i-lucide-layout-template"
                class="relative z-10 size-24 text-primary" />
            </Motion>
          </div>
        </UCard>
      </Motion>
    </UPageHero>

    <MotionReveal as="motion.section">
      <UPageSection
        id="features"
        :headline="translate('home.features.headline')"
        :title="translate('home.features.title')"
        :description="translate('home.features.description')">
        <Motion
          as="motion.div"
          class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          v-bind="staggerContainer">
          <Motion
            v-for="feature in features"
            :key="feature.title"
            as="motion.div"
            v-bind="{ ...staggerItem, ...hoverLift }">
            <UCard
              variant="subtle"
              class="h-full transition-shadow hover:shadow-lg">
              <div
                class="mb-3 flex size-11 items-center justify-center rounded-lg bg-primary/10">
                <UIcon :name="feature.icon" class="size-5 text-primary" />
              </div>
              <h3 class="font-semibold">{{ feature.title }}</h3>
              <p class="mt-1 text-sm text-muted">{{ feature.description }}</p>
            </UCard>
          </Motion>
        </Motion>
      </UPageSection>
    </MotionReveal>

    <MotionReveal as="motion.section" :delay="0.05">
      <UPageSection
        id="showcase"
        :headline="translate('home.showcase.headline')"
        :title="translate('home.showcase.title')"
        :description="translate('home.showcase.description')">
        <UContainer class="space-y-6">
          <Motion
            as="motion.div"
            v-bind="fadeUp">
            <UAlert
              icon="i-lucide-sparkles"
              color="primary"
              variant="subtle"
              :title="translate('home.showcase.alert.title')"
              :description="translate('home.showcase.alert.description')" />
          </Motion>

          <Motion
            as="motion.div"
            class="flex flex-wrap gap-2"
            v-bind="staggerContainer">
            <Motion
              v-for="badge in badges"
              :key="badge.label"
              as="motion.div"
              v-bind="{ ...staggerItem, whileHover: { scale: 1.08 }, whilePress: { scale: 0.95 } }">
              <UBadge
                :label="badge.label"
                :color="badge.color"
                variant="subtle"
                class="cursor-default" />
            </Motion>
          </Motion>

          <Motion as="motion.div" v-bind="fadeUp">
            <UAccordion :items="accordionItems" type="multiple" />
          </Motion>
        </UContainer>
      </UPageSection>
    </MotionReveal>

    <MotionReveal as="motion.section">
      <UPageSection
        :headline="translate('home.logos.title')"
        :title="translate('home.logos.title')">
        <Motion
          as="motion.div"
          class="flex flex-wrap items-center justify-center gap-10"
          v-bind="staggerContainer">
          <Motion
            v-for="(icon, index) in logoIcons"
            :key="icon"
            as="motion.div"
            v-bind="staggerItem"
            :while-hover="{ scale: 1.2, rotate: 5 }"
            :transition="{ type: 'spring', stiffness: 400, damping: 18 }">
            <UIcon :name="icon" class="size-9 text-muted" />
          </Motion>
        </Motion>
      </UPageSection>
    </MotionReveal>

    <MotionReveal as="motion.section" :delay="0.08">
      <UPageSection
        id="pricing"
        :headline="translate('home.pricing.headline')"
        :title="translate('home.pricing.title')"
        :description="translate('home.pricing.description')">
        <UPricingPlans :plans="plans" />
      </UPageSection>
    </MotionReveal>

    <MotionReveal as="motion.section">
      <Motion
        as="motion.div"
        class="relative overflow-hidden rounded-2xl"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }">
        <Motion
          as="motion.div"
          class="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-info/10"
          :animate="{ x: ['-20%', '20%', '-20%'] }"
          :transition="{ duration: 12, repeat: Infinity, ease: 'linear' }" />
        <UPageCTA
          :title="translate('home.cta.title')"
          :description="translate('home.cta.description')"
          :links="ctaLinks"
          class="relative" />
      </Motion>
    </MotionReveal>
  </div>
</template>
