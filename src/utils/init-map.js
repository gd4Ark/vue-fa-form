const clearMap = () => {
  const amapKeys = Object.keys(localStorage).filter(key => key.match(/^_AMap_/))

  amapKeys.forEach(key => {
    localStorage.removeItem(key)
  })
}

export default (Vue, config) => {
  clearMap()

  const VueAMap = require('vue-amap').default

  VueAMap.initAMapApiLoader({
    key: config.key,
    plugin: [
      'AMap.Autocomplete',
      'AMap.PlaceSearch',
      'AMap.Scale',
      'AMap.OverView',
      'AMap.ToolBar',
      'AMap.MapType',
      'AMap.PolyEditor',
      'AMap.CircleEditor'
    ],
    v: '1.4.4'
  })

  Vue.use(VueAMap)
}
