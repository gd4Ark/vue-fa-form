import { fileListToObject } from '../utils/readFile'
const controlsFiles = require.context('../controls', true, /\index.vue$/)
let controls = fileListToObject(controlsFiles)

controls = Object.keys(controls).reduce((modules, key) => {
  const control = controls[key]
  return Object.assign(modules, {
    [control.name]: control
  })
}, {})
export default {
  components: {
    ...controls
  }
}
