<template>
  <div class="container">
    <vue-fa-form :form-item="formItem"
                 :get-form-data="getFormData"
                 @submit="submit" />
  </div>
</template>

<script>
export default {
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
        label: '计数',
        key: 'count',
        type: 'count',
        rules: [
          {
            required: true,
            trigger: 'blur',
            message: '文本框必填'
          }
        ]
      },
      {
        label: '开关',
        key: 'switch',
        type: 'switch'
      },
      {
        label: '滑块',
        key: 'range',
        type: 'range'
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
      },
      {
        label: '代码',
        key: 'code',
        type: 'code',
        meta: {},
        rules: [
          {
            required: true,
            trigger: 'blur',
            message: '时间为必填'
          }
        ]
      },
      {
        label: '位置',
        key: 'location',
        type: 'location',
        meta: {
          search_option: {
            city: '惠州',
            citylimit: true
          },
          map_center: [114.414659, 23.11059]
        },
        rules: [
          {
            required: true,
            trigger: 'change',
            message: '位置为必填'
          }
        ]
      },
      {
        label: '富文本',
        key: 'richtext',
        type: 'richtext',
        meta: {},
        rules: [
          {
            required: true,
            trigger: 'blur',
            message: '富文本为必填'
          }
        ]
      }
    ],
    getFormData: () => ({
      text: '',
      textarea: '',
      count: 0,
      switch: 0,
      range: 0,
      single_pic: '',
      multi_pic: [],
      file: '',
      select: '',
      radio: '',
      date: '',
      code: '',
      location: [],
      richtext: ''
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
