<template>
       <h2>商品管理品頁</h2> 
       <table class="table table-bordered">
        <thead>
            <tr>
                <th>產品編號</th>
                <th>產品名稱</th>
                <th>產品價格</th>
                <th>製造日期</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="{id, name, price, make} in products" :key="id">
                <td>{{ id  }}</td>
                <td>{{ name  }}</td>
                <td>{{ price  }}</td>
                <td>{{ make }}</td>
            </tr>
        </tbody>
       </table>
</template>
    
<script setup>
    import axios from 'axios'
    import {ref, reactive} from 'vue'
    //GET http://172.18.105.194:8080    /pages/ajax/products/1
    //取得環境變數中的資料
    const url = import.meta.env.VITE_API_JAVAURL
    const product = ref({})
    const products = ref([])
    const datas = reactive({
        "start" :0,
        "rows" : 4,
        "name":"",
        "sortOrder":"asc",
        "sortType":"id"
        })

    const loadProducts = async()=>{
        const response = await axios.post(`${url}/products/find`, datas)
        products.value = response.data.list
    }

    loadProducts()

      

    // const loadProduct = async()=>{
    //   const response = await axios.get(`${url}/products/1`)
    //   //console.log(response)
    //   //console.log(response.data)
    //   //console.log(response.data.list[0].name)
    //   product.value = response.data.list[0]
    //   console.log(product.value)
    // }

    // loadProduct()
</script>
    
<style>
    
</style>