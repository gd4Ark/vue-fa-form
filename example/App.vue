<template>
  <vue-fa-form :form-items="formItems"
               :get-form-data="getFormData"
               @submit="submit" />
</template>
<script>
export default {
  data: () => ({
    formItems: [
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
      {
        label: '文本域',
        key: 'textarea',
        type: 'textarea',
        meta: {
          rows: 5
        }
      },
      {
        label: '单图片',
        key: 'single_pic',
        type: 'uploadPic',
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
        type: 'uploadPic',
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
        label: '选择',
        key: 'select',
        type: 'select',
        meta: {
          changeSubmit: true,
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
            trigger: 'change',
            message: '必须选择一个'
          }
        ]
      },
      {
        label: '单选项',
        key: 'radio',
        type: 'radio',
        meta: {
          type: 'el-radio-button',
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
            trigger: 'change',
            message: '必须选择一个'
          }
        ]
      },
      {
        label: '多选项',
        key: 'checkbox',
        type: 'checkbox',
        meta: {
          options: [
            {
              label: '选项一',
              value: 0
            },
            {
              label: '选项二',
              value: 1
            }
          ]
        },
        rules: [
          {
            required: true,
            trigger: 'change',
            message: '必须选择一个'
          }
        ]
      },
      {
        label: '日期',
        key: 'date',
        type: 'date',
        meta: {
          type: 'datetime'
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
        label: '位置',
        key: 'location',
        type: 'location',
        meta: {
          searchOption: {
            city: '惠州',
            citylimit: true
          },
          mapCenter: [114.414659, 23.11059]
        }
      },
      {
        label: '富文本',
        key: 'richtext',
        type: 'richtext'
      }
    ],
    getFormData: () => ({
      text: '',
      textarea: '',
      single_pic: '',
      multi_pic: [],
      select: '',
      radio: '',
      checkbox: [],
      date: '',
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
