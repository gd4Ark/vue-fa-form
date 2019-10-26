<template>
  <fa-base-form v-if="loaded"
                ref="form"
                v-bind="attrs"
                :form-items="formItems"
                :form-data="newFormData"
                @warning="warning"
                @submit="handleSubmit">
    <el-form-item>
      <slot name="btn-prepend" />
      <el-button v-if="needSubmitBtn"
                 :size="size"
                 :disabled="btnDisabled"
                 type="primary"
                 @click="submit">
        {{ submitBtnText }}
      </el-button>
      <el-button v-if="needResetBtn"
                 :size="size"
                 @click="reset">
        {{ resetBtnText }}
      </el-button>
      <slot name="btn-append" />
    </el-form-item>
  </fa-base-form>
</template>
<script>
import clone from 'lodash.clone'
import FaBaseForm from './fa-base-form'
import { retainKeys } from '../utils'
import FaForm from '../mixins/fa-form'
export default {
  name: 'VueFaForm',
  components: {
    FaBaseForm
  },
  mixins: [FaForm],
  data: () => ({
    newFormData: null
  }),
  computed: {
    loaded() {
      return this.newFormData !== null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.newFormData = this.formData
        ? clone(this.formData)
        : this.getFormData()
      this.reset()
    },
    reset() {
      this.$nextTick(() => {
        const formData = this.$refs.form.reset()
        this.$emit('reset', formData)
      })
    },
    submit() {
      return this.$refs.form.submit()
    },
    warning() {
      this.$emit('warning')
    },
    handleSubmit() {
      const data = retainKeys(this.newFormData, this.getKeys(this.formItems))
      this.$emit('submit', data)
    },
    isContinue(item) {
      if (['tab', 'multiple'].includes(item.type)) {
        return true
      }
      if (['object', 'array'].includes(item.type)) {
        return false
      }
      return item.items
    },
    getKeys(array) {
      return array.reduce((keys, item) => {
        const append = this.isContinue(item)
          ? this.getKeys(item.items)
          : [item.key]
        return keys.concat([], append)
      }, [])
    }
  }
}
</script>
