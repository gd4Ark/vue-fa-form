# vue-fa-form

一个基于 Vue.js 与 Element-UI 的表单构建组件

特点：

- 通过 JSON 形式构建，支持复杂对象
- 支持大量表单项，内置数据验证

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
    :form-item="formItem"
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
    formItem: [
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

## 支持的表单项

内置支持的表单项如下：

- [x] 文本（ text ）
- [x] 文本域（ textarea ）
- [x] 计数器（ count ）
- [x] 单选框（ radio ）
- [x] 选择器（ select ）
- [x] 联机选择器（ cascader ）
- [x] 开关（ switch ）
- [x] 滑块（ slide ）
- [x] 时间（ date ）
- [x] 上传（ upload ）
- [x] 富文本（ richtext ）
- [x] 代码高亮（ code ）
- [x] 地图选择器（ location ）

## 文档

[Document link](http://4ark.me/vue-fa-modal/demo/)

## TODO

- [ ] 支持更多表单项
- [ ] 优化组件代码

## Author

> [Blog](https://4ark.me/) · GitHub [@gd4Ark](https://github.com/gd4Ark)

## License

[MIT](./LICENSE)

## Conclusion

If you think my project is good👏 . Give a Star⭐ encouragement.
