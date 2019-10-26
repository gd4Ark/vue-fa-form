import { isFile } from '../utils'
import get from 'lodash.get'
import clone from 'lodash.clone'
import isEmpty from 'lodash.isempty'
import isArray from 'lodash.isarray'
import isEqual from 'lodash.isequal'
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    model: {
      type: [File, String, Array, Object],
      required: true
    }
  },
  watch: {
    files(files) {
      this.updateFiles(files)
    },
    model(files) {
      if (isEmpty(files) && !isEmpty(this.files)) {
        return this.clearFiles()
      }
      if (isArray(files)) {
        if (files.some(item => item.size)) return
        if (this.isEqualURL(files)) return
      }
      if (files.pre) {
        return
      }
      if (isFile(files)) return
      if (isEqual(this.files, files)) return
      if (!isEmpty(files)) {
        return this.initUrl(files)
      }
    }
  },
  data: () => ({
    default: {
      limit: 1,
      maxSize: 2,
      extensions: []
    },
    dialogImageUrl: '',
    dialogVisible: false,
    files: [],
    fileList: []
  }),
  computed: {
    meta() {
      return this.get(this.item, 'meta', {})
    },
    hiddenUpload() {
      return this.files.length >= this.limit
    },
    limit() {
      return this.meta.limit || this.default.limit
    },
    maxSize() {
      return this.meta.maxSize || this.default.maxSize
    },
    extensions() {
      return this.meta.extensions || this.default.extensions
    },
    showAllowExtensions() {
      return this.extensions.join('/')
    }
  },
  mounted() {
    this.updateFiles(this.files)
  },
  methods: {
    get,
    updateFiles(files) {
      const isMultiple = this.limit > 1
      let res = isMultiple ? files : files[0]
      res = res || (isMultiple ? [] : '')
      this.$emit('update:model', res)
    },
    onBeforeUpload(file) {
      if (!this.isAllowExtension(file)) {
        this.$message({
          message: '无法上传此格式的文件',
          type: 'warning'
        })
        return false
      }
      if (this.isLtMaxSize(file)) {
        this.$message({
          message: `文件最多可上传${this.maxSize}M`,
          type: 'warning'
        })
        return false
      }
      return true
    },
    onExceed() {
      this.$message({
        message: `最多只能上传${this.limit}个文件`,
        type: 'warning'
      })
    },
    onRquest({ file }, fileList) {
      this.files.push(file)
    },
    onRemove(file, fileList) {
      this.setFiles(fileList)
    },
    setFiles(fileList) {
      this.files = clone(fileList)
    },
    clearFiles() {
      this.fileList = []
      this.files = []
      this.$refs.upload.clearFiles()
    },
    isAllowExtension(file) {
      if (this.extensions.length < 1) return true
      const extension = file.name.split('.').pop()
      const toLow = str => str.toLocaleLowerCase()
      return this.extensions.find(el => toLow(el) === toLow(extension))
    },
    isLtMaxSize(file) {
      return file.size / 1024 / 1024 > this.maxSize
    },
    initFileList() {
      const { model } = this
      this.initUrl(model)
    },
    initUrl(paths) {
      if (!isArray(paths)) {
        paths = [paths]
      }
      this.fileList = paths.map(item => {
        return {
          url: item,
          pre: true
        }
      })
      this.setFiles(this.fileList)
    },
    isEqualURL(files) {
      return isEqual(this.files.map(item => item.url), files)
    }
  }
}
