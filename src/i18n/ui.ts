export const languages = [
  {
    key: "en",
    label: "English",
    icon: "emojione:flag-for-united-kingdom",
  },
  {
    key: "de",
    label: "Deutsch",
    icon: "emojione:flag-for-switzerland",
  },
];

// export const defaultLang = languages.find(l => l.key === "en");
export const defaultLang = "en";

export const ui = {
  en: {
    "header.useCases": "Use Cases",
    "header.procedure": "Procedure",
    "header.tools": "Tools & Tech",
    "header.about": "About",
    "header.contact": "Contact Us",

    "hero.title": "Dias Software Consulting Services",
    "hero.subtitle": "Solid Software. Competent Consulting.",
  },
  de: {
    "header.useCases": "Anwendungsfälle",
    "header.procedure": "Vorgehen",
    "header.tools": "Tools & Tech",
    "header.about": "Über uns",
    "header.contact": "Kontakt",
  },
} as const;
