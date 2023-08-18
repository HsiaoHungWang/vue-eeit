<script setup>
import HelloVue from './components/HelloVue.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';

</script>

<template> 
<div class="container">
  <h2>Hello Vue!!</h2>
  <hr />
  <router-view></router-view>
</div>

</template>

<style scoped>
</style>
