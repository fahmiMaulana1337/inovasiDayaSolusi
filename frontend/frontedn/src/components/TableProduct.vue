<script>
import { mapActions, mapWritableState } from 'pinia'
import { useAppStore } from '../stores/app'

export default {
    computed: {
        ...mapWritableState(useAppStore, ['products', 'product'])
    },
    methods: {
        ...mapActions(useAppStore, ['fetchProduct', 'detailProduct']),
        showDetail(id) {
            console.log(id, '<<<<<<<<<<<<<<<<< id')
            this.fetchProduct
            this.detailProduct(id)
            console.log(this.product, '"<<<<<<<<<<<<<<u detail"')
            Swal.fire({
                title: 'Detail Product',
                html:
                    `<p>ProductID :${this.product.productID}</p> ` +
                    `<p>ProductName :${this.product.productName}</p> ` +
                    `<p>Status :${this.product.Status.name}</p> ` +
                    `<p>Amount :${this.product.amount}</p> ` +
                    `<p>Customer Name :${this.product.customerName}</p> ` +
                    `<p>Transaction Date :${this.product.transactionDate}</p> ` +
                    `<p>Create By  :${this.product.createBy}</p> ` +
                    `<p>Create By  :${this.product.createOn}</p> `,

                showCloseButton: true,

                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!'
            })
        }
    },

    created() {
        this.fetchProduct()
    }
}
</script>
<template>
    <main id="main" class="main">
        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Products</h5>
                            <button @click.prevent="$router.push('/addProduct')" class="btn btn-success">
                                Add Product
                            </button>
                            <table class="table datatable">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product ID</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Customer Name</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Transaction Date</th>
                                        <th scope="col">Create By</th>
                                        <th scope="col">Create On</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in products" :key="index">
                                        <th scope="row">{{ (index += 1) }}</th>
                                        <td>{{ product.productID }}</td>
                                        <td>{{ product.productName }}</td>
                                        <td>{{ product.amount }}</td>
                                        <td>{{ product.customerName }}</td>
                                        <td>{{ product.Status.name }}</td>
                                        <td>{{ product.transactionDate }}</td>
                                        <td>{{ product.createBy }}</td>
                                        <td>{{ product.createOn }}</td>
                                        <td>
                                            <button class="btn btn-info" @click.prevent="showDetail(product.id)">
                                                Detail
                                            </button>
                                        </td>
                                        <td>
                                            <button class="btn btn-warning"
                                                @click.prevent="$router.push(`/edit/${product.id}`)">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<style></style>
