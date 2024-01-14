<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <!-- 路由激活时候的样式active-class -->
      <!-- to="/" 字符串写法 -->
      <!-- :to="{path:'/about'}" :to="{name:'news'}" 对象式写法  -->
      <RouterLink to="/" active-class="active">首页</RouterLink>
      <RouterLink :to="{ path: '/about' }" active-class="active">关于</RouterLink>
      <RouterLink :to="{ name: 'news' }" active-class="active">新闻</RouterLink>
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
  word-spacing: 5px;
  margin: 30px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg, gray, white);
  border-radius: 10px;
  box-shadow: 0 0 2px;
  font-size: 30px;
}

a {
  margin-right: 20px;
}

.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}

.navigate a {
  display: block;
  text-align: center;
  width: 90px;
}

.navigate a.active {
  background-color: #64967E;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: '微软雅黑';
}

.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 80%;
}
</style>