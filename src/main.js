import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import marked from 'marked';
import TabsPlugin from './plugins/tabsPlugin' 
library.add(faPlusSquare, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.filter('marked', marked)
Vue.use(TabsPlugin)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
