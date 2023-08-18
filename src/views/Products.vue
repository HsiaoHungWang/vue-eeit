<template>
       <h2>{{product.name}} 產品頁</h2> 
</template>
    
<script setup>
    import axios from 'axios'
    import {ref} from 'vue'
    //GET http://172.18.105.194:8080    /pages/ajax/products/1
    //取得環境變數中的資料
    const url = import.meta.env.VITE_API_JAVAURL
    const product = ref({})

    const loadProduct = async()=>{
      const response = await axios.get(`${url}/products/1`)
      //console.log(response)
      //console.log(response.data)
      //console.log(response.data.list[0].name)
      product.value = response.data.list[0]
      console.log(product.value)
    }

    loadProduct()
</script>
    
<style>
    
</style>