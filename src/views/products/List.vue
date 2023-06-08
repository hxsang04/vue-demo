<template>
    <div class="product-list">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h2 class="display-4">Product Management</h2>
            <p><router-link :to="{ name: 'product.create' }">Add New</router-link></p>
        </div>

        <div class="container">
            <div class="card-deck mb-3">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="index" v-for="(product, index) in products">
                            <th scope="row">{{index + 1}}</th>
                            <td>{{ product.name }}</td>
                            <td>{{ product.price }}</td>
                            <td>{{ product.description }}</td>
                            <td>
                                <router-link :to="{name: 'product.edit', params: {id: product.id}}">
                                    <button class="btn btn-primary">Edit</button> &nbsp;
                                </router-link>
                                <button class="btn btn-danger" @click="onDelete(product.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProductList',
    data() {
        return {
            products: []

        }
    },
    created(){
        this.getAll()
    },
    methods: {
        getAll(){
            this.axios.get('http://localhost:8000/api/products').then(res => {
                this.products = res.data
            })
        },
        onDelete(productId){
            this.axios.delete('http://localhost:8000/api/products/'+productId).then(res => {
                if(res.data.success){
                    this.getAll()
                    alert('Delete successful!!!')
                }
            })
        }
    }
}
</script>