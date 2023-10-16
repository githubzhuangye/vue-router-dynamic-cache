<template>
    <div class="container border-box">
        <div class="header-box row-between bg-white pv10 ph20">
            <div
                class="icon-back"
                @click="handleNavBack"
            ></div>
            <div class="title">永不销毁页面</div>
            <div class="btn-box"></div>
        </div>

        <div class="ps-box">
            <div class="intro">此路由页面组件将在程序运行期间，常驻内存不销毁，重新进入不重新加载。</div> 
            <div class="ps">（验证方式：评论内容默认为空，首次进入或重新加载，那么评论内容为空，输出内容之后，如果再次进入，评论内容依旧存在，那么说明没被销毁）</div> 
        </div>

        <div class="back-btn-box">
            <img
                class="title-img"
                src="./assets/images/other-router.png"
            />
            <div 
                class="btn-cell row"
                @click="handleBackList"
            >
                <img
                    class="icon"
                    src="./assets/images/icon-nav.png" 
                    alt="">
                <span>返回新闻列表</span>
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

<script setup name="NoDestroy">
import { ref, onMounted } from 'vue';
import { ROUTER_CACHE_CONSTANTS } from 'vue-router-dynamic-cache';
import { useRouter } from 'vue-router';
const router = useRouter();

let comment = ref('');

// 返回
const handleNavBack = () => {
    router.back();
}

// 跳转到网点详情
const handleBackList = () => {
    router.push({
        name: 'NewsList',
        hash: ROUTER_CACHE_CONSTANTS.KEY.ROUTER_ALIVE_HASH_PUSH,
    });
};

onMounted(() => {});
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
    
    .ps-box {
        padding: 20px 24px;
    }

    .ps-box .intro {
        font-size: 16px;
        color: #222;
    }

    .ps-box .ps {
        font-size: 14px;
        color: #50E3C2;
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

    .back-btn-box {
        margin-top: 50px;
        padding: 10px 0;
    }

    .back-btn-box .title-img {
        width: 100%;
        height: 120px;
        object-fit: cover;
    }

    .back-btn-box .btn-cell {
        position: relative;
        padding: 8px 24px;
        color: #fff;
        background-color: #50E3C2;
        border-bottom: 1px solid #dedede;
        font-weight: 500;
    }
    .back-btn-box .btn-cell .icon {
        width: 24px;
        height: 24px;
        margin-right: 6px;
    }

    .back-btn-box .btn-cell::after {
        position: absolute;
        top: 10px;
        right: 24px;
        width: 10px;
        height: 10px;
        content: '';
        border-right: 2px solid #fff;
        border-top: 2px solid #fff;
        transform: rotate(45deg);
    }
</style>