import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue'
import TriviaGame from './components/TriviaGame.vue'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-393921.okta.com/oauth2/default',
  client_id: '0oa1dxgwde3RfEqVb357',
  //redirect_uri: 'http://localhost:8081/implicit/callback',
  redirect_uri: 'https://master.d15cf51swd0vqo.amplifyapp.com/implicit/callback',
  scope: 'openid profile email'
})

const routes = [
  { path: '/implicit/callback', component: Auth.handleCallback() },
  { path: '/trivia', component: TriviaGame }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(Dashboard)
}).$mount('#app')