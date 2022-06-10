import VueAnalytics from 'vue-analytics'


export default ({ Vue, router }) => {
  Vue.use(VueAnalytics, {
    id: 'UA-71397235-1',
    router,
    debug: {
      enabled: false,
      sendHitTask: process.env.NODE_ENV === 'production'
    }
  })
}
