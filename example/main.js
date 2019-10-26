import Vue from 'vue'
import App from './App.vue'

import VueFaForm from 'vue-fa-form'

Vue.use(VueFaForm, {
  location: {
    key: 'your_key'
  }
})

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
