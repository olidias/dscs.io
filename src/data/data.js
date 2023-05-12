import { getPermalink, getBlogPermalink, getAsset } from '../utils/permalinks';
import tailwind from '../assets/images/techIcons/tailwind-mark.svg';
import astro from '../assets/images/techIcons/astro.svg';
import astro_dark from '../assets/images/techIcons/astro-dark.svg';
import js from '../assets/images/techIcons/js.svg';
import ts from '../assets/images/techIcons/ts.svg';
import vite from '../assets/images/techIcons/vite.svg';
import gatsby from '../assets/images/techIcons/gatsby.svg';
import angular from '../assets/images/techIcons/angular.svg';
import jekyll from '../assets/images/techIcons/jekyll-logo.svg';
import react from '../assets/images/techIcons/react.svg';
import webpack from '../assets/images/techIcons/webpack.svg';
import csharp from '../assets/images/techIcons/csharp.svg';
import dotnet from '../assets/images/techIcons/dotnet-logo.svg';
import mongodb from '../assets/images/techIcons/mongodb.svg';
import mssql from '../assets/images/techIcons/mssql.svg';
import node from '../assets/images/techIcons/nodejs.svg';
import wordpress from '../assets/images/techIcons/wordpress.svg';
import dato from '../assets/images/techIcons/datocms.svg';

  
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
};

export const frontendToolsData = {
  techIcons: [
    {
      img: js,
      alt: 'Javascript Programming Language',
      url: 'https://developer.mozilla.org/en-US/docs/Web/javascript'
    },
    {
      img: ts,
      alt: 'Typescript Programming Language',
      url: 'https://www.typescriptlang.org/'
    },
    {
      img: angular,
      alt: 'Logo Angular Framework',
      url: 'https://angular.io'
    },
    {
      img: react,
      alt: 'Logo React Framework',
      url: 'https://react.dev/'
    },
    {
      img: tailwind,
      alt: 'Tailwind CSS icon',
      url: 'https://tailwindcss.com/'
    },
    {
      img: gatsby,
      alt: 'Logo Gatsby Static Site Generator',
      url: 'https://www.gatsbyjs.com/'
    },
    {
      img: jekyll,
      alt: 'Logo Jekyll Static Site Generator',
      url: 'https://jekyllrb.com/'
    },
    {
      img: astro_dark,
      darkOptionImg: astro,
      alt: 'Astro Web Framework',
      url: 'https://astro.build/'
    },
    {
      img: webpack,
      alt: 'Logo Webpack Bundler',
      url: 'https://webpack.js.org/'
    },
    {
      img: vite,
      alt: 'Package Bundler Vite',
      url: 'https://vitejs.dev/'
    },
  ]
};

export const backendToolsData = {
  techIcons: [
    {
      img: csharp,
      alt: 'C# Programming Language',
      url: 'https://dotnet.microsoft.com/en-us/languages/csharp'
    },
    {
      img: dotnet,
      alt: '.NET Framework',
      url: 'https://dotnet.microsoft.com/en-us/'
    },
    {
      img: node,
      alt: 'Node Serverside Javascript',
      url: 'https://nodejs.org/en'
    },
    {
      img: mssql,
      alt: 'MS SQL Databases',
      url: 'https://www.microsoft.com/en-us/sql-server/'
    },
    {
      img: {
        ...mongodb,
        height: 20,
        width: 20
      },
      alt: 'MongoDB NoSQL Database',
      url: 'https://www.mongodb.com/'
    }
  ]
};

export const cmsToolsData = {
  techIcons: [
    {
      img: wordpress,
      alt: 'Wordpress CMS',
      url: 'https://wordpress.org/'
    },
    {
      img: dato,
      alt: 'DatoCMS',
      url: 'https://www.datocms.com/'
    }
  ]
}