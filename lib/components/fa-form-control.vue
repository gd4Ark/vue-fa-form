<template>
  <div v-if="loaded">
    <component :is="controlType"
               v-if="useSync"
               :value.sync="val"
               v-bind="controlAttrs" />
    <component :is="controlType"
               v-else
               v-model="val"
               v-bind="controlAttrs" />
  </div>
</template>
<script>
import get from 'lodash.get'
import isNull from 'lodash.isnull'
import isEqual from 'lodash.isequal'
import controlList from '../mixins/control-list'
export default {
  name: 'FaFormControl',
  mixins: [controlList],
  inject: ['enableEnter'],
  props: {
    item: {
      type: Object,
      required: true
    },
    model: {
      type: [String, Number, Boolean, File, Object, Array, Date],
      required: true
    },
    size: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    loaded: false,
    val: ''
  }),
  computed: {
    useSync() {
      const types = ['upload', 'uploadPic', 'location']
      return types.includes(this.item.type)
    },
    selectOptions() {
      if (get(this.item, 'meta.getOptions')) {
        return this.item.meta.getOptions()
      } else if (get(this.item, 'meta.options')) {
        return this.item.meta.options
      } else if (get(this.item, 'meta.optionModule')) {
        const module = this.item.meta.optionModule
        return this.$store.state[module].options
      }
      return null
    }
  },
  watch: {
    val(val) {
      if (isNull(val)) {
        val = ''
      }
      this.$emit('update:model', val)
    },
    model(val) {
      if (!isEqual(this.val, val)) {
        this.resetRichText(val)
        this.setVal(val)
      }
    }
  },
  mounted() {
    this.setVal(this.model)
    this.loaded = true
  },
  methods: {
    submit() {
      if (!this.enableEnter) return
      if (get(this.item, 'meta.disabledEnter')) return
      this.$emit('submit')
    },
    resetRichText(val) {
      if (this.$refs.richText) {
        setTimeout(() => {
          this.$refs.richText.setContent(val)
        }, 300)
      }
    },
    setVal(val) {
      if (val === '') {
        this.val = val
        return
      }
      const type = get(this.item, 'meta.type')
      switch (type) {
        case 'number':
          this.val = Number(val)
          break
        default:
          this.val = val
          break
      }
    },
    changeSelect() {
      if (!get(this.item, 'meta.changeSubmit', false)) return
      setTimeout(() => {
        this.$emit('submit')
      }, 20)
    },
    getPlaceholder(type = '输入') {
      return get(this.item, 'meta.placeholder') || `请${type}` + this.item.label
    }
  }
}
</script>

