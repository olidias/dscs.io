import tailwind from '../../public/techIcons/tailwind-mark.svg';
import astro from '../../public/techIcons/astro.svg';
import astro_dark from '../../public/techIcons/astro-dark.svg';
import js from '../../public/techIcons/js.svg';
import ts from '../../public/techIcons/ts.svg';
import vite from '../../public/techIcons/vite.svg';
import gatsby from '../../public/techIcons/gatsby.svg';
import angular from '../../public/techIcons/angular.svg';
import jekyll from '../../public/techIcons/jekyll-logo.svg';
import react from '../../public/techIcons/react.svg';
import webpack from '../../public/techIcons/webpack.svg';
import csharp from '../../public/techIcons/csharp.svg';
import dotnet from '../../public/techIcons/dotnet-logo.svg';
import mongodb from '../../public/techIcons/mongodb.svg';
import mssql from '../../public/techIcons/mssql.svg';
import node from '../../public/techIcons/nodejs.svg';
import wordpress from '../../public/techIcons/wordpress.svg';
import dato from '../../public/techIcons/datocms.svg';
import oli from '../../public/about/oli.webp';
import fsma from '../../public/testimonials/fsma.webp';

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

export const testimonialsData = [
  {
    img: fsma,
    alt: 'Fitter. Stronger. More Athletic.',
    author: 'Andri Koeferli',
    url: 'https://fitterstrongermoreathletic.com',
    title: '',
    subtitle: '',
    description: 'Here is the description'
  }
]

export const aboutData = {
  aboutImage: {
    img: oli,
    alt: "Oli Dias"
  }
}