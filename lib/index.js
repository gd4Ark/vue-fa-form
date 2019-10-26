import faForm from './components/fa-form'
import initMap from './utils/init-map'

faForm.install = (Vue, options) => {
  Vue.component(faForm.name, faForm)
  if (options.location) {
    initMap(Vue, options.location)
  }
}

export default faForm

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(faForm.name, faForm)
}
