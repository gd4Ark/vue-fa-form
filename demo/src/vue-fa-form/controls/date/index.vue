<template>
  <el-date-picker v-model="innerValue"
                  :placeholder="getPlaceholder('选择')"
                  v-bind="config"
                  @change="change" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'DateControl',
  mixins: [control],
  computed: {
    config() {
      const defaultConfig = {
        type: 'date',
        align: 'center',
        editable: true,
        clearable: true,
        valueFormat: 'yyyy-MM-dd'
      }
      return Object.assign({}, defaultConfig, this.attrs)
    }
  }
}
</script>
