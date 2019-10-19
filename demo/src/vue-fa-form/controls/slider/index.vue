<template>
  <el-slider v-model="innerValue"
             :input-size="size"
             v-bind="attrs" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'SliderControl',
  mixins: [control]
}
</script>
