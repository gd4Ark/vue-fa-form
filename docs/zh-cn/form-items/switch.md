# 开关（switch）

<vuep  template="#switch-example"></vuep>

<script v-pre type="text/x-template" id="switch-example">
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
          label: '开关',
          key: 'switch',
          type: 'switch'
        }
      ],
      getFormData: () => ({
        switch: 0
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

参见 [Element 文档](https://element.eleme.cn/#/zh-CN/component/switch)



