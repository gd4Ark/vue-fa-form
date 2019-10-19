# vue-fa-form

一个基于 Vue.js 与 Element-UI 的表单构建组件

特点：

- 支持大量表单项，内置数据验证
- 通过 JSON 形式构建，支持复杂对象

## 安装

使用 npm 或者 yarn 进行安装

```bash
$ npm install vue-fa-form
$ yarn add vue-fa-form
```

## 如何使用

```js
import VueFaForm from 'vue-fa-form'
```

```html
<template>
  <vue-fa-form
    :form-items="formItems"
    :get-form-data="getFormData"
    @submit="submit"
  />
</template>
```

```javascript
import VueFaForm from './vue-fa-form'
export default {
  components: {
    VueFaForm,
  },
  data: () => ({
    formItems: [
      {
        label: '文本框',
        key: 'text',
        type: 'text',
        rules: [
          {
            required: true,
            trigger: 'blur',
            message: '文本框必填',
          },
        ],
      },
      // ...
    ],
    getFormData: () => ({
      text: '',
      // ...
    }),
  }),
  methods: {
    submit(data) {
      console.log(data)
    },
  },
}
```

## 文档

[Document link](http://4ark.me/vue-fa-form)

## Author

> [Blog](https://4ark.me/) · GitHub [@gd4Ark](https://github.com/gd4Ark)

## License

[MIT](./LICENSE)

## Conclusion

If you think my project is good👏 . Give a Star⭐ encouragement.
