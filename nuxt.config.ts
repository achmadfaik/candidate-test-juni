// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
          apiBase: 'https://test-candidate-api.mbss-erp.com'
        }
    },
    app: {
        head: {
            title: 'Pt. ABC',
            charset: 'utf-8',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
                    integrity: 'sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD',
                    crossorigin: 'anonymous'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap'
                },
                {
                    rel: 'stylesheet',
                    href: '/css/kuiper.css?v=1166'
                },
                {
                    rel: 'stylesheet',
                    href: '/css/nav.css?v=1166'
                },
                {
                    rel: 'stylesheet',
                    href: '/css/mobile.css?v=1166'
                },
                {
                    rel: 'stylesheet',
                    href: '/css/fonts.css?v=1166'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css'
                },
            ],
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
                    integrity: 'sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN',
                    crossorigin: 'anonymous'
                },
                {
                    src: "/js/functions.js",
                    body: true
                },
                {
                    src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js",
                    referrerpolicy: "no-referrer",
                    integrity: "sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==",
                    crossorigin: "anonymous",
                    body: true,
                },
                {
                    src: "https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js",
                    body: true,
                }
            ],
        }
    },
    components: true
})
