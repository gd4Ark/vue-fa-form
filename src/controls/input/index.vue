<template>
  <el-input v-model="innerValue"
            :type="item.type"
            :placeholder="getPlaceholder()"
            :clearable="get(item,'meta.clearable',true)"
            :rows="get(item,'meta.row')"
            :min="get(item,'meta.min')"
            :max="get(item,'meta.max')"
            :size="size"
            @keyup.enter.native="submit">
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
  mixins: [control]
}
</script>
