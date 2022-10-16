// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  docs: [
    "intro",
    {
      type: 'category',
      label: 'Topics',
      collapsed: false,
      items: [
          {
            type: 'category',
            label: 'SKALE Network',
            collapsed: false,
            items: [
                'topics/skale/about-the-network',
                // 'topics/skale/sfuel',
                // 'topics/skale/ethereum',
                // 'topics/skale/multi-chain',
                // 'topics/skale/hubs'
            ]
          },
          // {
          //   type: 'category',
          //   label: 'Technology',
          //   collapsed: false,
          //   items: [
          //       'topics/technology/containerization'
          //   ]
          // }
        ],
    },
    // {   
    //     type: 'category',
    //     label: 'Developers',
    //     collapsed: false,
    //     items: [
    //         'developers/overview',
    //         'developers/tools',
    //         {
    //             type: 'category',
    //             label: 'SKALE Network',
    //             collapsed: true,
    //             items: [
    //                 'developers/skale/tools'
    //             ]
    //         },
    //         {
    //             type: 'category',
    //             label: 'Shared',
    //             collapsed: true,
    //             items: [
    //                 'developers/shared/tools'
    //             ]
    //         }
    //     ]
    // },
    {
        type: 'category',
        label: 'Platforms',
        collapsed: false,
        items: [
            {
                type: 'category',
                label: 'sFUEL Station',
                collapsed: true,
                items: [
                    'platforms/sfuel-station/about',
                    'platforms/sfuel-station/supported-chains',
                    'platforms/sfuel-station/using-the-station',
                ]
            },
            {
                type: 'category',
                label: 'SKALE Chain UI',
                collapsed: true,
                items: [
                    'platforms/skale-chain-ui/about',
                    // 'platforms/skale-chain-ui/supported-chains',
                    // 'platforms/skale-chain-ui/using-the-ui',
                ]
            }
        ]
    },
    'appendix/index',
    'attribution/index'
  ],
};

module.exports = sidebars;
