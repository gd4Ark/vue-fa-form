<template>
  <el-cascader v-model="innerValue"
               :options="get(item,'meta.options')"
               :filterable="get(item,'meta.filterable')"
               :placeholder="getPlaceholder('选择')"
               :props="get(item,'meta.props',{})"
               :show-all-levels="get(item,'meta.showAllLevels',true)"
               :clearable="get(item,'meta.clearable',true)"
               :size="size" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'CascaderControl',
  mixins: [control]
}
</script>
