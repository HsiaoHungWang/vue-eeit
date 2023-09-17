<template>
    <nav>
        <ul class="pagination pagination-sm">
            <li class="page-item" v-for="(value, index) in totalPages" :key="index" @click="clickHandler(value)">
                <a :class="{ 'currentPage': thePage === value, 'page-link': true }">{{ value }}</a>
            </li>
        </ul>
    </nav>
</template>
    
<script setup>
//定義父元件傳進來的屬姓名稱
//父傳子
const props = defineProps({
    totalPages: Number,
    thePage: Number
})

console.log(props.totalPages)

//定義父元件傳進來的事件名稱
const emit = defineEmits(["childClick"])

const clickHandler = page => {
    //引發父元件定義好的事件
    //並且把資料傳給父元件的事件綁定的函式
    //子傳父
    emit("childClick", page)
}
</script>
    
<style scoped>
.pagination li {
    cursor: pointer;
}

.currentPage {
    background-color: lightblue;
}
</style>