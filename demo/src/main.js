import Vue from 'vue'
import VueFaFrom from 'vue-fa-form'

Vue.use(VueFaFrom, {
  location: {
    key: '1',
  },
})

import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
})
