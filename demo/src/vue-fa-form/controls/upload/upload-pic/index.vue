<template>
  <div class="upload-pic-container">
    <el-upload ref="upload"
               :class="['avatar-uploader',{ 'hidden-upload': hiddenUpload }]"
               action=""
               list-type="picture-card"
               :limit="limit"
               :multiple="get(item,'meta.multiple')"
               :file-list.sync="fileList"
               :http-request="onRquest"
               :before-upload="onBeforeUpload"
               :on-preview="onPreview"
               :on-remove="onRemove"
               :on-exceed="onExceed"
               drag>
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%"
           :src="dialogImageUrl">
    </el-dialog>
  </div>
</template>

<script>
import upload from '../../../mixins/upload'
export default {
  name: 'UploadPicControl',
  mixins: [upload],
  data: () => ({
    default: {
      limit: 1,
      maxSize: 2,
      extensions: ['webp', 'jpeg', 'jpg', 'png']
    }
  }),
  methods: {
    onPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss" scoped>
.upload-pic-container {
  /deep/ .el-upload-list__item {
    transition: none !important;
  }

  /deep/ .el-upload-dragger {
    @include flex-column;
    justify-content: center;
    @include wh(auto, 100%);
    padding: 0;
  }
}
.hidden-upload {
  /deep/ .el-upload--picture-card {
    display: none;
  }
}
</style>

