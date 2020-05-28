import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BuyModalComponent from '@/components/Shared/BuyModal'
import vuetify from './plugins/vuetify'
import * as fb from 'firebase/app'
import 'firebase/auth'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.component('app-buy-modal', BuyModalComponent)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyA8kMhnV0c8EvlhPpxyMr3EO7a59wuvsHs',
      authDomain: 'itc-ads-8de6b.firebaseapp.com',
      databaseURL: 'https://itc-ads-8de6b.firebaseio.com',
      projectId: 'itc-ads-8de6b',
      storageBucket: 'itc-ads-8de6b.appspot.com',
      messagingSenderId: '1019700793007',
      appId: '1:1019700793007:web:b812f6ff78b92261c0ce5a'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
