<template>
    <ul class="news-list">
        <li>编号:{{ id }}</li>
        <li>标题：{{ title }}</li>
        <li>内容：{{ content }}</li>
    </ul>
</template>

<script lang="ts" setup name="news1">
import { defineProps } from 'vue';
defineProps([
    'id', 'title', 'content'
])
</script>

<style scoped></style>