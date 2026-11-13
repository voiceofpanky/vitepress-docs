export default {
  title: 'STEMSpark4Kids User Guide',
  description: 'User documentation for STEMSpark4Kids',
  base: '/user-guide/',
  outDir: '../build/user-guide',
  themeConfig: {
    nav: [
    //   { text: 'Guide', link: '/' },
         { text: 'Guide', link: '/' },
      { text: 'User guide', link: '/' }
    ],
    sidebar: [
      {
        text: 'Getting started',
        items: [
        //   { text: 'Developer guide', link: '/' },
          { text: 'User guide', link: '/' },
          // { text: 'User guide', link: '/user-guide' }
        ]
      }
    ],
    socialLinks: []
  }
}