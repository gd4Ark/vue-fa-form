<template>
  <el-cascader v-model="innerValue"
               v-bind="attrs"
               :options="options"
               :placeholder="getPlaceholder('选择')"
               @change="change" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'CascaderControl',
  mixins: [control],
  computed: {
    options() {
      if (this.get(this.item, 'meta.options')) {
        return this.item.meta.options
      } else if (this.get(this.item, 'meta.getOptions')) {
        return this.item.meta.getOptions()
      }
      return []
    }
  }
}
</script>
