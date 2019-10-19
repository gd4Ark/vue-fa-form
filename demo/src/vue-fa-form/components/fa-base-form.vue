<template>
  <el-form v-if="loaded"
           ref="form"
           :class="[{'not-show-label':!showLabel}]"
           :model="formData"
           v-bind="attrs"
           :rules="rules"
           @submit.native.prevent>
    <fa-form-item v-for="(item) in formItems"
                  :key="item.key"
                  :item="item"
                  :form-items="formItems"
                  :size="size"
                  :form-data="formData"
                  :rules="rules"
                  :splice-key="item.key"
                  @submit="submit" />
    <slot />
  </el-form>
</template>
<script>
import faFormItem from './fa-form-item'
import baseForm from '../mixins/base-form'
export default {
  name: 'FaBaseForm',
  components: {
    faFormItem
  },
  provide() {
    const { enableEnter } = this
    return {
      enableEnter
    }
  },
  mixins: [baseForm],
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    rules: {},
    loaded: false
  }),
  mounted() {
    this.initRules(this.formItems)
    this.loaded = true
  },
  methods: {
    submit() {
      let res = false
      this.$refs.form.validate(valid => {
        if (valid) {
          res = true
          return this.$emit('submit')
        }
        this.$emit('warning')
      })
      return res
    },
    reset() {
      this.$refs.form.resetFields()
      return this.formData
    },
    initRules(formItems, key = '') {
      formItems.forEach((el, index) => {
        const append = el.key ? `.${el.key}` : `[${index}]`
        const k = key ? key + append : el.key
        if (el.rules) {
          this.rules[k] = el.rules
        } else if (el.items) {
          const isComplex = ['object', 'array'].includes(el.type)
          this.initRules(el.items, isComplex ? k : key)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.el-form.not-show-label {
  .el-form-item__label {
    display: none;
  }
}
.el-form-item.el-form-item-container {
  margin-bottom: 0;
}
.el-form-item:not(.el-form-item-container) {
  margin-bottom: 22px;
}
</style>
