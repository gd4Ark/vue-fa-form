import get from 'lodash.get'
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    value: {
      type: [String, Number, Boolean, Array, Object, File],
      required: true,
    },
    size: {
      type: String,
      default: '',
    },
    getPlaceholder: {
      type: Function,
      default: () => {},
    },
    submit: {
      type: Function,
      required: true,
    },
  },
  computed: {
    innerValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    get,
  },
}
