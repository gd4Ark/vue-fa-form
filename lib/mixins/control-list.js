import { firstLowerCase } from '../utils'
import { fileListToObject } from '../utils/readFile'
const controlsFiles = require.context('../controls', true, /\index.vue$/)
let controls = fileListToObject(controlsFiles)

controls = Object.keys(controls).reduce((modules, key) => {
  const control = controls[key]
  return Object.assign(modules, {
    [control.name]: control
  })
}, {})

const controlTypes = Object.keys(controls).map(name => {
  const type = name.substr(0, name.length - 'Control'.length)
  return firstLowerCase(type)
})

export default {
  components: {
    ...controls
  },
  data: () => ({
    controlTypes
  }),
  computed: {
    controlAttrs() {
      const { size, item, submit } = this
      return {
        size,
        item,
        submit,
        options: this.selectOptions,
        change: this.changeSelect,
        getPlaceholder: this.getPlaceholder
      }
    },
    controlType() {
      const type = this.controlTypes.includes(this.item.type)
        ? this.item.type
        : 'input'
      return `${type}-control`
    }
  }
}
