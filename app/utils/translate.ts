import id from "../../i18n/locales/id";

type Messages = typeof id;

type NestedKeyOf<T extends object> = {
  [K in keyof T & string]: T[K] extends object
    ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
    : `${K}`;
}[keyof T & string];

export type TranslationKey = NestedKeyOf<Messages>;
