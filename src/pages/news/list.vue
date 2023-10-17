<template>
    <div class="container border-box">
        <div class="search-box row">
            <input
                class="input-field flex1"
                v-model="keyword"
                name="标题"
                clearable
                left-icon="search"
                placeholder="请输入新闻标题"
            />
            <div class="btn-box">
                <button
                    class="btn"
                >搜索</button>
            </div>
        </div>
        <div 
            v-if="activeTip"
            class="active-tip"
        >{{activeTip}}</div>
        <div class="list-box">
            <div class="row-center title-box pv20">
                <img
                    fit="cover"
                    class="icon icon-left"
                    src="./assets/images/icon-title-left.png"
                />
                <!-- <span class="title text-18 t-222 weight6 ph10">跳转一级页面数据</span> -->
                <span class="title text-18 t-222 weight6 ph10">新闻列表</span>
                <img
                    fit="cover"
                    class="icon icon-right"
                    src="./assets/images/icon-title-right.png"
                />
            </div>
            <div class="news-list-box b-white">
                <div class="news-item-box mh20 pv10 row"
                    v-for="(news, index) in newsList"
                    :key="index"
                    @click="handleNavDetail(index)">
                    <div class="cover-box r8">
                        <img
                            v-if="news.cover"
                            class="cover bg-img"
                            radius="8"
                            fit="fill"
                            :src="news.cover" 
                        />
                    </div>
                    <div class="right-box flex1 column-between">
                        <div class="introduction-box">
                            <div class="name t-black line-two">{{news.name}}</div>
                            <div class="introduction">{{news.introduction}}</div>
                        </div>
                        <div class="row-between">
                            <div class="author">{{news.author}}</div>
                            <div class="date">{{news.date}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="list-box">
            <div class="row-center title-box pv20">
                <img
                    fit="cover"
                    class="icon icon-left"
                    src="./assets/images/icon-title-left.png"
                />
                <span class="title text-18 t-222 weight6 ph10">跳转二级页面数据</span>
                <img
                    fit="cover"
                    class="icon icon-right"
                    src="./assets/images/icon-title-right.png"
                />
            </div>
            <div class="news-list-box b-white">
                <div class="news-item-box mh20 pv10 row"
                    v-for="(news, index) in newsList2"
                    :key="index"
                    @click="handleNavDetail2(index)">
                    <div class="cover-box r8">
                        <img
                            v-if="news.cover"
                            class="cover bg-img"
                            radius="8"
                            fit="fill"
                            :src="news.cover" 
                        />
                    </div>
                    <div class="right-box flex1 column-between">
                        <div class="introduction-box">
                            <div class="name t-black line-two">{{news.name}}</div>
                            <div class="introduction">{{news.introduction}}</div>
                        </div>
                        <div class="row-between">
                            <div class="author">{{news.author}}</div>
                            <div class="date">{{news.date}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        
        <div class="footer-box fixed-bottom">
            <button
                class="btn"
                @click="handleBack"
            >返回</button>
        </div>
    </div>
</template>
<script setup name="NewsList">
import { ref, onMounted, onActivated } from 'vue';
import { ROUTER_CACHE_CONSTANTS } from 'vue-router-dynamic-cache';
import { useRouter } from 'vue-router';
const router = useRouter();

let activeTip = ref('');
const newsList = ref([
    {
        id: 1,
        cover: new URL('./assets/images/news-1.jpeg', import.meta.url).href,
        name: '新闻-1示例标题',
        introduction: '新闻-1,新闻-1示例简介',
        author: 'z-yates',
        date: '2022-05-06',
        content: '新闻-1新闻详情详细信息详细新闻内容详细报道内容详情'
    }, 
    { 
        id: 2,
        cover: new URL('./assets/images/news-2.png', import.meta.url).href,
        name: '新闻-2示例标题',
        introduction: '新闻-2,新闻-2示例简介',
        author: 'z-yates',
        date: '2022-05-06',
        content: '新闻-2新闻详情详细信息详细新闻内容详细报道内容详情'
    },
    {
        id: 3,
        cover: new URL('./assets/images/news-2.png', import.meta.url).href,
        name: '新闻-3示例标题',
        introduction: '新闻-3,新闻-3示例简介',
        author: 'z-yates',
        date: '2022-05-06',
        content: '新闻-3新闻详情详细信息详细新闻内容详细报道内容详情'
    }
]);

const newsList2 = ref([
    {
        id: 3,
        cover: new URL('./assets/images/news-3.png', import.meta.url).href,
        name: '新闻-3示例标题示例标题',
        introduction: '新闻-3示例简介示例简介示例简介',
        author: 'zy',
        date: '2022-05-06',
        content: '新闻-3新闻详情详细信息详细新闻内容详细报道内容详情'
    }, 
    {
        id: 4,
        cover: new URL('./assets/images/news-4.png', import.meta.url).href,
        name: '新闻-4示例标题示例标题',
        introduction: '新闻-4示例简介示例简介示例简介',
        author: 'zy',
        date: '2022-05-06',
        content: '新闻-4新闻详情详细信息详细新闻内容详细报道内容详情'
    }
]);
let keyword = ref('');

// 跳转到新闻详情
const handleNavDetail = (index) => {
    sessionStorage.setItem('newsDetail', JSON.stringify(newsList.value[index]));
    router.push({
        path: '/news/detail',
        query: newsList.value[index].id,
        hash: ROUTER_CACHE_CONSTANTS.KEY.ROUTER_ALIVE_HASH_PUSH,
    });
};

// 跳转到新闻详情2
const handleNavDetail2 = (index) => {
    sessionStorage.setItem('newsDetail', newsList.value[index]);
    router.push({
        name: 'NewsDetail2',
        params: newsList2.value[index],
        // hash: ROUTER_CACHE_CONSTANTS.KEY.ROUTER_ALIVE_HASH_PUSH,
    });
};

const handleBack = () => {
    router.back();
}

onActivated(() => {
    activeTip.value = 'list列表页面被重新激活了';
});

onMounted(() => {
    console.log('list onMounted');
});
</script>

<style scoped>
.container {
    padding-bottom: 100px;
}

.search-box {
    margin: 10px 12px;
    background-color: #eaebee;
    border-radius: 10px;
    font-size: 17px;
    padding: 7px 15px 7px 13px;
    box-sizing: border-box;
}

.search-box .cell-box {
    padding: 15px 0 10px 0;
}

.search-box .input-field {
    padding: 4px 8px;
    border: none;
}

.search-box .btn-box {
    margin-left: 4px;
}

.search-box .btn-box .btn {
    padding: 4px 8px;
    color: #fff;
    background-color: #50E3C2;
    border: none;
    border-radius: 4px;
}

.list-box .title-box {
    padding: 16px 0;
}

.list-box .title-box .icon {
    width: 77px;
    height: 9px;
}

.list-box .title-box .title {
    color: #50E3C2;
    font-size: 16px;
    font-weight: 500;
}

.active-tip {
    color: #c61f3d;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
}

.news-item-box .cover-box {
    width: 84px;
    height: 84px;
    border-radius: 8px;
}

.news-item-box {
    border-bottom: 1px solid #ececec;
}

.news-item-box .cover-box .cover {
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

.news-item-box .right-box {
    min-height: 84px;
    padding: 4px 0 4px 10px;
}

.news-item-box .right-box .name {
    font-size: 16px;
    color: #222;
}

.news-item-box .right-box .introduction {
    font-size: 14px;
    color: #666;
    padding-top: 4px;
}

.news-item-box .right-box .author, .news-item-box .right-box .date {
    font-size: 12px;
    color: #666;
    text-align: right;
}

.news-item-box .right-box .author {
    font-weight: 500;
}

.footer-box .btn {
    width: 100%;
    padding: 8px 0;
    color: #fff;
    background-color: #50E3C2;
    border: none;
    font-size: 16px;
    font-weight: 500;
}
</style>
