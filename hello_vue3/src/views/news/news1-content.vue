<template>
    <ul class="news-list">
        <li>编号:{{ a }}</li>
        <li>标题：{{ b }}</li>
        <li>内容：{{ c }}</li>
    </ul>
</template>

<script lang="ts" setup name="news1">
import { defineProps } from 'vue'
defineProps([
    'a', 'b', 'c'
])
</script>

<style scoped></style>