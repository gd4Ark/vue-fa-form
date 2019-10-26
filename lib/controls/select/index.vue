<template>
  <el-select v-model="innerValue"
             :placeholder="getPlaceholder('选择')"
             v-bind="attrs"
             @change="change">
    <el-option v-for="option in options"
               :key="option.value"
               :label="option.label"
               :value="option.value" />
    <template v-if="get(item,'meta.create_link') && hasRoute"
              slot="empty">
      <div class="create-select">
        <span>该{{ item.label }}不存在</span>
        <router-link :to="item.meta.create_link + '?redirect=' + $route.path">点我创建</router-link>
      </div>
    </template>
  </el-select>
</template>

<script>
import selectControl from '../../mixins/select-control'
export default {
  name: 'SelectControl',
  mixins: [selectControl],
  computed: {
    hasRoute() {
      return !!this.$route
    }
  }
}
</script>
