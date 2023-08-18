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
       <nav>
  <ul class="pagination pagination-sm">
    <li class="page-item" v-for="(value, index) in totalPages" :key="index" 
        @click="clickHandler(value)">
        <a :class="{'currentPage':datas.start+1 === value,'page-link':true}">{{value}}</a>
    </li>  
  </ul>
</nav>
</template>
    
<script setup>
    import axios from 'axios'
    import {ref, reactive} from 'vue'
    //GET http://172.18.105.194:8080    /pages/ajax/products/1
    //取得環境變數中的資料
    const url = import.meta.env.VITE_API_JAVAURL
    const product = ref({})
    const products = ref([])
    const totalPages = ref(0)  //總共有幾頁
    const datas = reactive({
        "start" :0,
        "rows" : 4,
        "name":"",
        "sortOrder":"asc",
        "sortType":"id"
        })

    //分頁按鈕
    const clickHandler = page => {
       datas.start = page - 1 
       loadProducts()
    }

    const loadProducts = async()=>{
        const response = await axios.post(`${url}/products/find`, datas)
        products.value = response.data.list

        //計算總共有幾頁
        totalPages.value = datas.rows == 0 ? 1 : Math.ceil(response.data.count / datas.rows)
        console.log(totalPages.value)
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
    
<style scoped>
    .pagination li{
        cursor: pointer;
    }

    .currentPage{
        background-color: lightblue;
    }
</style>