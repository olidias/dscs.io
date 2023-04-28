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

    "entry.teaser": "Unleash the full potential of your software with our customer-centric consulting services and individualised software!"
  },
  de: {
    "header.useCases": "Anwendungsfälle",
    "header.procedure": "Vorgehen",
    "header.tools": "Tools & Tech",
    "header.about": "Über uns",
    "header.contact": "Kontakt",

    "entry.teaser": "Entfessle das volle Potential Deiner Software mit unserer kundenorientierter Beratung und massgeschneiderter Software!"
  },
} as const;
