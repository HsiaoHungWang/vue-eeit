<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <div class="mb-3">
        <label for="id" class="form-label">ProductID</label>
        <input type="text" class="form-control" id="id" v-model="product.id" />
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">ProductName</label>
        <input type="text" class="form-control" id="name" v-model="product.name" />
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input type="text" class="form-control" id="price" v-model="product.price" />
      </div>
      <div class="mb-3">
        <label for="expire" class="form-label">expire</label>
        <input type="text" class="form-control" id="expire" v-model="product.expire" />
      </div>
      <div class="mb-3">
        <label for="make" class="form-label">make</label>
        <input type="date" class="form-control" id="make" v-model="product.make" />
      </div>

      <button class="btn btn-primary" type="button" @click="addHandler">
        新增
      </button>
    </div>
    <div class="col-3"></div>
  </div>
</template>
    
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Product from '../models/Product';
const router = useRouter()
const product = ref(Product)
const addHandler = async () => {
    const API_URL = `${import.meta.env.VITE_API_JAVAURL}products/`
    const response = await axios.post(API_URL, product.value)
    if (response.data.success) {
        alert(response.data.message)
        router.push('/products');
    }
}

</script>
    
<style>
</style>