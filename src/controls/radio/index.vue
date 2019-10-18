<template>
  <el-radio-group v-model="innerValue"
                  :size="size"
                  @change="change">
    <component :is="get(item,'meta.radio_type','el-radio')"
               v-for="option in options"
               :key="option.value"
               border
               :label="option.value">
      {{ option.label }}
    </component>
  </el-radio-group>
</template>

<script>
import selectControl from '../../mixins/select-control'
export default {
  name: 'RadioControl',
  mixins: [selectControl]
}
</script>
