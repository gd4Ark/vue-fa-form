import control from './control'
export default {
  mixins: [control],
  props: {
    change: {
      type: Function,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  }
}
