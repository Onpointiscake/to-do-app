// Defaults:
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// Get and run bootstrap into the project:
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// Get and run Fontawesome icons:
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './registerServiceWorker'
import './localdb'

library.add(faBan)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
