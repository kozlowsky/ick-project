import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store/store'
import mixin from './common/mixin'

Vue.config.productionTip = false

Vue.use(vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
