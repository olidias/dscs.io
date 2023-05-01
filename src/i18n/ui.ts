export const languages = [
  {
    key: 'en',
    label: 'English',
    icon: 'emojione:flag-for-united-kingdom',
  },
  {
    key: 'de',
    label: 'Deutsch',
    icon: 'emojione:flag-for-switzerland',
  },
];

// export const defaultLang = languages.find(l => l.key === 'en');
export const defaultLang = 'en';

export const ui = {
  en: {
    'header.useCases': 'Use Cases',
    'header.procedure': 'Procedure',
    'header.tools': 'Tools & Tech',
    'header.about': 'About',
    'header.contact': 'Contact Us',

    'hero.title': 'Dias Software Consulting Services',
    'hero.subtitle': 'Solid Software. Competent Consulting.',

    'entry.teaser': 'Unleash the full potential of your software with our customer-centric consulting services and individualised software!',

    'entry.item-fully-customized.title': 'Fully Customized Solutions',
    'entry.item-fully-customized.description': 'Using the latest technologies and creative approaches, we come to the individualized application according to your imagination.',
    
    'entry.item-customer-centricity.title': 'Customer Centricity',
    'entry.item-customer-centricity.description': 'You should be able to determine where your website is heading. We are happy to guide you through the entire process!',

    'entry.item-usability.title': 'Usability Focus',
    'entry.item-usability.description': 'We especially value Usability. Through responsive and engaging websites, we appeal to a wide range of users.',

    'entry.item-quality.title': 'Quality',
    'entry.item-quality.description': 'With selected tools we strive for only the highest quality.',
  },
  de: {
    'header.useCases': 'Anwendungsfälle',
    'header.procedure': 'Vorgehen',
    'header.tools': 'Tools & Tech',
    'header.about': 'Über uns',
    'header.contact': 'Kontakt',

    'entry.teaser': 'Entfessle das volle Potential Deiner Software mit unserer kundenorientierter Beratung und massgeschneiderter Software!',

    'entry.item-fully-customized.title': 'Komplett massgeschneiderte Lösungen',
    'entry.item-fully-customized.description': 'Durch modernste Technologien und kreativen Ansätzen kommen wir zur individualisierten Applikation gemäss Deiner Vorstellung. ',

    'entry.item-customer-centricity.title': 'Kundenzentrierung',
    'entry.item-customer-centricity.description': 'Du sollst bestimmen können, wohin es mit deiner Website gehen soll. Wir sind unterstützen und beraten dich im gesamten Prozess!',

    'entry.item-usability.title': 'Usability Fokus',
    'entry.item-usability.description': 'Wir legen besonderen Wert auf Usability. Durch responsive und bezaubernde Websites sprechen wir eine Vielzahl von Benutzer an.',

    'entry.item-quality.title': 'Qualität',
    'entry.item-quality.description': 'Mit auserwählten Tools streben wir nach höchster Qualität.',
  },
} as const;
