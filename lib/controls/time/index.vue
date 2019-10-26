<template>
  <el-time-select v-if="type === 'select'"
                  v-model="innerValue"
                  :placeholder="getPlaceholder('选择')"
                  v-bind="config"
                  @change="change" />
  <el-time-picker v-else-if="type === 'picker'"
                  v-model="innerValue"
                  :placeholder="getPlaceholder('选择')"
                  v-bind="config"
                  @change="change" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'TimeControl',
  mixins: [control],
  computed: {
    type() {
      return this.get(this.item, 'meta.type', 'select')
    },
    config() {
      const defaultConfig = {
        clearable: true,
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
      return Object.assign({}, defaultConfig, this.attrs)
    }
  }
}
</script>

<style lang="scss">
.el-date-editor .el-range-separator {
  width: 10%;
}
</style>
