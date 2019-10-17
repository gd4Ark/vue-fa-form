export default {
  props: {
    // data
    formItem: {
      type: Array,
      required: true,
    },
    // form style
    showLabel: {
      type: Boolean,
      default: true,
    },
    labelWidth: {
      type: String,
      default: '85px',
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
  },
}
