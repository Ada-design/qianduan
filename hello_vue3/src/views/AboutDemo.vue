<template>
    <div class="about">
        <h2>关于</h2>
    </div>
</template>

<script lang="ts" setup name="About-Demo">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
    setTimeout(() => {
        router.push({
            path:'/news'
        })
    }, 2000);
})
</script>

<style scoped>
.about {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
}
</style>