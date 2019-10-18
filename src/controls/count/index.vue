<template>
  <el-input-number v-model="innerValue"
                   v-bind="get(item,'meta',{})" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'CountControl',
  mixins: [control]
}
</script>

