// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Godspeed Docs',
  tagline: 'Documentation for Godspeed',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Godspeed', // Usually your GitHub org/user name.
  projectName: 'Godspeed', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          path: 'blog',
          blogTitle: 'Learning Modules',
          blogSidebarTitle: 'Learning Modules',
          blogSidebarCount: 'ALL',
          routeBasePath: 'tutorial',
          include: ['**/*.{md,mdx}'],
          sortPosts: 'ascending'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Godspeed',
        items: [
          {
            type: 'doc',
            docId: 'preface',
            position: 'left',
            label: 'Documentation'
          },
          { to: 'tutorial', label: 'Learning Modules', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Mindgrep Technologies Pvt Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
