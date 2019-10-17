<template>
  <div class="container">
    <vue-fa-form :form-item="formItem"
                 :get-form-data="getFormData"
                 @submit="submit" />
  </div>
</template>

<script>
import VueFaForm from './vue-fa-form'
export default {
  components: {
    VueFaForm
  },
  data: () => ({
    formItem: [
      {
        label: '文本框',
        key: 'text',
        type: 'text',
        rules: [
          {
            required: true,
            trigger: 'blur',
            message: '文本框必填'
          }
        ]
      },
      // ...
      {
        label: '文本域',
        key: 'textarea',
        type: 'textarea',
        meta: {
          row: 5
        }
      },
      {
        label: '单图片',
        key: 'single_pic',
        type: 'pic',
        rules: [
          {
            required: true,
            trigger: 'blur',
            message: '单图片为必填'
          }
        ]
      },
      {
        label: '多图片',
        key: 'multi_pic',
        type: 'pic',
        meta: {
          limit: 5,
          multiple: true
        },
        rules: [
          {
            required: true,
            trigger: 'blur',
            message: '单图片为必填'
          }
        ]
      },
      {
        label: '文件',
        key: 'file',
        type: 'file',
        rules: [
          {
            required: true,
            trigger: 'blur',
            message: '封面为必填'
          }
        ]
      },
      {
        label: '选择',
        key: 'select',
        type: 'select',
        meta: {
          options: [
            {
              label: '选项一',
              value: 1
            },
            {
              label: '选项二',
              value: 2
            },
            {
              label: '选项三',
              value: 3
            }
          ],
          filterable: true
        },
        rules: [
          {
            required: true,
            trigger: 'blur',
            message: '价格为必填'
          }
        ]
      },
      {
        label: '单选项',
        key: 'radio',
        type: 'radio',
        meta: {
          radio_type: 'el-radio-button',
          options: [
            {
              label: '男',
              value: 0
            },
            {
              label: '女',
              value: 1
            }
          ]
        },
        rules: [
          {
            required: true,
            trigger: 'blur',
            message: '单选项为必填'
          }
        ]
      },
      {
        label: '时间',
        key: 'date',
        type: 'date',
        meta: {
          control_type: 'datetime'
        },
        rules: [
          {
            required: true,
            trigger: 'blur',
            message: '时间为必填'
          }
        ]
      }
    ],
    getFormData: () => ({
      text: '',
      textarea: '',
      single_pic: '',
      multi_pic: [],
      file: '',
      select: '',
      radio: '',
      date: ''
    })
  }),
  methods: {
    submit(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
</style>
