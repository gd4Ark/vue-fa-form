<template>
  <div class="modal inline">
    <div class="inline"
         @click="visible">
      <slot v-if="needOpenBtn"
            name="open-btn">
        <el-button :size="openBtnSize"
                   :type="openBtnType"
                   :icon="openBtnIcon"
                   :style="openBtnStyle"
                   :disabled="disabled"
                   class="open-btn">
          {{ openBtnText }}
        </el-button>
      </slot>
    </div>
    <el-dialog v-el-drag-dialog
               v-bind="$attrs"
               :title="title"
               :visible.sync="dialogVisible"
               :width="width"
               v-on="$listeners">
      <template slot="title">
        <slot name="title">
          <span class="el-dialog__title">{{ title }}</span>
        </slot>
      </template>

      <slot />

      <span v-if="needFooter"
            slot="footer"
            class="dialog-footer">
        <slot name="footer">
          <slot name="footer-prepend"></slot>

          <el-button :size="otherBtnSize"
                     @click="hidden">
            {{ cancelBtnText }}
          </el-button>

          <slot name="footer-middle"></slot>

          <el-button :disabled="submitDisabled"
                     :size="otherBtnSize"
                     type="primary"
                     @click="submit">
            {{ submitBtnText }}
          </el-button>
          <slot name="footer-prepend"></slot>

        </slot>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import elDragDialog from './directive/el-drag-dialog'
export default {
  name: 'FaModal',
  directives: {
    elDragDialog
  },
  props: {
    title: {
      type: String,
      default: '弹窗'
    },
    width: {
      type: String,
      default: '95%'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    needOpenBtn: {
      type: Boolean,
      default: true
    },
    needFooter: {
      type: Boolean,
      default: true
    },
    submitDisabled: {
      type: Boolean,
      default: false
    },
    openBtnText: {
      type: String,
      default: '打开弹窗'
    },
    submitBtnText: {
      type: String,
      default: '提交'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    openBtnSize: {
      type: String,
      default: 'small'
    },
    otherBtnSize: {
      type: String,
      default: ''
    },
    openBtnType: {
      type: String,
      default: ''
    },
    openBtnIcon: {
      type: String,
      default: ''
    },
    openBtnStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    beforeOpen: {
      type: Function,
      default: () => true
    }
  },
  data: () => ({
    dialogVisible: false
  }),
  methods: {
    visible() {
      if (!this.beforeOpen()) return
      if (this.disabled) return
      this.dialogVisible = true
    },
    hidden() {
      this.dialogVisible = false
    },
    submit() {
      this.$emit('submit')
    }
  }
}
</script>
<style lang="scss">
@import './styles/_variables';
@import './styles/_mixins';

html,
body {
  @include wh(100%);
}

.el-dialog__wrapper {
  @include sub-center;
}

.el-dialog {
  @include flex-column;
  max-width: $dialog-max-width;
  max-height: $dialog-max-height;
  margin: 0 !important;
}

.el-dialog__body {
  padding: $dialog-body-padding;
  flex: 1;
  overflow: auto;
}

.el-dialog__footer {
  padding: $dialog-body-footer;
}

.el-dialog__wrapper {
  overflow: hidden;
}

.el-dialog__title {
  @include no-user-select;
}
</style>
<style lang="scss" scoped>
.inline {
  display: inline;
}
.open-btn {
  margin-left: 10px;
}
</style>
