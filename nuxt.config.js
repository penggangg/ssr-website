const resolve = require('path').resolve
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    {
        src: '~plugins/css/common.scss',
        lang: 'scss'
    },
    {
        src: '~plugins/css/mixin.scss',
        lang: 'scss'
    },
    {
        src: '~plugins/css/normalize.scss',
        lang: 'scss'
    }
  ],
  plugins: [
    { src: '~/plugins/js/route', ssr: false}
  ],
  // 环境变量
	env: {
		baseUrl: process.env.BASE_URL || 'http://172.18.3.124:3000'
	},
  router: {
    extendRoutes (routes) {
      routes.push({
        name: 'newHouse',
        path: '/newHouse',
        meta: { activeClass: 'newHouse' },
        component: resolve(__dirname, 'components/newHouse.vue')
      })
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
   // 跨域处理
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api',
      {
        target: 'http://api.hewuchina.com', // api主机
        pathRewrite: { '/api': '' }
      }
    ]
  ]
}

