<template>
  <el-form v-if="loaded"
           ref="form"
           :model="formData"
           :show-message="showMessage"
           :inline="inline"
           :rules="rules"
           :label-width="showLabel ? labelWidth : '0'"
           autocomplete="off"
           @submit.native.prevent>
    <fa-form-item v-for="(item) in formItem"
                  :key="item.key"
                  :item="item"
                  :form-item="formItem"
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
import form from './mixins/form'
export default {
  name: 'FaBaseForm',
  components: {
    faFormItem
  },
  mixins: [form],
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
    this.initRules(this.formItem)
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
    initRules(formItem, key = '') {
      formItem.forEach((el, index) => {
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
.el-form-item.el-form-item-container {
  margin-bottom: 0;
}
.el-form-item:not(.el-form-item-container) {
  margin-bottom: 22px;
}
</style>
