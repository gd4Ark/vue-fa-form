# 富文本（richtext）

<vuep  template="#richtext-example"></vuep>

<script v-pre type="text/x-template" id="richtext-example">
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
          label: '内容',
          key: 'content',
          type: 'richtext',
          meta:{
            async uploadImage(data){
              console.log(data)
            }
          }
        }
      ],
      getFormData: () => ({
        content: ''
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

|    属性     |    类型    |                             描述                             |
| :---------: | :--------: | :----------------------------------------------------------: |
| uploadImage | `Function` | 定义该方法后，将会显示上传图片按钮，该参数接受一个`formData`参数。注意，该方法必须返回`Proimse` |

