<script setup lang="ts">
import type { UseSeoMetaInput } from "@unhead/vue/types";

const toast = useToast();
const { translate, t } = useTranslate();
const { staggerContainer, staggerItem, hoverLift, slideInRight } =
  useMotionPresets();

const seoMeta = computed<UseSeoMetaInput>(() => ({
  title: translate("contact.meta.title"),
  description: translate("contact.meta.description"),
  ogTitle: translate("contact.meta.title"),
  ogDescription: translate("contact.meta.description"),
}));

useSeoMeta(seoMeta);

const topicItems = computed(() => t<string[]>("contact.form.topics"));

const state = reactive({
  name: "",
  email: "",
  topic: "" as string | undefined,
  message: "",
  consent: false,
});

const submitted = ref(false);
const errors = reactive<Record<string, string>>({});

function validate() {
  Object.keys(errors).forEach((key) => delete errors[key]);

  if (!state.name || state.name.length < 2) {
    errors.name = translate("contact.form.validation.name");
  }

  if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.email = translate("contact.form.validation.email");
  }

  if (!state.topic) {
    errors.topic = translate("contact.form.validation.topic");
  }

  if (!state.message || state.message.length < 10) {
    errors.message = translate("contact.form.validation.message");
  }

  if (!state.consent) {
    errors.consent = translate("contact.form.validation.consent");
  }

  return Object.keys(errors).length === 0;
}

function onSubmit() {
  if (!validate()) {
    toast.add({
      title: "Validation",
      description: Object.values(errors)[0],
      icon: "i-lucide-alert-circle",
      color: "error",
    });
    return;
  }

  submitted.value = true;

  toast.add({
    title: translate("contact.form.successTitle"),
    description: translate("contact.form.successDescription"),
    icon: "i-lucide-check-circle",
    color: "success",
  });

  state.name = "";
  state.email = "";
  state.topic = undefined;
  state.message = "";
  state.consent = false;
}

const contactCards = computed(() => [
  {
    icon: "i-lucide-mail",
    label: translate("contact.info.email.label"),
    value: translate("contact.info.email.value"),
  },
  {
    icon: "i-lucide-phone",
    label: translate("contact.info.phone.label"),
    value: translate("contact.info.phone.value"),
  },
  {
    icon: "i-lucide-map-pin",
    label: translate("contact.info.address.label"),
    value: translate("contact.info.address.value"),
  },
]);
</script>

