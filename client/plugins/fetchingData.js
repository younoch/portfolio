import Vue from 'vue'
import { capitalize } from 'lodash'

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
    async $submitData(url, formData, payload = {}) {
      if (
        payload?.validationObserver &&
        !this.$refs[payload?.validationObserver].validate()
      )
        return

      if (url && formData) {
        // eslint-disable-next-line consistent-return
        return await this.$axios
          .post(url, formData)
          .then((response) => {
            let data = response
            let msg = 'Process completed successfully!'

            if (response?.data?.data?.data) data = response?.data?.data?.data
            else if (response?.data?.data) data = response?.data?.data
            else if (response?.data) data = response?.data

            if (payload?.editMode)
              msg = capitalize(payload?.title) + ' updated successfully!'
            else msg = capitalize(payload?.title) + ' created successfully!'
            if (payload?.success && payload?.success?.msg)
              msg = payload.success.msg
            if (
              typeof payload.displaySuccess === 'undefined' ||
              payload.displaySuccess
            )
              this.$successMessage('Success!', msg)

            return { message: 'success', data }
          })
          .catch((error) => {
            if (payload?.validationObserver) {
              if (error?.response && error?.response?.status === 422)
                this.$refs[payload?.validationObserver].setErrors(
                  error.response.data
                )
            }
            this.$errorMessage(
              'Error',
              payload?.error?.msg ? payload?.error?.msg : 'Some error occurred!'
            )

            return { message: 'error', data: error }
          })
      }
    },
    async $deleteData(url, pageName) {
      await this.$axios
        .delete(url)
        .then((response) => {
          console.log(response)
          return response
        })
        .catch((error) => {
          this.$errorMessage('Error!', `Error deleting ${capitalize(pageName)}`)

          return { message: 'error', data: error }
        })
    },
    $successMessage(
      title = 'Success',
      message = 'Process completed successfully'
    ) {
      this.$swal?.fire({
        toast: true,
        type: 'success',
        icon: 'success',
        position: 'bottom-right',
        timer: 1000,
        title,
        text: message,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        },
      })
    },
    $errorMessage(title = 'Error!', message = 'Some error occurred.') {
      this.$swal?.fire({
        toast: true,
        type: 'error',
        icon: 'error',
        position: 'bottom-right',
        timer: 2000,
        title,
        text: message,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        },
      })
    },
  },
}
Vue.mixin(__axios)
