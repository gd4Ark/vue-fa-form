<template>
  <el-input v-model="innerValue"
            :type="item.type"
            :placeholder="getPlaceholder()"
            v-bind="attrs"
            @keyup.enter.native="handleSubmit">
    <template v-if="get(item,'meta.slot')"
              :slot="item.meta.slot.name">
      <template v-if="item.meta.slot.type === 'icon'">
        <i :class="['icon',item.meta.slot.value]" />
      </template>
      <template v-else>
        {{ item.meta.slot.value }}
      </template>
    </template>
  </el-input>
</template>

<script>
import control from '../../mixins/control'
export default {
  name: 'InputControl',
  mixins: [control],
  methods: {
    handleSubmit() {
      const types = ['textarea']
      if (types.includes(this.item.type)) return
      this.submit()
    }
  }
}
</script>
