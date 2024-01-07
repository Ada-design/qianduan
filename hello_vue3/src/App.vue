<template>
  <!-- html -->
  <!-- :b表示属性b,等号里面的是表达式，a="1+1",里面是字符串，渲染出来的结果是a="1+1" -->
  <!-- <h2 a="1+1" :b="1+1" c="x" :d="x"></h2> -->
  <propsDemp a="哈哈" :list="personList" />
</template>

<script lang="ts" setup>
import propsDemp from '@/components/propsDemo.vue';
// let x = 9
import { reactive } from 'vue'
import { type Persons } from '@/types';

let personList: Persons = reactive<Persons>([
  { id: '1', name: '张三', age: 13 },
  { id: '2', name: '李四', age: 14 },
  { id: '3', name: '王五', age: 15 }
])
</script>

<style>
/* 样式 */
</style>