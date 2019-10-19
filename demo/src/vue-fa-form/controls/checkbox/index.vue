<template>
  <el-checkbox-group v-if="hasOptions"
                     v-model="innerValue"
                     v-bind="attrs"
                     @change="change">
    <component :is="get(item,'meta.type','el-checkbox')"
               v-for="option in options"
               :key="option.value"
               :label="option.value"
               v-bind="get(item,'meta.attrs',{})">
      {{ option.label }}
    </component>
  </el-checkbox-group>
  <el-checkbox v-else
               v-model="innerValue"
               v-bind="attrs" />
</template>

<script>
import isNull from 'lodash.isnull'
import checkboxControl from '../../mixins/checkbox-control'
export default {
  name: 'CheckboxControl',
  mixins: [checkboxControl]
}
</script>
