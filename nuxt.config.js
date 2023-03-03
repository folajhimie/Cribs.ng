export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'perkin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.1.0/mdb.min.css", crossorigin: "anonymous"},
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/fontawesome.min.css", crossorigin: "anonymous"},
      
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css", integrity: "sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor", crossorigin: "anonymous"},
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"},
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/spinkit/2.0.1/spinkit.min.css"},
      { rel: "stylesheet", href: "/assets/animate.min.css"},
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"},
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.css"},
      { rel: "stylesheet", href: "/static/lib/Ionicons/ionicons.css"},
      { rel: "preconnect", href: "https://fonts.googleapis.com"},
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"},
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js",
        integrity: "sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk", 
        crossorigin: "anonymous",
        body: true,
        defer: true
      },

      {
        type: "text/javascript",
        src: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.1.0/mdb.min.js",
        body: true,
        defer: true
      },
      // {
      //   src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js",
      //   integrity: "sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy", 
      //   crossorigin: "anonymous",
      //   body: true,
      //   defer: true
      // },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0-beta1/js/bootstrap.min.js",
        crossorigin: "anonymous",
        body: true,
        defer: true
      },
      
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.min.js",
        body: true,
        defer: true
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.js",
        body: true,
        defer: true
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.js.map",
        body: true,
        defer: true
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.min.js.map",
        body: true,
        defer: true
      },
      {
        src: "https://unpkg.com/feather-icons",
        body: true,
        defer: true
      },
    ]
  },


  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3a4'},

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ["/@assets/perkins.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
