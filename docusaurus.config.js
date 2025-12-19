// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// You can remove them if you don't want this feature.

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'From Digital Brain to Physical Body',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://Darakhshan08.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // ✅ Vercel production URL
  url: 'https://physical-ai-robotics-book-inky.vercel.app',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'Darakhshan08',
  // projectName: 'Physical-AI-Humanoid-Robotics-Book',
  // deploymentBranch: 'gh-pages', // The branch Docusaurus will push to for deployment.
  
  trailingSlash: false, // For GitHub Pages

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Darakhshan08/Physical-AI-Robotics-Book/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
      },
      // ... existing themeConfig content
      image: 'img/docusaurus-social-card.jpg', // TODO: Update social card image
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'My Project Logo', // TODO: Update logo alt text
          src: 'img/logo.svg', // TODO: Update logo source
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Book',
            to: '/docs/introduction/what-is-physical-ai',
          },
          // {to: '/blog', label: 'Blog', position: 'left'}, // REMOVED BLOG
          {
            href: 'https://github.com/Darakhshan08/Physical-AI-Robotics-Book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Book',
                to: '/docs/introduction/what-is-physical-ai', // TODO: Update with actual first chapter
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus', // TODO: Update
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus', // TODO: Update
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus', // TODO: Update
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog', // REMOVED BLOG
              //   to: '/blog', // TODO: Update or remove if not needed
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/Darakhshan08/Physical-AI-Robotics-Book',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Book. Built with Docusaurus.`, // TODO: Update copyright
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'bash', 'markup', 'yaml', 'csharp'],
      },
      colorMode: {
        defaultMode: 'dark', // Default to dark mode as it's common for dev docs
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;