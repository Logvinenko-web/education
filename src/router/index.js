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
import One_C from '../views/One_C.vue'
import Releases from '../views/Releases.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'f62d0d4d-32d4-41f4-a223-75f265628c76',
    component: Dashboard
  },
  {
    path: '/legal',
    name: 'ac796474-2809-4037-9bea-b83207e202cf',
    component: Legal
  },
  {
    path: '/portal',
    name: 'bb7c70da-41d9-48cf-80de-e0c70a084b70',
    component: Portal
  },
  {
    path: '/kasa',
    name: 'dfe41080-658b-4cb3-8209-52ab56a3825b',
    component: Kasa
  },
  {
    path: '/signer',
    name: '4f98abcd-04b6-4eae-afd9-5c63dc69e33e',
    component: Signer
  },
  {
    path: '/app',
    name: 'd2989be6-a754-4022-8985-090778bbfea4',
    component: App
  },
  {
    path: '/api',
    name: '4dc88f7c-81e0-42de-a864-03f9b6aed4ea',
    component: Api
  },
  {
    path: '/education',
    name: 'da50127d-945c-4ddd-8623-3a31632e26f7',
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
  {
    path: '/1c',
    name: '1c',
    component: One_C
  },
  {
    path: '/releases',
    name: '',
    component: Releases
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
