<template>
  <el-slider v-model="innerValue"
             :step="get(item,'meta.step')"
             :min="get(item,'meta.min')"
             :max="get(item,'meta.max')"
             show-input
             :input-size="size" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'SidebarControl',
  mixins: [control]
}
</script>
