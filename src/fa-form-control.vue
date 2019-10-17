<template>
  <div v-if="loaded">
    <!-- select -->
    <select-control v-if="item.type === 'select'"
                    v-model="val"
                    :size="size"
                    :item="item"
                    :options="selectOptions"
                    :change="changeSelect" />
    <!-- radio -->
    <radio-control v-else-if="item.type === 'radio'"
                   v-model="val"
                   :size="size"
                   :item="item"
                   :options="selectOptions"
                   :change="changeSelect" />
    <!-- cascader -->
    <cascader-control v-else-if="item.type === 'cascader'"
                      v-model="val"
                      :size="size"
                      :item="item" />
    <!-- date -->
    <date-control v-else-if="item.type === 'date'"
                  v-model="val"
                  :size="size"
                  :item="item"
                  :change="changeSelect" />
    <!-- sidebar -->
    <sidebar-control v-else-if="item.type === 'range'"
                     v-model="val"
                     :size="size"
                     :item="item" />
    <!-- count -->
    <count-control v-else-if="item.type === 'count'"
                   v-model="val"
                   :size="size"
                   :item="item" />
    <!-- upload -->
    <upload-control v-else-if="item.type === 'file'"
                    :item="item"
                    :model.sync="val" />
    <!-- upload-pic -->
    <upload-pic-control v-else-if="item.type === 'pic'"
                        v-model="val"
                        :item="item"
                        :model.sync="val" />
    <!-- switch -->
    <switch-control v-else-if="item.type === 'switch'"
                    v-model="val"
                    :size="size"
                    :item="item" />
    <!-- code -->
    <code-control v-else-if="item.type === 'code'"
                  v-model="val"
                  :item="item"
                  :get-placeholder="getPlaceholder" />
    <!-- location -->
    <location-control v-else-if="item.type === 'location'"
                      :model.sync="val"
                      :size="size"
                      :placeholder="getPlaceholder()" />
    <!-- rich text -->
    <rich-text-control v-else-if="item.type === 'richtext'"
                       ref="richText"
                       v-model="val"
                       :item="item"
                       :size="size" />
    <!-- default -->
    <input-control v-else
                   v-model="val"
                   :get-placeholder="getPlaceholder"
                   :item="item"
                   :size="size" />
  </div>
</template>
<script>
import get from 'lodash.get'
import controlList from './mixins/control-list'
export default {
  name: 'FaFormControl',
  mixins: [controlList],
  props: {
    item: {
      type: Object,
      required: true
    },
    model: {
      type: [String, Number, Boolean, File, Object, Array],
      required: true
    },
    size: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    loaded: false,
    val: '',
    options: []
  }),
  computed: {
    selectOptions() {
      if (get(this.item, 'meta.options')) {
        return this.item.meta.options
      }
      const module = get(this.item, 'meta.option_module')
      return this.$store.state[module].options
    }
  },
  watch: {
    val(val) {
      if (this._.isNull(val)) {
        val = ''
      }
      this.$emit('update:model', val)
    },
    model(val) {
      if (!this._.isEqual(this.val, val)) {
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
      if (get(this.item, 'meta.disabledEvent')) return
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
      if (!get(this.item, 'meta.enableEvent', false)) return
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
<style lang="scss" scoped>
// .el-form-item__content div:not(.el-input-group) {
//   display: block;
// }
// .el-form-item {
//   margin-bottom: 12px;
// }
// .icon {
//   font-size: 1.1rem;
// }
// .is-error {
//   .codemirror {
//     border-color: #f56c6c;
//   }
// }
// .create-select {
//   line-height: 2.5;
//   text-align: center;
//   a {
//     margin-left: 5px;
//     color: $color-primary;
//   }
// }
</style>

