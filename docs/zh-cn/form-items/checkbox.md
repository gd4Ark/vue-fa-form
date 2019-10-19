# 多选框（checkbox）

<vuep  template="#checkbox-example"></vuep>

<script v-pre type="text/x-template" id="checkbox-example">
<template>
  <vue-fa-form label-width="100px"
               :form-items="formItems"
               :get-form-data="getFormData"
               @submit="submit" />
</template>

<script>
export default {
  data() {
    return {
      formItems: [
        {
          label: '喜欢的水果',
          key: 'value',
          type: 'checkbox',
          meta: {
            options: [
              {
                label: '苹果',
                value: 'apple'
              },
              {
                label: '橙子',
                value: 'orange'
              },
              {
                label: '香蕉',
                value: 'banana'
              }
            ]
          },
          rules: [
            {
              required: true,
              trigger: 'change',
              message: '必须选择一个'
            }
          ]
        }
      ],
      getFormData: () => ({
        value: []
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

支持 Checkbox 组件的所有属性，详见：[文档](https://element.eleme.cn/#/zh-CN/component/checkbox)，除此之外：

|    属性    |    类型    |   默认值    |                                       描述                                        |
| :--------: | :--------: | :---------: | :-------------------------------------------------------------------------------: |
|    type    |  `String`  | el-checkbox |                  控件类型，可选：el-checkbox、el-checkbox-button                  |
|   attrs    |  `Object`  |             | 子控件的属性列表，详见[文档](https://element.eleme.cn/#/zh-CN/component/checkbox) |
|  options   |  `Array`   |             |                                     选项列表                                      |
| getOptions | `Function` |             |                    获取选项列表方法，该属性优先级比`options`高                    |

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

你可以提供一个`getOptions`的参数，来动态的返回选项列表：

<vuep  template="#dynamic-checkbox-example"></vuep>

<script v-pre type="text/x-template" id="dynamic-checkbox-example">
<template>
  <vue-fa-form label-width="100px"
               :form-items="formItems"
               :get-form-data="getFormData"
               @submit="submit" />
</template>


<script>
export default {
  data() {
    return {
      formItems: [
        {
          label: '喜欢的水果',
          key: 'value',
          type: 'checkbox',
          meta: {
            getOptions() {
              return [
                {
                  label: '苹果',
                  value: 'apple'
                },
                {
                  label: '橙子',
                  value: 'orange'
                },
                {
                  label: '香蕉',
                  value: 'banana'
                }
              ]
            }
          },
          rules: [
            {
              required: true,
              trigger: 'change',
              message: '必须选择一个'
            }
          ]
        }
      ],
      getFormData: () => ({
        value: []
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

## 单选

如果没有提供`options`或者`getOptions`，则会变成单选：
<vuep  template="#switch-checkbox-example"></vuep>

<script v-pre type="text/x-template" id="switch-checkbox-example">
<template>
  <vue-fa-form label-width="100px"
               :form-items="formItems"
               :get-form-data="getFormData"
               @submit="submit" />
</template>


<script>
export default {
  data() {
    return {
      formItems: [
        {
          label: '单选',
          key: 'value',
          type: 'checkbox'
        }
      ],
      getFormData: () => ({
        value: false
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
