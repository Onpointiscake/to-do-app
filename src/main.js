// Defaults:
import Vue from 'vue'
import {firestorePlugin} from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import App from './App.vue'

Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'todo-app-vue-69e09',
  databaseURL: 'https://todo-app-vue-69e09.firebaseio.com'
})
export const db = firebase.firestore()

import './registerServiceWorker'
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
library.add(faBan)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
