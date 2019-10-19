# 时间（time）

<vuep  template="#time-example"></vuep>

<script v-pre type="text/x-template" id="time-example">
<template>
  <vue-fa-form label-width="100px"
               :form-items="formItems"
               :get-form-data="getFormData"
               @submit="submit" />
</template>

<script>
export default {
  data() {
    return {
      formItems: [
        {
          label: '固定时间',
          key: 'time1',
          type: 'time',
          meta: {
            'picker-options': {
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }
          }
        },
        {
          label: '任意时间',
          key: 'time2',
          type: 'time',
          meta: {
            type: 'picker',
            'picker-options': {
              'selectable-range': '18:30:00 - 20:30:00'
            }
          }
        },
        {
          label: '时间范围',
          key: 'time3',
          type: 'time',
          meta: {
            type: 'picker',
            isRange: true,
          }
        }
      ],
      getFormData: () => ({
        time1: '',
        time2: '',
        time3: ''
      })
    }
  },
  methods: {
    submit(data) {
      console.log(data)
    }
  }
}
</script>
</script>

## meta 属性

支持 TimePicker 组件的所有属性，详见：[文档](https://element.eleme.cn/#/zh-CN/component/time-picker)，除此之外：

| 属性 |   类型   | 默认值 |          描述          |
| :--: | :------: | :----: | :--------------------: |
| type | `String` | select | 控件类型，可选值如下。 |

### type

|   值   |      控件      |
| :----: | :------------: |
| select | el-time-select |
| picker | el-time-picker |

### 默认值

|       属性        |  默认值  |             描述             |
| :---------------: | :------: | :--------------------------: |
|     clearable     |   true   |          是否可清空          |
| start-placeholder | 开始时间 | 范围选择时开始日期的占位内容 |
|  end-placeholder  | 结束时间 | 范围选择时开始日期的占位内容 |
