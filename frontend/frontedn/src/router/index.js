import { createRouter, createWebHistory } from 'vue-router'


import TableProduct from '../components/TableProduct.vue'
import AddProduct from '../views/AddProduct.vue';
import EditProduct from '../views/EditProduct.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TableProduct,
      meta: {
        title: 'Products Page'
      }
    },
    {
      path: '/addProduct',
      component: AddProduct
    },
    {
      path: '/edit/:id',
      component: EditProduct
    },

  ]
})



export default router
