<template>
    <div class="talk">
        <button  @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="item in talkList" :key="item.id">{{item.title}} </li>
        </ul>
    </div>
</template>

<style scoped>
.talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>

<script setup lang="ts" name="Love-Talk">
import { reactive } from 'vue'
import axios from 'axios'
import { nanoid } from 'nanoid'

// 数据
let talkList =  reactive([
    {id:'1',title:'今天你有点怪，哪里怪？怪好看的'},
    {id:'2',title:'草莓、蓝莓、蔓越莓，今天想我了没？'},
    {id:'3',title:'今天你又想我了，你是不是又喜欢我了�'}
])

// 方法
let url = 'https://api.uomg.com/api/rand.qinghua?format=json'
async function getLoveTalk(){
    // 发请求,下面这行的写法是:连续解构赋值+重命名
    // 从返回的result中data,再从data中解构出content属性，重命名为title
    let {data:{content:title}} = await axios.get(url)
    // 把请求回来的字符串，包装成一个对象
    let obj = {id:nanoid(),title}
    console.log(obj)
    talkList.push(obj)
}
</script>