<template>
    <div class="container border-box">
        <div class="header-box row-between bg-white pv10 ph20">
            <div
                class="icon-back"
                @click="handleNavBack"
            ></div>
            <div class="title">新闻详情</div>
            <div class="btn-box"></div>
        </div>
        <div class="header-box bg-white pv10 ph20">
            <div
                @click="handleBackList"
            >
                <div class="title">通过router.push返回列表</div>
            </div>
        </div>

        <div class="details-box b-white border-box">
            <div class="name-box">
                <div class="name">{{ detail.name }}</div>
                <div class="row-between">
                    <div class="row">
                        <div class="label">新闻id:</div>
                        <div class="id">{{detail.id}}</div>
                    </div>
                    <div class="author">{{detail.author}}</div>
                    <div class="date">{{detail.date}}</div>
                </div>
            </div>
            <div class="content-box">
                <img
                    v-if="detail.cover"
                    class="cover bg-img"
                    radius="8"
                    fit="fill"
                    :src="detail.cover" 
                />
                <div class="content">
                    {{detail.content}}{{detail.content}}
                </div>
            </div>
        </div>

        <div class="list-box">
            <div class="row-center title-box pv20">
                <img
                    fit="cover"
                    class="icon icon-left"
                    src="./assets/images/icon-title-left.png"
                />
                <span class="title text-18 t-222 weight6 ph10">相关新闻推荐</span>
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
                    @click="handleNavNewsDetailAbout(index)">
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

        <div class="list-box">
            <div class="row-center title-box pv20">
                <img
                    fit="cover"
                    class="icon icon-left"
                    src="./assets/images/icon-title-left.png"
                />
                <span class="title text-18 t-222 weight6 ph10">再一次跳转到详情</span>
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
                    @click="handleNavNews(index)">
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
        
        <div class="comment-box fixed-bottom row">
            <input
                class="input-field flex1"
                v-model="comment"
                name="评论"
                placeholder="说两句吧"
            />
            <div class="btn-box">
                <button
                    class="btn"
                >评论</button>
            </div>
        </div>
    </div>
</template>
<script setup name="NewsDetail">
import { ref, onMounted, onActivated } from 'vue';
import { ROUTER_CACHE_CONSTANTS } from 'vue-router-dynamic-cache';
import { useRouter, useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();

const pageParams = route.query;
let comment = ref('');

// 新闻详情，理论上应该根据获取id从后台获取
const newsDetail = JSON.parse(sessionStorage.getItem('newsDetail'));
let detail = ref(newsDetail);

const newsList2 = ref([
    {
        id: 3,
        cover: new URL('./assets/images/news-3.png', import.meta.url).href,
        name: '新闻-3示例标题',
        introduction: '新闻-3，新闻-3示例简介',
        author: 'zy',
        date: '2022-05-06',
        content: '新闻-3新闻详情详细信息详细新闻内容详细报道内容详情'
    }, 
    {
        id: 4,
        cover: new URL('./assets/images/news-4.png', import.meta.url).href,
        name: '新闻-4示例标题',
        introduction: '新闻-4，新闻-4介示例简介',
        author: 'zy',
        date: '2022-05-06',
        content: '新闻-4新闻详情详细信息详细新闻内容详细报道内容详情'
    }
]);

// 跳转到新闻详情
const handleNavNews = (index) => {
    console.log('跳转到新闻详情', index)
    sessionStorage.setItem('newsDetail', JSON.stringify(newsList2.value[index]));
    router.push({
        path: '/news/detail',
        query: newsList2.value[index].id,
        hash: ROUTER_CACHE_CONSTANTS.KEY.ROUTER_ALIVE_HASH_PUSH,
    });
};

// 跳转到新闻详情2
const handleNavNewsDetailAbout = (index) => {
    sessionStorage.setItem('detailAbout', JSON.stringify(newsList2.value[index]));
    router.push({
        path: '/news/detail-about',
        query: newsList2.value[index].id,
        
        //  想缓存当前详情页，再跳转相关页
        hash: ROUTER_CACHE_CONSTANTS.KEY.ROUTER_ALIVE_HASH_PUSH,
       
        //  不想缓存当前详情页，再跳转相关页
        // hash: `${ROUTER_CACHE_CONSTANTS.KEY.ROUTER_ALIVE_HASH_PUSH}${ROUTER_CACHE_CONSTANTS.KEY.ROUTER_ALIVE_HASH_NO_CACHE_FROM}`,
        
        // 想清除当前详情页页面栈，再跳转相关页，（这样返回时，不会存在详情页）
        // hash: `${ROUTER_CACHE_CONSTANTS.KEY.ROUTER_ALIVE_HASH_PUSH}${ROUTER_CACHE_CONSTANTS.KEY.ROUTER_ALIVE_HASH_PUSH_REPLACE}`,
        // replace: true

    });
};

const handleNavBack = () => {
    router.back();
}

// 跳转到新闻列表
const handleBackList = () => {
    console.log('push返回');
    router.push({
        path: '/news/list',
        // 在详情页通过router.push返回上一页，即使列表已经缓存，也会重新加载
        hash: `${ROUTER_CACHE_CONSTANTS.KEY.ROUTER_ALIVE_HASH_PUSH}${ROUTER_CACHE_CONSTANTS.KEY.ROUTER_ALIVE_HASH_BACK}`,
    });
};

onActivated(() => {
    console.log('detail onActivated');
});

onMounted(() => {
    console.log('detail onMounted');
});
</script>

<style scoped>
    .container {
        background-color: #fff;
        padding-bottom: 100px; 
    }

    .header-box {
        background-color: #fff;
    }

    .header-box .title {
        font-size: 18px;
        font-weight: 600;
    }

    .header-box .icon-back {
        position: relative;
        padding: 16px;
    }

    .header-box .icon-back::before {
        position: absolute;
        top: 10px;
        left: 0;
        width: 10px;
        height: 10px;
        content: '';
        border-left: 2px solid #50E3C2;
        border-bottom: 2px solid #50E3C2;
        transform: rotate(45deg);
    }

    .header-box .btn-box .btn { 
        color: #50E3C2;
        font-size: 16px;
        font-weight: 500;
    }

    .details-box {
        padding: 12px 24px;
    }

    .details-box .name-box {
        border-bottom: 1px solid #dedede;
    }

    .details-box .name-box .name {
        padding: 10px 0;
        font-size: 18px;
        font-weight: 500;
    }
    .details-box .name-box .author, .details-box .name-box .date {
        font-size: 12px;
        color: #666;
        text-align: right;
        padding-bottom: 4px;
    }

    .details-box .content-box {
        padding: 10px 0;
    }

    .details-box .content {
        margin-top: 10px;
        font-size: 14px;
        color: #333;
    }

    .details-box .id-box {
        margin-top: 10px;
        font-size: 12px;
        color: #333;
    }

    .details-box .cover {
       width: 100%;
       height: 200px;
       object-fit: contain;
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
        font-size: 18px;
        color: #222;
        font-weight: 500;
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


    .comment-box {
        background-color: #50E3C2;
        font-size: 17px;
        padding: 7px 15px 7px 13px;
        box-sizing: border-box;
    }

    .comment-box .cell-box {
        padding: 15px 0 10px 0;
    }

    .comment-box .input-field {
        padding: 4px 8px;
        border: none;
    }

    .comment-box .btn-box {
        margin-left: 4px;
    }

    .comment-box .btn-box .btn {
        padding: 4px 8px;
        color: #fff;
        background-color: #50E3C2;
        border: none;
        border-radius: 4px;
    }
</style>
