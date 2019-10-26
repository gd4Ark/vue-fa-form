# vue-fa-form

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4443b617de9140e6b6fbd289d0f7ab08)](https://www.codacy.com/manual/gd4Ark/vue-fa-form?utm_source=github.com&utm_medium=referral&utm_content=gd4Ark/vue-fa-form&utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/v/vue-fa-form)](https://www.npmjs.com/package/vue-fa-form)
[![npm](https://img.shields.io/npm/dm/vue-fa-form)](https://www.npmjs.com/package/vue-fa-form)
[![NPM](https://img.shields.io/npm/l/vue-fa-form)](https://github.com/gd4Ark/vue-fa-form/blob/master/LICENSE)

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
    :form-item="formItems"
    :get-form-data="getFormData"
    @submit="submit"
  />
</template>
```

```javascript
import VueFaForm from './vue-fa-form'
export default {
  components: {
    VueFaForm
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
            message: '文本框必填'
          }
        ]
      }
      // ...
    ],
    getFormData: () => ({
      text: ''
      // ...
    })
  }),
  methods: {
    submit(data) {
      console.log(data)
    }
  }
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
