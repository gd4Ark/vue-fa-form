# 地图选择器（location）

这个组件有点特殊，因为它需要依赖 [vue-amap](https://github.com/ElemeFE/vue-amap)，所以你在使用前，需要先进行一些操作。

首先你需要在这个 [链接](https://lbs.amap.com/) 申请一个开发者账号，得到一个`key`。

### NPM 安装

如果你是通过 `npm` 或者其他包管理器使用`vue-fa-form`，那么你需要在入口文件：

```js
import VueFaForm from 'vue-fa-form'

Vue.use(VueFaForm, {
  location: {
    key: 'your_key',
  },
})
```

这时候`vue-fa-form`已经全局注册，在其他地方则可以直接使用。

## CDN 引入

如果你是通过 CDN 引入，那么你需要先引入：

```html
<script src="https://unpkg.com/vue-amap/dist/index.js"></script>
```

初始化

```html
<script>
  window.VueAMap.initAMapApiLoader({
    key: 'YOUR_KEY',
    plugin: [
      'AMap.Autocomplete',
      'AMap.PlaceSearch',
      'AMap.Scale',
      'AMap.OverView',
      'AMap.ToolBar',
      'AMap.MapType',
      'AMap.PolyEditor',
      'AMap.CircleEditor',
    ],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4',
  })
</script>
```

## 使用

<vuep  template="#location-example"></vuep>

<script v-pre type="text/x-template" id="location-example">
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
          label: '位置',
          key: 'location',
          type: 'location',
          meta: {
            searchOption: {
              city: '惠州',
              citylimit: true
            },
            mapCenter: [114.414659, 23.11059]
          }
        }
      ],
      getFormData: () => ({
        location: []
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

|     属性     |  类型   | 默认值 |          描述          |
| :----------: | :-----: | :----: | :--------------------: |
| searchOption | `Array` |  必填  |     地图搜索条件，     |
|  mapCenter   | `Array` |  必填  | 默认中心点，经纬度数组 |

### searchOption

|   属性    |   类型    | 默认值 |        描述        |
| :-------: | :-------: | :----: | :----------------: |
|   city    | `String`  |  必填  |       城市名       |
| citylimit | `Boolean` |  必填  | 是否限制城市内搜索 |
