const isProductionDeployment = process.env.DEPLOYMENT === 'production';

module.exports = {
  title: 'Monarch',
  tagline: 'Build high-quality UIs with ease',
  url: 'https://monarchapp.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'assets/monarch-fav.ico',
  organizationName: 'Dropsource', // Usually your GitHub org/user name.
  projectName: 'monarch', // Usually your repo name.
  scripts: [
    // fontawesome script is used for icons on landing page, e.g. "fa-regular fa-keyboard" or "fa-solid fa-bug"
    'https://kit.fontawesome.com/99abf59b20.js' 
  ],
  stylesheets: [
    '/fonts/stylesheet.css'
  ],
  themeConfig: {
    image: 'assets/monarch-open-graph-purple.png',
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: 'Monarch',
      logo: {
        alt: 'Monarch Logo',
        src: 'assets/logo-monarch.png',
        srcDark: 'assets/logo-monarch.png'
      },
      items: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'blog',
          label: 'Releases', 
          position: 'right'},
        {
          href: 'https://github.com/Dropsource/monarch',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Monarch Logo',
        src: 'assets/logomark-monarch-white.png',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/introduction',
            },
            {
              label: 'Advanced Usage',
              to: 'docs/themes',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Releases',
              to: 'blog',
            },
            {
              label: 'Dropsource',
              href: 'https://dropsource.com',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              html: `
                  <a href="http://eepurl.com/hJ-S0L" target="_blank" aria-label="Join our newsletter">
                    <b>Join our newsletter 💌</b>
                  </a>
                `,
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Dropsource/monarch', 
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/monarch_app',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCuG4P4KTQ2HbikL57HIc1OQ',
            }
          ],
        },
        {
          title: 'Credits',
          items: [
            {
              label: 'Storybook (inspiration for Monarch)',
              href: 'https://storybook.js.org/'
            },
            {
              label: 'Best Flutter UI Templates (used for the samples above)',
              href: 'https://github.com/mitesh77/Best-Flutter-UI-Templates'
            }
          ]
        }
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Releases',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dropsource`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
      defaultLanguage: 'dart',
      additionalLanguages: ['dart', 'bash'],
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: false,
          blogSidebarCount: 10
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: isProductionDeployment
          ? {
              trackingID: 'G-W8V27Q03X3',
              anonymizeIP: false,
            }
          : undefined,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ]
};
