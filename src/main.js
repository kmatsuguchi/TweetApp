import Vue from 'vue'
//import './plugins/axios'
import router from './router'
import './plugins/vuetify'
import App from './App.vue'

Vue.use(router)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
