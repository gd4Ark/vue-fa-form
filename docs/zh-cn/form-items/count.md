# 计数器（count）

<vuep  template="#count-example"></vuep>

<script v-pre type="text/x-template" id="count-example">
<template>
  <vue-fa-form :form-items="formItems"
               :get-form-data="getFormData"
               @submit="submit" />
</template>

<script>
export default {
  data() {
    return {
      formItems: [
        {
          label: '数字',
          key: 'number',
          type: 'count',
          meta: {
            min: 0,
            max: 10,
            step: 2
          },
          rules: [
            {
              required: true,
              trigger: 'blur',
              message: '数字必填'
            }
          ]
        }
      ],
      getFormData: () => ({
        number: ''
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

参见 [Element 文档](https://element.eleme.cn/#/zh-CN/component/input-number)

