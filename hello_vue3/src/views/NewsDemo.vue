<template>
    <div class="news">
        <!-- 导航区 -->
        <div>
            <ul>
                <li v-for="(item, index) in newsList" :key="index">
                    <RouterLink :to="item.path">{{ item.title }}</RouterLink>
                </li>
            </ul>
        </div>
        <div class="right">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="news-demo">
import { reactive } from "vue"
import { RouterView, RouterLink } from "vue-router"

const newsList = reactive(
    [
        {
            id: 1,
            title: "很好的抗癌食物",
            content: "西兰花",
            path: '/news/detail'
        },
        {
            id: 2,
            title: "如何一夜暴富",
            content: "新闻内容",
            path: '/news/detail2'
        }
    ]
)
</script>

<style scoped>
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
}

/* li标签圆点颜色设置 */
.news li::marker {
    color: #64967E;
}

.news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rb(0, 84, 0);
}
</style>