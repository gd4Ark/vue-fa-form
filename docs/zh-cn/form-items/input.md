# 输入框（input）

可接受原生属性，但由于数量过多，这里只举例几个常用的类型。

点击[链接](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form__types)查看所有原生属性。

## 文本（ text ）

<vuep  template="#text-example"></vuep>

<script v-pre type="text/x-template" id="text-example">
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
      ],
      getFormData: () => ({
        text: ''
      })
    }
  }
}
</script>
</script>

### 添加图标

<vuep  template="#text-icon-example"></vuep>

<script v-pre type="text/x-template" id="text-icon-example">
<template>
  <vue-fa-form :show-label="false"
               :form-item="formItems"
               :get-form-data="getFormData" />
</template>
<script>
export default {
  data() {
    return {
      formItems: [
        {
          key: 'text',
          type: 'text',
          meta: {
            placeholder: '请输入用户名',
            slot: {
              name: 'prepend',
              type: 'icon',
              value: 'el-icon-user-solid'
            }
          },
          rules: [
            {
              required: true,
              trigger: 'blur',
              message: '用户名必填'
            }
          ]
        }
      ],
      getFormData: () => ({
        text: ''
      })
    }
  }
}
</script>
</script>

这里我们做了几个操作：

- 设置`show-label`为`false`
- 删除`label`属性
- 添加`slot`属性，详见 [Element 文档](https://element.eleme.cn/#/zh-CN/component/input)

## 文本框（textarea）

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
          }
        }
      ],
      getFormData: () => ({
        textarea: ''
      })
    }
  }
}
</script>

</script>

### textarea 属性

> 以下为 `meta` 的属性

| 属性 |   类型   | 默认值 | 描述 |
| :--: | :------: | :----: | :--: |
| row  | `Number` |   -    | 行数 |

## 数字（number）

<vuep  template="#number-example"></vuep>

<script v-pre type="text/x-template" id="number-example">
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
          label: '数字',
          key: 'number',
          type: 'number',
          meta: {
            min: 0,
            max: 100
          }
        }
      ],
      getFormData: () => ({
        number: 0
      })
    }
  }
}
</script>

</script>
### number 属性

> 以下为 `meta` 的属性

| 属性 |   类型   | 默认值 |  描述  |
| :--: | :------: | :----: | :----: |
| min  | `Number` |   -    |  行数  |
| max  | `Number` |   -    | 最大值 |

## 密码（password）

<vuep  template="#password-example"></vuep>

<script v-pre type="text/x-template" id="password-example">
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
          label: '密码',
          key: 'password',
          type: 'password'
        }
      ],
      getFormData: () => ({
        password: ''
      })
    }
  }
}
</script>

</script>

## 属性

|     属性      |   类型    |         默认值         |         描述         |
| :-----------: | :-------: | :--------------------: | :------------------: |
|  placeholder  | `String`  | 请输入+ `label` 属性值 |        占位符        |
|   clearable   | `Boolean` |          true          |      是否可清空      |
| show_password | `Boolean` |         false          | 是否显示切换密码图标 |

