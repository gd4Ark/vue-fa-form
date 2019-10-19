<template>
  <div class="el-upload__warp">
    <el-upload ref="upload"
               action=""
               :file-list="fileList"
               :limit="limit"
               :multiple="get(item,'meta.multiple')"
               :http-request="onRquest"
               :before-upload="onBeforeUpload"
               :on-exceed="onExceed"
               drag>
      <i class="el-icon-upload" />
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
  </div>
</template>
<script>
import upload from '../../../mixins/upload'
export default {
  name: 'UploadControl',
  mixins: [upload]
}
</script>

<style lang="scss" scoped>
.el-upload__warp {
  /deep/ .el-upload {
    display: block;
  }

  /deep/ .el-upload-dragger .el-icon-upload {
    margin: 0;
    font-size: 2.5rem;
  }
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
</style>
