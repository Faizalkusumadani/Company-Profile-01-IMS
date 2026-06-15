import { id } from "./lang/id";
import { en } from "./lang/en";

export const languages = {
  id: "Indonesia",
  en: "English",
};

export const defaultLang = "id";

export const ui = {
  id,
  en,
} as const;
