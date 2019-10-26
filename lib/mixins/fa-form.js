export default {
  props: {
    // data
    formItems: {
      type: Array,
      required: true
    },
    formData: {
      type: Object,
      default: null
    },
    getFormData: {
      type: Function,
      default: () => {}
    },
    // style
    size: {
      type: String,
      default: ''
    },
    // btn
    needSubmitBtn: {
      type: Boolean,
      default: true
    },
    needResetBtn: {
      type: Boolean,
      default: true
    },
    btnDisabled: {
      type: Boolean,
      default: false
    },
    submitBtnText: {
      type: String,
      default: '提交'
    },
    resetBtnText: {
      type: String,
      default: '重置'
    }
  },
  computed: {
    attrs() {
      const defaultAttrs = {
        size: this.size
      }
      return Object.assign(this.$attrs, defaultAttrs)
    }
  }
}
