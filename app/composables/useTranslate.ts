import id from "../../i18n/locales/id";
import en from "../../i18n/locales/en";

import type { TranslationKey } from "../utils/translate";

const messages = {
  id,
  en,
} as const;

export const useTranslate = () => {
  const { locale } = useI18n();

  const translate = (key: TranslationKey): string => {
    const value = resolve(key, locale.value as "id" | "en");
    return typeof value === "string" ? value : String(value ?? "");
  };

  const t = <T = unknown>(key: TranslationKey): T => {
    return resolve(key, locale.value as "id" | "en") as T;
  };

  return {
    translate,
    t,
  };
};

function resolve(key: TranslationKey, locale: "id" | "en") {
  const keys = key.split(".");
  let value: unknown = messages[locale];

  for (const k of keys) {
    if (value && typeof value === "object" && k in (value as object)) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return undefined;
    }
  }

  return value;
}
