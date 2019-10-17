<template>
  <codemirror v-model="innerValue"
              :style="get(item,'meta.style')"
              :placeholder="getPlaceholder()"
              :options="codemirrorOptions"
              class="codemirror" />
</template>

<script>
import { codemirror } from 'vue-codemirror-lite'
import 'codemirror/addon/display/placeholder.js'
import 'codemirror/mode/htmlmixed/htmlmixed'
import control from '../../mixins/control'
export default {
  name: 'CodeControl',
  components: {
    codemirror
  },
  mixins: [control],
  data: () => ({
    codemirrorOptions: {
      mode: 'htmlmixed',
      tabSize: 2,
      lineNumbers: true,
      lineWrapping: false
    }
  })
}
</script>

<style lang="scss">
.codemirror {
  padding: 1px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  line-height: 17px;
}
.CodeMirror pre.CodeMirror-placeholder {
  color: #c0c4cc;
  font: 400 13.3333px Arial;
}
.CodeMirror {
  padding: 0;
  height: 100%;
}
.CodeMirror pre {
  font-size: 1rem;
}
</style>
