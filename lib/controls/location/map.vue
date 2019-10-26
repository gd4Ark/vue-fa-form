<template>
  <el-amap ref="amap"
           vid="amap"
           :center="center"
           :zoom="12"
           class="amap"
           :events="events">
    <slot></slot>
  </el-amap>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    center: {
      type: Array,
      required: true
    }
  },
  data() {
    const self = this
    return {
      events: {
        click(e) {
          self.submit(e.lnglat)
        }
      }
    }
  },
  methods: {
    submit(data) {
      this.$emit('click', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.amap {
  height: 600px;
}
</style>
