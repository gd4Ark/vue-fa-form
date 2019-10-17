<template>
  <el-date-picker v-model="innerValue"
                  :type="get(item,'meta.control_type','date')"
                  :time-arrow-control="true"
                  :align="get(item,'meta.align','center')"
                  :editable="get(item,'meta.editable',true)"
                  :clearable="get(item,'meta.clearable',true)"
                  :value-format="get(item,'meta.format','yyyy-MM-dd')"
                  :range-separator="get(item,'meta.range_separator','至')"
                  :start-placeholder="get(item,'meta.start_placeholder','开始日期')"
                  :end-placeholder="get(item,'meta.end_placeholder','结束日期')"
                  :placeholder="getPlaceholder('选择')"
                  :size="size"
                  @change="change" />
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'DateControl',
  mixins: [control],
  props: {
    change: {
      type: Function,
      required: true
    }
  }
}
</script>
