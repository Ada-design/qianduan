<template>
    <div class="news">
        <li><a href="#">新闻001</a></li>
        <li><a href="#">新闻002</a></li>
        <li><a href="#">新闻003</a></li>
        <li><a href="#">新闻004</a></li>
    </div>
</template>

<script lang="ts" setup name="About-Demo">

</script>

<style scoped>
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin-top: 20px;
}

.news ul li{
    margin-top: 30px;
    list-style: none !important;
    display: flex;
}
</style>