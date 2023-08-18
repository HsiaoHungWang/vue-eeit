<template>
    <input type="search" @input="inputHandler" v-model="keyword" placeholder="請輸入產品名稱" class="form-control mb-3">
    <p>{{ keyword }}</p>
</template>
<script setup>
import { ref } from 'vue'
const keyword = ref("") //產品搜尋
const emit = defineEmits(["searchInput"])
const inputHandler = () => {
    emit("searchInput", keyword.value)
}
</script> 
<style scoped></style>
    