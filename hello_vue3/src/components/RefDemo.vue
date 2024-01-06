<template>
    <div class="refDemo">
        <!-- v-model: 双向绑定 -->
        姓：<input type="text" v-model="lastName"><br>
        名：<input type="text" v-model="firstName"><br>
        全名:<span>{{ fullName }}</span><br><br>
        <button @click="changeFullName">修改名称</button>
    </div>
</template>

<script lang="ts" setup name="Ref-Demo">
import { ref, computed } from 'vue'

// 数据
let firstName = ref("三")
let lastName = ref("张")

// 这么定义的fullName是只读的，不能修改
// 所以需要使用computed
// let fullName = computed(() => {
//     // 依赖的属性发生变化就会重新计算
//     return lastName.value + firstName.value
// })

let fullName = computed({
    get() {
        // 依赖的属性发生变化就会重新计算
        return lastName.value.slice(0, 1).toUpperCase() + lastName.value.slice(1) + '-' + firstName.value
    },
    set(val) {
        console.log('set', val)
        const [str1, str2] = val.split('-')
        firstName.value = str2
        lastName.value = str1
    }
})

function changeFullName() {
    // 直接修改fullName的值
    fullName.value = 'li-si'
    // 或者使用set方法
}

</script>

<style scoped>
button {
    background-color: rgb(0, 255, 162);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    margin-right: 10px;
}

.refDemo {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>