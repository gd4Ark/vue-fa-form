<template>
  <el-input-number v-model="innerValue"
                   :step="get(item,'meta.step')"
                   :min="get(item,'meta.min')"
                   :max="get(item,'meta.max')" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'CountControl',
  mixins: [control]
}
</script>
