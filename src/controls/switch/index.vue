<template>
  <el-switch v-model="innerValue"
             :inactive-value="get(item, 'meta.active', true)"
             :active-value="get(item, 'meta.inactive', false)"
             active-color="#13ce66"
             inactive-color="#ff4949" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'SwitchControl',
  mixins: [control]
}
</script>
