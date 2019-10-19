<template>
  <el-switch v-model="innerValue"
             v-bind="attrs" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'SwitchControl',
  mixins: [control]
}
</script>
