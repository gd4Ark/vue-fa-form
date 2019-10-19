export default {
  props: {
    // data
    formItems: {
      type: Array,
      required: true
    },
    // form style
    labelWidth: {
      type: String,
      default: '85px'
    },
    size: {
      type: String,
      default: ''
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    // event
    enableEnter: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    attrs() {
      const defaultAttrs = {
        size: this.size,
        showLabel: this.showLabel,
        labelWidth: '85px'
      }
      return Object.assign(this.$attrs, defaultAttrs)
    }
  }
}