<template>
  <Motion as="motion.div" class="relative overflow-hidden">
    <Motion
      as="motion.div"
      class="pointer-events-none absolute -left-20 bottom-20 size-72 rounded-full bg-primary/15 blur-3xl"
      :animate="{ y: [0, -20, 0], opacity: [0.25, 0.45, 0.25] }"
      :transition="{ duration: 7, repeat: Infinity }" />

    <Motion
      as="motion.div"
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.45 }">
      <UPageHero
        :title="translate('contact.hero.title')"
        :description="translate('contact.hero.description')" />
    </Motion>

    <UPageSection>
      <UContainer>
        <div class="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Motion
            as="motion.div"
            class="space-y-4"
            v-bind="staggerContainer">
            <Motion
              v-for="(card, index) in contactCards"
              :key="card.label"
              as="motion.div"
              v-bind="{ ...staggerItem, ...hoverLift }"
              :transition="{ ...hoverLift.transition, delay: index * 0.08 }">
              <UCard
                variant="subtle"
                class="glass-card cursor-default transition-colors hover:border-primary/30">
                <div class="flex items-start gap-3">
                  <Motion
                    as="motion.div"
                    class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                    :while-hover="{ rotate: 8, scale: 1.1 }">
                    <UIcon :name="card.icon" class="size-5 text-primary" />
                  </Motion>
                  <div>
                    <p class="text-sm font-medium">{{ card.label }}</p>
                    <p class="text-sm text-muted">{{ card.value }}</p>
                  </div>
                </div>
              </UCard>
            </Motion>

            <AnimatePresence>
              <Motion
                v-if="submitted"
                as="motion.div"
                key="success"
                :initial="{ opacity: 0, scale: 0.95, y: 8 }"
                :animate="{ opacity: 1, scale: 1, y: 0 }"
                :exit="{ opacity: 0, scale: 0.95, y: -8 }"
                :transition="{ type: 'spring', stiffness: 300, damping: 24 }">
                <UAlert
                  icon="i-lucide-party-popper"
                  color="success"
                  variant="subtle"
                  :title="translate('contact.form.successTitle')"
                  :description="translate('contact.form.successDescription')" />
              </Motion>
            </AnimatePresence>
          </Motion>

          <Motion as="motion.div" v-bind="slideInRight">
            <UCard class="glass-card glow-primary">
              <template #header>
                <div>
                  <h2 class="text-lg font-semibold">
                    {{ translate("contact.form.title") }}
                  </h2>
                  <p class="text-sm text-muted">
                    {{ translate("contact.form.description") }}
                  </p>
                </div>
              </template>

              <form class="space-y-4" @submit.prevent="onSubmit">
                <Motion
                  as="motion.div"
                  :initial="{ opacity: 0, x: -8 }"
                  :while-in-view="{ opacity: 1, x: 0 }"
                  :viewport="{ once: true }"
                  :transition="{ delay: 0.05 }">
                  <UFormField
                    name="name"
                    :label="translate('contact.form.name')"
                    :error="errors.name"
                    required>
                    <UInput
                      v-model="state.name"
                      :placeholder="translate('contact.form.namePlaceholder')" />
                  </UFormField>
                </Motion>

                <Motion
                  as="motion.div"
                  :initial="{ opacity: 0, x: -8 }"
                  :while-in-view="{ opacity: 1, x: 0 }"
                  :viewport="{ once: true }"
                  :transition="{ delay: 0.1 }">
                  <UFormField
                    name="email"
                    :label="translate('contact.form.email')"
                    :error="errors.email"
                    required>
                    <UInput
                      v-model="state.email"
                      type="email"
                      :placeholder="translate('contact.form.emailPlaceholder')" />
                  </UFormField>
                </Motion>

                <Motion
                  as="motion.div"
                  :initial="{ opacity: 0, x: -8 }"
                  :while-in-view="{ opacity: 1, x: 0 }"
                  :viewport="{ once: true }"
                  :transition="{ delay: 0.15 }">
                  <UFormField
                    name="topic"
                    :label="translate('contact.form.topic')"
                    :error="errors.topic"
                    required>
                    <USelect
                      v-model="state.topic"
                      :items="topicItems"
                      :placeholder="translate('contact.form.topicPlaceholder')" />
                  </UFormField>
                </Motion>

                <Motion
                  as="motion.div"
                  :initial="{ opacity: 0, x: -8 }"
                  :while-in-view="{ opacity: 1, x: 0 }"
                  :viewport="{ once: true }"
                  :transition="{ delay: 0.2 }">
                  <UFormField
                    name="message"
                    :label="translate('contact.form.message')"
                    :error="errors.message"
                    required>
                    <UTextarea
                      v-model="state.message"
                      :rows="4"
                      :placeholder="translate('contact.form.messagePlaceholder')" />
                  </UFormField>
                </Motion>

                <UFormField name="consent" :error="errors.consent">
                  <UCheckbox
                    v-model="state.consent"
                    :label="translate('contact.form.consent')" />
                </UFormField>

                <Motion
                  as="motion.div"
                  :while-hover="{ scale: 1.01 }"
                  :while-press="{ scale: 0.98 }">
                  <UButton
                    type="submit"
                    :label="translate('contact.form.submit')"
                    icon="i-lucide-send"
                    block
                    size="lg" />
                </Motion>
              </form>
            </UCard>
          </Motion>
        </div>
      </UContainer>
    </UPageSection>
  </Motion>
</template>
