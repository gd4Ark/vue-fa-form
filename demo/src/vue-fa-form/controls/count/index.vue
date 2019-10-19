<template>
  <el-input-number v-model="innerValue"
                   v-bind="attrs" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'CountControl',
  mixins: [control]
}
</script>

