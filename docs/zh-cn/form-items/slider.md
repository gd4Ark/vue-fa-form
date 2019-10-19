# 滑块（slider）

<vuep  template="#slide-example"></vuep>

<script v-pre type="text/x-template" id="slide-example">
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
          label: '数量',
          key: 'number',
          type: 'slider',
          meta: {
            min: 0,
            max: 1,
            step: 0.1,
            showStops: true
          }
        }
      ],
      getFormData: () => ({
        number: 0
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
