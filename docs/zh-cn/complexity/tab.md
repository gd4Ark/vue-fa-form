# 标签页（tab）

## 例子

<vuep  template="#tab-example"></vuep>

<script v-pre type="text/x-template" id="tab-example">
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
          key: 'nums',
          type: 'tab',
          activeName: 'base',
          items: [
            {
              type: 'multiple',
              title: '基本',
              key: 'base',
              items: [
                {
                  key: 'nickname',
                  label: '昵称',
                  type: 'text',
                  rules: [
                    {
                      required: true,
                      trigger: 'blur',
                      message: '必填'
                    }
                  ]
                },
                {
                  key: 'phone',
                  label: '电话',
                  type: 'text',
                  rules: [
                    {
                      required: true,
                      trigger: 'blur',
                      message: '必填'
                    }
                  ]
                },
                {
                  key: 'age',
                  label: '年龄',
                  type: 'text',
                  rules: [
                    {
                      required: true,
                      trigger: 'blur',
                      message: '必填'
                    }
                  ]
                },
                {
                  key: 'email',
                  label: '邮箱',
                  type: 'text',
                  rules: [
                    {
                      required: true,
                      trigger: 'blur',
                      message: '必填'
                    }
                  ]
                }
              ]
            },
            {
              type: 'multiple',
              title: '其他',
              key: 'other',
              items: [
                {
                  key: 'text1',
                  label: '文本1',
                  type: 'text',
                  rules: [
                    {
                      required: true,
                      trigger: 'blur',
                      message: '必填'
                    }
                  ]
                },
                {
                  key: 'text2',
                  label: '文本2',
                  type: 'text',
                  rules: [
                    {
                      required: true,
                      trigger: 'blur',
                      message: '必填'
                    }
                  ]
                },
                {
                  key: 'text3',
                  label: '文本3',
                  type: 'text',
                  rules: [
                    {
                      required: true,
                      trigger: 'blur',
                      message: '必填'
                    }
                  ]
                },
                {
                  key: 'text4',
                  label: '文本4',
                  type: 'text',
                  rules: [
                    {
                      required: true,
                      trigger: 'blur',
                      message: '必填'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      getFormData: () => ({
        nickname: '',
        phone: '',
        age: '',
        email: '',
        text1: '',
        text2: '',
        text3: '',
        text4: ''
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




