# 选择器（select）

<vuep  template="#select-example"></vuep>

<script v-pre type="text/x-template" id="select-example">
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
          type: 'select',
          meta: {
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

支持 Select 组件的所有属性，详见：[文档](https://element.eleme.cn/#/zh-CN/component/select)，除此之外：

|     属性     |    类型    | 默认值 |                    描述                     |
| :----------: | :--------: | :----: | :-----------------------------------------: |
|   options    |  `Array`   |        |                  选项列表                   |
|  getOptions  | `Function` |        | 获取选项列表方法，该属性优先级比`options`高 |
| changeSubmit | `Boolean`  | false  |                 改变时提交                  |

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

<vuep  template="#dynamic-select-example"></vuep>

<script v-pre type="text/x-template" id="dynamic-select-example">
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
          type: 'select',
          meta: {
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
