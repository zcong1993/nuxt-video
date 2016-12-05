module.exports = {
  head: {
    title: 'video',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: ['~assets/main.css', 'element-ui/lib/theme-default/index.css'],
  plugins: ['~plugins/element-ui.js']
}
