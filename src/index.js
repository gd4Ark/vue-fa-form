import faModal from './fa-modal'
export default faModal

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('fa-modal', faModal)
}
