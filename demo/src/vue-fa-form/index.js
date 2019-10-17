import faForm from './fa-form'
export default faForm

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-fa-form', faForm)
}
