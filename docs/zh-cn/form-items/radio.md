# 单选框（radio）

<vuep  template="#radio-example"></vuep>

<script v-pre type="text/x-template" id="radio-example">
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
          label: '性别',
          key: 'sex',
          type: 'radio',
          meta: {
            type: 'el-radio-button',
            options: [
              {
                label: '男',
                value: 0
              },
              {
                label: '女',
                value: 1
              }
            ]
          }
        }
      ],
      getFormData: () => ({
        sex: 0
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

|     属性     |    类型    |  默认值  |                                      描述                                      |
| :----------: | :--------: | :------: | :----------------------------------------------------------------------------: |
|     type     |  `String`  | el-radio |                   控件类型，可选：el-radio、el-radio-button                    |
|    attrs     |  `Object`  |          | 子控件的属性列表，详见[文档](https://element.eleme.cn/#/zh-CN/component/radio) |
|   options    |  `Array`   |          |                                    选项列表                                    |
|  getOptions  | `Function` |          |                  获取选项列表方法，该属性优先级比`options`高                   |
| changeSubmit | `Boolean`  |  false   |                                   改变时提交                                   |

### options

```json
[
  {
    "label": "男",
    "value": 0
  },
  {
    "label": "女",
    "value": 1
  }
]
```

### 动态 options

你可以提供一个`getOptions`的方法，来动态的返回选项列表：

<vuep  template="#dynamic-radio-example"></vuep>

<script v-pre type="text/x-template" id="dynamic-radio-example">
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
          label: '性别',
          key: 'sex',
          type: 'radio',
          meta: {
            type: 'el-radio-button',
            border: true,
            getOptions() {
              // ajax
              return [
                {
                  label: '男',
                  value: 0
                },
                {
                  label: '女',
                  value: 1
                }
              ]
            }
          }
        }
      ],
      getFormData: () => ({
        sex: 0
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
