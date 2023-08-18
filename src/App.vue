<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar.vue';



</script>

<template> 
<div class="container">
  <Navbar></Navbar>
  <div class="mt-3">
     <router-view></router-view>
  </div>
 
</div>

</template>

<style scoped>
</style>
