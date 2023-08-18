<script setup>
import { ref } from 'vue'
const msg = ref("Guest")
</script>
<template>
    <h2>Hello SFC</h2>
<input type="text" v-model ="msg" />
<h3>Hello, {{ msg }}</h3>
</template>
<style scoped></style>