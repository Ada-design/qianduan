<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <!-- 路由激活时候的样式active-class -->
      <!-- to="/" 字符串写法 -->
      <!-- :to="{path:'/about'}" :to="{name:'news'}" 对象式写法  -->
      <RouterLink to="/" active-class="active">首页</RouterLink>
      <RouterLink :to="{path:'/about'}" active-class="active" >关于</RouterLink>
      <RouterLink :to="{name:'news'}" active-class="active" >新闻</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<style>
/* 样式 */
.title {
  text-align: center;
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

a {
  margin-right: 20px;
}
</style>