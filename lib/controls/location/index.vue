<template>
  <div class="location-control">
    <el-input v-model="strVal"
              :size="size"
              :placeholder="getPlaceholder()"
              :readonly="true"
              @click.native="onVisible" />
    <vue-fa-modal v-if="loaded"
                  ref="modal"
                  btn-size="mini"
                  title="选择位置信息"
                  :append-to-body="true"
                  :need-footer="false"
                  :need-open-btn="false">
      <div class="search">
        <map-search :item="item"
                    @click="onClick" />
      </div>
    </vue-fa-modal>
  </div>
</template>
<script>
import control from '../../mixins/control'
import VueFaModal from 'vue-fa-modal'
import MapSearch from './map-search'
export default {
  name: 'LocationControl',
  components: {
    VueFaModal,
    MapSearch
  },
  mixins: [control],
  data: () => ({
    loaded: false,
    showSearch: false
  }),
  computed: {
    strVal() {
      return String(this.value)
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true
    }, 500)
  },
  methods: {
    onVisible() {
      this.$refs.modal.visible()
    },
    onClick(data) {
      const { lng, lat } = data
      this.$emit('update:value', [lng, lat])
      this.change()
      this.$refs.modal.hidden()
    }
  }
}
</script>
<style lang="scss" scoped>
.search {
  height: 500px;
  /deep/ .amap {
    height: 100%;
  }
}
</style>
