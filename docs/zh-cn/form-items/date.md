# 日期（date）

<vuep  template="#date-example"></vuep>

<script v-pre type="text/x-template" id="date-example">
<template>
  <vue-fa-form :form-item="formItems"
               :get-form-data="getFormData"
               @submit="submit" />
</template>

<script>
export default {
  data() {
    return {
      formItems: [
        {
          label: '日期',
          key: 'date',
          type: 'date',
          meta: {}
        }
      ],
      getFormData: () => ({
        date: ''
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

## 复杂一点的例子

<vuep  template="#date-2-example"></vuep>

<script v-pre type="text/x-template" id="date-2-example">
<template>
  <vue-fa-form :form-item="formItems"
               :get-form-data="getFormData"
               @submit="submit" />
</template>



<script>
export default {
  data() {
    return {
      formItems: [
        {
          label: '日期',
          key: 'date',
          type: 'date',
          meta: {
            pickerOptions: {
              disabledDate(time) {
                return time.getTime() > Date.now()
              },
              shortcuts: [
                {
                  text: '今天',
                  onClick(picker) {
                    picker.$emit('pick', new Date())
                  }
                },
                {
                  text: '昨天',
                  onClick(picker) {
                    const date = new Date()
                    date.setTime(date.getTime() - 3600 * 1000 * 24)
                    picker.$emit('pick', date)
                  }
                },
                {
                  text: '一周前',
                  onClick(picker) {
                    const date = new Date()
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                    picker.$emit('pick', date)
                  }
                }
              ]
            }
          }
        }
      ],
      getFormData: () => ({
        date: ''
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

## 时间范围

<vuep  template="#date-3-example"></vuep>

<script v-pre type="text/x-template" id="date-3-example">
<template>
  <vue-fa-form :form-item="formItems"
               :get-form-data="getFormData"
               @submit="submit" />
</template>

<script>
export default {
  data() {
    return {
      formItems: [
        {
          label: '日期',
          key: 'date',
          type: 'date',
          meta: {
            type: 'datetimerange',
            rangeSeparator: '至',
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期'
          }
        }
      ],
      getFormData: () => ({
        date: []
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

## 属性

支持 DatePicker 组件的所有属性，详见：[文档](https://element.eleme.cn/#/zh-CN/component/date-picker)。

