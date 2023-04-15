<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    data() {
        return {
            form: {
                productID: '',
                productName: '',
                amount: '',
                customerName: '',
                status: '',
                transactionDate: '',
                createBy: '',
            }
        }
    },
    methods: {
        ...mapActions(useAppStore, ['addProduct']),
        async doAddProduct() {

            this.addProduct(this.form)
        }
    },
}
</script>
<template >
    <div>
        <div class="container">

            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                            <div class="card mb-3">

                                <div class="card-body">

                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Add new Product</h5>
                                    </div>

                                    <form @submit.prevent="doAddProduct" class="row g-3 needs-validation">

                                        <div class="col-12">
                                            <label for="name" class="form-label">Product ID</label>
                                            <div class="input-group has-validation">
                                                <input v-model="form.productID" type="text" name="name" class="form-control"
                                                    id="name" required>
                                                <div class="invalid-feedback">Product ID</div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="name" class="form-label">Product Name</label>
                                            <div class="input-group has-validation">
                                                <input v-model="form.productName" type="text" name="name"
                                                    class="form-control" id="name" required>
                                                <div class="invalid-feedback">Product Name</div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="name" class="form-label">Amount</label>
                                            <div class="input-group has-validation">
                                                <input v-model="form.amount" type="number" name="name" class="form-control"
                                                    id="name" required>
                                                <div class="invalid-feedback">Amount</div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="name" class="form-label">Customer Name</label>
                                            <div class="input-group has-validation">
                                                <input v-model="form.customerName" type="text" name="name"
                                                    class="form-control" id="name" required>
                                                <div class="invalid-feedback">Customer Name</div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Status</label>
                                            <select v-model="form.status" class="form-select"
                                                aria-label="Default select example">
                                                <option selected>--Select Type --</option>
                                                <option value="0">FAILED</option>
                                                <option value="1">SUCCESS</option>
                                            </select>
                                        </div>


                                        <div class="col-12">
                                            <label for="name" class="form-label">Transaction Date</label>
                                            <div class="input-group has-validation">
                                                <input type="date" v-model="form.transactionDate" name="name"
                                                    class="form-control" id="name" required>
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="name" class="form-label">Create By</label>
                                            <div class="input-group has-validation">
                                                <input v-model="form.createBy" type="text" name="name" class="form-control"
                                                    id="name" required>
                                                <div class="invalid-feedback">Create By</div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit">Add</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


    </div>
</div></template>
<style ></style>