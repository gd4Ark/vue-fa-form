# 上传（upload）

## 单图片

<vuep  template="#upload-pic-example"></vuep>

<script v-pre type="text/x-template" id="upload-pic-example">
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
          label: '图片',
          key: 'pic',
          type: 'pic'
        }
      ],
      getFormData: () => ({
        pic: ''
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

## 多图片


<vuep  template="#multe-upload-pic-example"></vuep>

<script v-pre type="text/x-template" id="multe-upload-pic-example">
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
          label: '图片',
          key: 'pic',
          type: 'pic',
          meta: {
            multiple: true,
            limit: 5
          }
        }
      ],
      getFormData: () => ({
        pic: []
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

### 图片 meta 属性

|      属性       |   类型    |             默认值             |                    描述                     |
| :-------------: | :-------: | :----------------------------: | :-----------------------------------------: |
|      limit      | `Number`  |               1                | 限制上传的数量，如果不是1，值则需要改为数组 |
|    multiple     | `Boolean` |             false              |                  选项列表                   |
|     maxSize     | `Number`  |               2                |          限制文件大小，以`M`为单位          |
| extensions |  `Array`  | ['webp', 'jpeg', 'jpg', 'png'] |                限制文件格式                 |

## 文件

<vuep  template="#upload-file-example"></vuep>

<script v-pre type="text/x-template" id="upload-file-example">
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
          label: '文件',
          key: 'file',
          type: 'file'
        }
      ],
      getFormData: () => ({
        file: ''
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

### 文件 meta 属性

|      属性       |   类型    | 默认值 |                    描述                     |
| :-------------: | :-------: | :----: | :-----------------------------------------: |
|      limit      | `Number`  |   1    | 限制上传的数量，如果不是1，值则需要改为数组 |
|    multiple     | `Boolean` | false  |                  选项列表                   |
|     maxSize     | `Number`  |   2    |          限制文件大小，以`M`为单位          |
| extensions |  `Array`  |   []   |                限制文件格式                 |