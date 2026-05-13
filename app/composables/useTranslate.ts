import id from "../../i18n/locales/id";
import en from "../../i18n/locales/en";

import type { TranslationKey } from "../utils/translate";

const messages = {
  id,
  en,
} as const;

export const useTranslate = () => {
  const { locale } = useI18n();

  const translate = (key: TranslationKey) => {
    const keys = key.split(".");

    let value: any = messages[locale.value as "id" | "en"];

    for (const k of keys) {
      value = value[k];
    }

    return value;
  };

  return {
    translate,
  };
};
