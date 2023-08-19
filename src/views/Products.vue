<template>
  <h2>Product List</h2>
  <RouterLink class="btn btn-primary mb-3" to="/products/add"><i class="bi bi-person-add"></i> 新增</RouterLink>
  <div class="row mb-3">
    <div class="col-3"><PageSize @pageSizeChange="changeHandler"></PageSize></div>
    <div class="col-6"></div>
    <div class="col-3"><SearchTextBox @searchInput="inputHandler"></SearchTextBox></div>
  </div>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>產品編號 <i class="bi" :class="{ 'bi-sort-up': datas.sortOrder === 'asc', 'bi-sort-down': datas.sortOrder === 'desc' }"  @click="sortHandler('id')"></i>
</th>
        <th>產品名稱</th>
        <th>產品價格</th>
        <th>製造日期</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ id, name, price, make } in products" :key="id">
        <td>{{ id }}</td>
        <td>{{ name }}</td>
        <td>{{ price }}</td>
        <td>{{ make }}</td>
        <td>
            <RouterLink class="btn btn-secondary me-3" :to="'/products/edit/' + id"><i class="bi bi-pencil-fill"></i> 修改</RouterLink>
            <button class="btn btn-danger" @click="deleteHandler(id)"><i class="bi bi-trash-fill"></i> 刪除</button>
        </td>
      </tr>
    </tbody>
  </table>
  <Paging :totalPages="totalPages" :thePage="datas.start + 1" @childClick="clickHandler"></Paging>
  <!--
  <nav aria-label="Page navigation example">
  <ul class="pagination">    
    <li class="page-item" @click="clickHandler(value)" v-for="(value, index) in totalPages" :key="index"><a :class="{'page-link':true,'currentPage':datas.start+1===value}">{{ value }}</a></li>
    
  </ul>
</nav>-->
</template>
    
<script setup>
import { ref, reactive } from "vue";
import axios from "axios";
import Paging from "../components/Paging.vue";
import SearchTextBox from "../components/SearchTextBox.vue";
import PageSize from "../components/PageSize.vue";
const products = ref([]);
const totalPages = ref(0);
const datas = reactive({
  start: 0,
  rows: 0,
  name: "",
  sortOrder: "asc",
  sortType: "id",
});
const URL = import.meta.env.VITE_API_JAVAURL;
const loadProducts = async () => {
  const URLAPI = `${URL}products/find`;
  const response = await axios.post(URLAPI, datas);
  console.log(response.data)
  //取得所有商品放進products變數
  products.value = response.data.list;

  //計算總共幾頁
 totalPages.value = +datas.rows === 0 ? 1 : Math.ceil(response.data.count / datas.rows)
};

//paging 由子元件觸發
const clickHandler = page =>{
    datas.start = page - 1
    loadProducts()
}

//搜尋
const inputHandler = value =>{
    datas.name = value
    datas.start = 0
    loadProducts()
}

//一頁幾筆資料
const changeHandler = value => {
    datas.rows = value
    datas.start = 0
    console.log("pagesize：",datas)
    loadProducts()
}

//排序
const sortHandler = type => {
    datas.sortOrder = datas.sortOrder === "asc" ? "desc" : "asc"
    datas.sortType = type
    loadProducts()
}

//刪除
const deleteHandler = async(id) =>{
    if(window.confirm("真的要刪除嗎?")){
        const URLAPI = `${URL}products/${id}`;
       const response = await axios.delete(URLAPI);
       if(response.data.success){
        alert(response.data.message)
        loadProducts()
       }
    }
}
loadProducts();
</script>
    
<style scoped>
</style>