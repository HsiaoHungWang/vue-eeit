<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">EEIT Vue Demo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">      
          <RouterLink to="/" class="nav-link">首頁</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/about" class="nav-link">關於</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">聯絡我們</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/products" class="nav-link">商品管理</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>    
</template>
    
<script setup>
    
</script>
    
<style>
    
</style>