import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/'
export const useAppStore = defineStore('app', {
  state: () => ({
    products: [],
    product: {}
  }),
  actions: {
    async addProduct(form) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${BASE_URL}`,
          data: form
        })
        Swal.fire({
          icon: 'success',
          text: 'Add Product Successfully'
        })
        this.router.push('/')
      } catch (error) {
        console.log(error)
        if (error.response) {
          if (error.response.data[0].message) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.response.data[0].message,
              footer: '<a href="">Why do I have this issue?</a>'
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.response.data.required,
              footer: '<a href="">Why do I have this issue?</a>'
            })
          }
        }
      }
    },

    async fetchProduct() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${BASE_URL}`
        })
        this.products = data
        console.log(this.products)
      } catch (error) {
        console.log(error)
      }
    },
    async detailProduct(id) {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${BASE_URL}${id}`
        })
        console.log('masuk sini')
        console.log(data)
        this.product = data
        console.log(this.product)
      } catch (error) {
        console.log(error)
      }
    },
    async editProduct(id, form) {
      try {
        const { data } = await axios({
          method: 'put',
          url: `${BASE_URL}${id}`,

          data: form
        })
        Swal.fire({
          icon: 'success',
          text: 'Edit Product Successfully'
        })
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
  }
})
