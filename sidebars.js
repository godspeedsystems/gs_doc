/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Preface',
      id: 'preface',
    },

    // {
    //   type: 'category',
    //   label: 'Infra and System',
    //   items: [
    //     'infra-and-system/intro',
    //     'infra-and-system/technology-used/intro',
    //     //'infra-and-system/Application',
    //   ],
    // },
    {
      type: 'doc',
      label: 'Introduction',
      id: 'microservices/intro',
    },
    {
          type: 'category',
          label: 'Setup',
          items: [
            'microservices/setup/getting-started',
            'microservices/setup/scaffolding',
            {
              type: 'category',
              label: 'Configuration',
              items: [
                'microservices/setup/configuration/env-vars',
                'microservices/setup/configuration/static-vars'
              ]
            },
            'microservices/setup/documentation',
            'microservices/setup/tests'
          ],
    },
    {
      type: 'doc',
      label: 'CLI',
      id: 'microservices/introduction-cli',
    }, 
    {
      type: 'doc',
      label: 'Events',
      id: 'microservices/events',
    },  
    {
      type: 'doc',
      label: 'Workflows',
      id: 'microservices/workflows',
    },                    
    {
      type: 'category',
      label: 'Datasources',
      items: [
        'microservices/datasources/intro',
        'microservices/datasources/api',
        'microservices/datasources/datastore'
      ],
    },
    {
      type: 'doc',
      label: 'Authentication & Authorization',
      id: 'microservices/authen-author',
    }, 

    // {
    //   type: 'category',
    //   label: 'Modern Microservices Framework',
    //   items: [
    //     {
    //       type: 'category',
    //       label: 'Setup',
    //       items: [
    //         'microservices/setup/getting-started',
    //         'microservices/setup/introduction-cli',
    //         'microservices/setup/scaffolding',
    //         'microservices/setup/environment-variables'
    //       ],
    //     },
    //     'microservices/intro',
    //     'microservices/events', 
    //     'microservices/workflows', 
    //     {
    //       type: 'category',
    //       label: 'Datasources',
    //       items: [
    //         'microservices/datasources/intro',
    //         'microservices/datasources/api',
    //         'microservices/datasources/datastore'
    //       ],
    //     },
    //     'microservices/authen-author', 
    //   ]// 'microservices/technology-used/intro'],
    // },

    // {
    //   type: 'category',
    //   label: 'Serverless Workflows',
    //   items: [
    //     'serverless workflows/intro',
    //     'serverless workflows/technology-used/intro',
    //   ],
    // },

    // {
    //   type: 'category',
    //   label: 'Communication',
    //   items: ['communication/intro']//, 'communication/technology-used/intro'],
    // },

    // {
    //   type: 'category',
    //   label: 'Data at Rest and Flow',
    //   items: [
    //     'data-at-flow-and-at-rest/CRUD/intro',
    //     {
    //       type: 'category',
    //       label: 'CRUD',
    //       items: [
    //         'data-at-flow-and-at-rest/CRUD/CRUD API',
    //         'data-at-flow-and-at-rest/CRUD/data-federation',
    //         'data-at-flow-and-at-rest/model-setup',
    //         'data-at-flow-and-at-rest/scaffolding',
    //         'data-at-flow-and-at-rest/technology-used/intro',
    //       ],
    //     },
    //   ],
    // },

    // {
    //   type: 'category',
    //   label: 'Security',
    //   items: ['security/intro']//, 'security/Auth/intro'],
    // },

    // {
    //   type: 'category',
    //   label: 'Risks',
    //   items: ['risks/intro','risks/essential-7'],
    // },

    // {
    //   type: 'category',
    //   label: 'Writing Business Logic',
    //   items: [
    //     'writing-business-logic/intro',
    //     'writing-business-logic/functions',
    //     'writing-business-logic/events',
    //   ],
    // },

    {
      type: 'category',
      label: 'Telemetry',
      items: ['telemetry/intro'],
    },

    // {
    //   type: 'category',
    //   label: 'Springboot Integration',
    //   items: ['springboot-integration/intro'],
    // },

    // {
    //   type: 'category',
    //   label: 'Scaffolding',
    //   items: ['scaffolding/intro', 'scaffolding/config-loading'],
    // },

    // {
    //   type: 'doc',
    //   label: 'Tech Stack',
    //   id: 'tech-stack',
    // },

    {
      type: 'doc',
      label: 'Roadmap',
      id: 'roadmap',
    },

    {
      type: 'doc',
      label: 'FAQ',
      id: 'faq',
    },

    // {
    //   type: 'doc',
    //   label: 'Development Process',
    //   id: 'development-process',
    // },

    // {
    // type: 'category',
    //label: 'Out of Box',
    //  items: ['out-of-box/auto-export','out-of-box/auto-instrumentation','out-of-box/templates','out-of-box/hooks','out-of-box/dual-write'],
    // },

    // {
    //   type: 'category',
    //   label: 'Notification API Specification',
    //   items: ['notification-api'],
    // },
  ],
};

module.exports = sidebars;
