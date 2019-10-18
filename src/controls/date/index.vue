<template>
  <el-date-picker v-model="innerValue"
                  :placeholder="getPlaceholder('选择')"
                  :size="size"
                  v-bind="config"
                  @change="change" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'DateControl',
  mixins: [control],
  props: {
    change: {
      type: Function,
      required: true
    }
  },
  computed: {
    config() {
      const meta = this.get(this.item, 'meta', {})
      const defaultConfig = {
        type: 'date',
        timeArrowControl: true,
        align: 'center',
        editable: true,
        clearable: true,
        valueFormat: 'yyyy-MM-dd'
      }
      return Object.assign({}, defaultConfig, meta)
    }
  }
}
</script>
