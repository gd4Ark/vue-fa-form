<template>
  <el-radio-group v-model="innerValue"
                  v-bind="attrs"
                  @change="change">
    <component :is="get(item,'meta.type','el-radio')"
               v-for="option in options"
               :key="option.value"
               :label="option.value"
               v-bind="get(item,'meta.attrs',{})">
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
