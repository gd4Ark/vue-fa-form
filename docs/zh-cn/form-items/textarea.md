# 文本域

示例

<vuep  template="#textarea-example"></vuep>

<script v-pre type="text/x-template" id="textarea-example">
<template>
  <vue-fa-form :form-item="formItems"
               :get-form-data="getFormData" />
</template>

<script>
export default {
  data() {
    return {
      formItems: [
        {
          label: '文本域',
          key: 'textarea',
          type: 'textarea',
          meta: {
            row: 6
          },
          rules: [
            {
              required: true,
              trigger: 'blur',
              message: '文本框必填'
            }
          ]
        }
      ],
      getFormData: () => ({
        textarea: ''
      })
    }
  }
}
</script>