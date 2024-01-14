<template>
       <ul class="news-list">
        <li>编号：{{ route.params.id }}</li>
        <li>标题：{{ route.params.title }}</li>
        <li>内容：{{ route.params.content }}</li>
    </ul>
</template>

<script lang="ts" setup name="news2">
import { useRoute } from 'vue-router';
let route = useRoute()
console.log(route)
</script>

<style scoped></style>