<template>
  <div :class="containerClassName">
    <!-- is object -->
    <template v-if="isObject">
      <fa-form-item v-for="(subItem) in item.items"
                    :key="getKey(subItem)"
                    :splice-key="getKey(subItem)"
                    :item="subItem"
                    :rules="rules"
                    :size="size"
                    :form-items="formItems"
                    :form-data="formData" />
    </template>
    <!-- is array -->
    <template v-else-if="isArray">
      <fa-form-item v-for="(subItem,subIndex) in item.items"
                    :key="getKey(subItem,subIndex)"
                    :splice-key="getKey(subItem,subIndex)"
                    :item="subItem"
                    :rules="rules"
                    :size="size"
                    :form-items="formItems"
                    :form-data="formData" />
    </template>
    <!-- is multiple -->
    <template v-else-if="isMultiple">
      <fa-form-item v-for="(subItem,subIndex) in item.items"
                    :key="subIndex"
                    :item="subItem"
                    :rules="rules"
                    :size="size"
                    :form-items="formItems"
                    :form-data="formData"
                    :splice-key="subItem.key" />
    </template>
    <!-- is tab -->
    <template v-else-if="isTab">
      <el-tabs v-model="item.activeName">
        <el-tab-pane v-for="(subItem,subIndex) in item.items"
                     :key="subIndex"
                     :label="subItem.title"
                     :name="subItem.key"
                     :lazy="true">
          <fa-form-item :item="subItem"
                        :form-items="formItems"
                        :form-data="formData"
                        :rules="rules"
                        :size="size"
                        :splice-key="subItem.key" />
        </el-tab-pane>
      </el-tabs>
    </template>
    <template v-else-if="isTitle">
      <el-divider>{{ item.title }}</el-divider>
    </template>
    <template v-else>
      <!-- 一行多个 -->
      <template v-if="item.items">
        <label v-if="item.label"
               class="el-form-item__label">{{ item.label }}</label>
        <el-form-item v-for="(subItem) in item.items"
                      :key="getKey(subItem)"
                      :label="subItem.label"
                      :prop="spliceKey + '.' + subItem.key"
                      :class="getClassName(subItem)"
                      :style="getStyle(subItem)">
          <span v-show="false">{{ setModel(spliceKey + '.' + subItem.key) }}</span>
          <fa-form-item-control :item="subItem"
                                :model.sync="model[subItem.key]"
                                :size="size"
                                @submit="submit" />
        </el-form-item>
      </template>
      <!-- 一行一个 -->
      <template v-else>
        <el-form-item :label="item.label"
                      :prop="spliceKey"
                      :class="getClassName(item)">
          <span v-show="false">{{ setModel(spliceKey) }}</span>
          <fa-form-item-control :item="item"
                                :model.sync="model[item.key]"
                                :size="size"
                                @submit="submit" />
        </el-form-item>
      </template>
    </template>
  </div>
</template>
<script>
import get from 'lodash.get'
import toPath from 'lodash.topath'
import FaFormItemControl from './fa-form-control'
export default {
  name: 'FaFormItem',
  components: {
    FaFormItemControl
  },
  props: {
    spliceKey: {
      type: String,
      default: ''
    },
    rules: {
      type: Object,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    formData: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    model: null
  }),
  computed: {
    isObject() {
      return this.item.type === 'object'
    },
    isArray() {
      return this.item.type === 'array'
    },
    isTab() {
      return this.item.type === 'tab'
    },
    isMultiple() {
      return this.item.type === 'multiple'
    },
    isTitle() {
      return this.item.type === 'title'
    },
    containerClassName() {
      return [
        'el-form-item ',
        'el-form-item-container',
        { 'el-form-item-tab': this.isTab },
        { 'is-required': get(this.item, 'meta.required') }
      ]
    }
  },
  methods: {
    showWhen(enable_when) {
      if (!enable_when || !Object.keys(enable_when)) return true
      for (const key in enable_when) {
        if (get(this.formData, key) === enable_when[key]) {
          return true
        }
      }
    },
    getStyle(item) {
      return {
        display: 'inline-block',
        width: get(item, 'meta.width') || 'auto'
      }
    },
    getClassName(item) {
      const hidden_class = get(item, 'meta.hidden_class', 'hidden')
      return {
        [hidden_class]: !this.showWhen(get(item, 'meta.enable_when')),
        'hidden-label': get(item, 'meta.hiddenLabel')
      }
    },
    getKey(item, index = null) {
      const hasIndex = index !== null
      const key = this.spliceKey
      if (!key) return hasIndex ? index : item.key
      else if (!item.key && !hasIndex) return key
      return key + (hasIndex ? `.${index}` : `.${item.key}`)
    },
    setModel(path) {
      const paths = toPath(path)
      paths.pop()
      this.model = path.includes('.')
        ? get(this.formData, paths)
        : this.formData
    },
    submit() {
      this.$emit('submit')
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form-item.hidden {
  visibility: hidden;
}
.el-form-item.dn {
  display: none;
}
</style>
<style lang="scss">
.el-form-item .el-tabs__header.is-top {
  margin-left: 80px;
}
.el-divider__text {
  color: #606266;
}
.hidden-label {
  .el-form-item__label {
    display: none;
  }
  .el-form-item__content {
    margin-left: 0 !important;
    margin-right: 10px;
  }
}
</style>
