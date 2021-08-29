import Vue from 'vue'
import VueRouter from 'vue-router'
import Api from '../views/Api.vue'
import App from '../views/App.vue'
import Portal from '../views/Portal.vue'
import Kasa from '../views/Kasa.vue'
import Education from '../views/Education.vue'
import Presentation from '../views/Presentation.vue'
import Dashboard from '../views/Dashboard.vue'
import Signer from '../views/Signer.vue'
import Legal from '../views/Legal.vue'
import Presentation_ukey from '../views/Presentation_ukey.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal
  },
  {
    path: '/portal',
    name: 'Portal',
    component: Portal
  },
  {
    path: '/kasa',
    name: 'Kasa',
    component: Kasa
  },
  {
    path: '/signer',
    name: 'Signer',
    component: Signer
  },
  {
    path: '/app',
    name: 'App',
    component: App
  },
  {
    path: '/api',
    name: 'Api',
    component: Api
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/presentation',
    name: 'Presentation',
    component: Presentation
  },
  {
    path: '/presentation_ukey',
    name: 'Presentation_ukey',
    component: Presentation_ukey
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
