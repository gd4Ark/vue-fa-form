import form from './form'
export default {
  mixins: [form],
  props: {
    // data
    formData: {
      type: Object,
      default: null,
    },
    getFormData: {
      type: Function,
      default: () => {},
    },
    // btn
    needSubmitBtn: {
      type: Boolean,
      default: true,
    },
    needResetBtn: {
      type: Boolean,
      default: true,
    },
    btnDisabled: {
      type: Boolean,
      default: false,
    },
    submitBtnText: {
      type: String,
      default: '提交',
    },
    resetBtnText: {
      type: String,
      default: '重置',
    },
  },
  computed: {
    baseFormAttrs() {
      const props = [
        'inline',
        'size',
        'showLabel',
        'labelWidth',
        'showMessage',
        'formItem',
      ]
      return props.map(key => ({
        [key]: this[key],
      }))
    },
  },
}
