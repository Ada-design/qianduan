<template>
    <div class="hooks">
        <h2>当前求和为:{{ sum }}</h2>
        <button @click="add()">点我sum +1</button>
        <hr>
        <div class="imgWrapper">
            <img v-for="(item, index) in dogList" :key="index" :src="item" alt="dog" />
        </div>
        <div style="margin-top: 10px;">
            <button @click="getDog()">再来一只狗</button>
        </div>
    </div>
</template>
<script lang="ts" setup name="Hooks-Demo">
import useSum from '@/hooks/useSum.ts'
import useDog from '@/hooks/useDog.ts'

const { sum, add } = useSum()
const { dogList, getDog } = useDog()
</script>

<style scoped>
.hooks {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    background-color: rgb(0, 255, 162);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    margin-right: 10px;
}

img {
    width: 200px;
    margin-right: 10px;
}
</style>