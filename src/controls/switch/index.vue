<template>
  <el-switch v-model="innerValue"
             v-bind="get(item,'meta')" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'SwitchControl',
  mixins: [control]
}
</script>
