<template>
  <vue-fa-form label-width="100px"
               :form-item="formItems"
               :get-form-data="getFormData"
               @submit="submit" />
</template>

<script>
export default {
  data() {
    return {
      formItems: [
        {
          label: '固定时间',
          key: 'time1',
          type: 'time',
          meta: {
            'picker-options': {
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }
          }
        },
        {
          label: '任意时间',
          key: 'time2',
          type: 'time',
          meta: {
            control_type: 'picker',
            'picker-options': {
              'selectable-range': '18:30:00 - 20:30:00'
            }
          }
        },
        {
          label: '时间范围',
          key: 'time3',
          type: 'time',
          meta: {
            control_type: 'picker',
            isRange: true,
            valueFormat: 'HH:mm:ss'
          }
        }
      ],
      getFormData: () => ({
        time1: '',
        time2: '',
        time3: ''
      })
    }
  },
  methods: {
    submit(data) {
      console.log(data)
    }
  }
}
</script>
