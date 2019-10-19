import get from 'lodash.get'
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    value: {
      type: [String, Number, Boolean, Array, Object, File, Date],
      required: true
    },
    size: {
      type: String,
      default: ''
    },
    getPlaceholder: {
      type: Function,
      default: () => {}
    },
    submit: {
      type: Function,
      default: () => {}
    },
    change: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    innerValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    attrs() {
      const defaultAttrs = {
        size: this.size
      }
      const meta = this.get(this.item, 'meta', {})
      return Object.assign(defaultAttrs, meta)
    }
  },
  methods: {
    get
  }
}
