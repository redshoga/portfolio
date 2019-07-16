import bio from './plugins/bio'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: bio.header.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: bio.header.title
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: bio.header.imageUrl },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Nuxt Style Resources
   ** https://github.com/nuxt-community/style-resources-module
   */
  styleResources: {
    sass: ['~/assets/scss/variables.scss']
    // less: [],
    // stylus: []
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        // For VSCode Debugging
        // https://qiita.com/keiichi-hikita/items/e4b788a1d39aa88b46e3
        config.devtool = 'inline-cheap-module-source-map'
      }
    }
  }
}
