<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="car">
        <p>一辆{{ Car.brand }}车的价格是 {{ Car.price }}元</p>
        <button @click="changePrice">改变价格</button>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="item in games" :key="item.id">{{ item.name }}</li>
        </ul>
        <button @click="changeFirstName">修改第一个游戏的名字</button>
    </div>
</template>  


<script lang="ts" setup name="test">
import { ref, reactive } from 'vue'

// 数据
let Car = ref({
    brand: '奔驰',
    price: 100,
})
let games = ref([
    { id: 1, name: '吃鸡' },
    { id: 2, name: '打地鼠' },
    { id: 3, name: '打篮球' }
])
console.log(Car)
let obj = reactive({
    name: '明明'
})
console.log(obj)
function changeFirstName() {
    games.value[0].name = '王者荣耀'
}



// 方法
function changePrice() {
    Car.value.price += 10
}



</script>

<style scoped>
.car {
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
</style>
