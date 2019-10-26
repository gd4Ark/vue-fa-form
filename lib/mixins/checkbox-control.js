import control from './control'
import isNull from 'lodash.isnull'
export default {
  mixins: [control],
  props: {
    change: {
      type: Function,
      required: true
    },
    options: {
      type: Array,
      default: null
    }
  },
  computed: {
    hasOptions() {
      return !isNull(this.options)
    }
  }
}
