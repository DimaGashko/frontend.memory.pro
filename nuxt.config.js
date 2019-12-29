import path from 'path';
import envDev from './.env.dev';
import envProd from './.env.prod';

const env = process.env.NODE_ENV === 'productino' ? envProd : envDev;

export default {
  mode: 'universal',

  head: {
    title: "Memory.pro - you're going to become a memory master!",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Memory.pro is a cool place for memory training - train ' +
          'your memory and become a memory master.'
      }
    ],
    link: [{ rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  css: ['assets/styles/index.scss', 'bootstrap-vue/dist/bootstrap-vue.css'],

  plugins: ['plugins/bootstrap.js', 'plugins/filters.js'],

  buildModules: [
    '@nuxtjs/eslint-module'
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module'
  ],

  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxtjs/auth'],

  auth: {
    strategies: {
      local: false,
      'laravel.passport': {
        url: env.apiUrl,
        client_id: env.client_id,
        client_secret: env.client_secret,
        userinfo_endpoint: `${env.apiUrl}/user`
        //  redirect_uri: env.apiUrl
      }
    }
  },

  router: {},

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: env.apiUrl,
    headers: {
      get: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }
  },

  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      config.resolve.alias['@@'] = path.resolve(__dirname, './components');
    }
  },

  env
};
