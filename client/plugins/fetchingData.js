import Vue from 'vue'

const __axios = {
  methods: {
    async $getData(url, payload = {}) {
      /* const payload = {
              success: { title: '', msg: '' },
              error: { title: '', msg: '' }
            } */
      return await this.$axios
        .$get(url)
        .then((response) => {
          if (payload?.success?.msg)
            this.$successMessage(payload?.success?.title, payload?.success?.msg)
          let data = response
          let meta = response
          let extra = response

          if (response?.data?.data?.data) data = response?.data?.data?.data
          else if (response?.data?.data) data = response?.data?.data
          else if (response?.data) data = response?.data

          if (response?.data?.data?.meta) meta = response?.data?.data?.meta
          else if (response?.data?.meta) meta = response?.data?.meta
          else if (response?.meta) meta = response?.meta

          if (response?.data?.data?.extra) extra = response?.data?.data?.extra
          else if (response?.data?.extra) extra = response?.data?.extra
          else if (response?.meta) extra = response?.extra

          return { message: 'success', data, meta, extra }
        })
        .catch((error) => {
          if (!error) return
          let msg = null

          if (Object.keys(payload).length) msg = payload?.error?.msg
          if (
            Object.keys(payload).length &&
            payload?.showErrorMessage &&
            payload?.showErrorMessage === false
          ) {
          } else
            this.$errorMessage(
              null,
              msg || 'An error occurred while fetching the data!'
            )

          // eslint-disable-next-line consistent-return
          return { message: 'error', data: error?.response?.data }
        })
    },
  },
}
Vue.mixin(__axios)