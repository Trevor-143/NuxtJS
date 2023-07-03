// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Fake products store',
      meta: [
        {name: 'description', content: 'Fake products shop built with Nuxt 3'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0' },
        {rel: 'icon', type: 'image/png', href: 'assets/logo/logo.png' }
      ]
    }
  }
})
