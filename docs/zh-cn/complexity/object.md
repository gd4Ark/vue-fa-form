# 对象（object）

有时候我们需要绑定比较复杂的嵌套对象，比如：

```json
{
  nickname: '4ark',
  meta: {
    github: 'https://github.com/gd4Ark',
    blog: 'https://4ark.me'
  }
}
```

## 例子

<vuep  template="#object-example"></vuep>

<script v-pre type="text/x-template" id="object-example">
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
          label: '昵称',
          key: 'nickname',
          type: 'text',
          rules: [
            {
              required: true,
              trigger: 'blur',
              message: '昵称为必填'
            }
          ]
        },
        {
          key: 'meta',
          type: 'object',
          items: [
            {
              label: 'GitHub',
              key: 'github',
              type: 'text',
              rules: [
                {
                  required: true,
                  trigger: 'blur',
                  message: 'GitHub为必填'
                }
              ]
            },
            {
              label: 'Blog',
              key: 'blog',
              type: 'text',
              rules: [
                {
                  required: true,
                  trigger: 'blur',
                  message: 'Blog为必填'
                }
              ]
            }
          ]
        }
      ],
      getFormData: () => ({
        nickname: '4ark',
        meta: {
          github: 'https://github.com/gd4Ark',
          blog: 'https://4ark.me'
        }
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

需要嵌套对象，只需要声明`type`属性为`object`即可。

