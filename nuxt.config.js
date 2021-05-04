export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Meu CEP',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/main.css',
  ],
  plugins: [
    '~plugins/vue-the-mask.js'
  ],
  components: true,
  buildModules: [
    'bootstrap-vue/nuxt',
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/fontawesome',
  ],
  fontawesome:{
    icons:{
      solid:true,
      brands:true,
    }
  },
  axios: {
    baseURL: 'https://viacep.com.br/ws'
  },
}
