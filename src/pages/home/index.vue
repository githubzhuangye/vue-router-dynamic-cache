<template>
    <div class="container">
        <div class="header-box">
            <img
                fit="cover"
                class="img"
                src="../../assets/vue-router.png"
            />
        </div>
        <div class="body-box">
            <div class="row-center title-box pv20">
                <img
                    fit="cover"
                    class="icon icon-left"
                    src="./assets/images/icon-title-left.png"
                />
                <span class="title text-18 t-222 weight6 ph10">工作台</span>
                <img
                    fit="cover"
                    class="icon icon-right"
                    src="./assets/images/icon-title-right.png"
                />
            </div>
            <div class="nav-box ph20">
                <div class="row-between">
                    <div
                        class="nav-item-box"
                        @click="handleNavNewsList"
                    >
                        <img
                            class="icon"
                            fit="fill"
                            src="./assets/images/icon-list.png" 
                            alt="新闻列表"
                        />
                        <div class="name t-white text-12 weight6">新闻列表</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="comment-box fixed-bottom row">
            <input
                class="input-field flex1"
                v-model="comment"
                name="评论"
                placeholder="有值后被清除，证明被刷新"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onActivated } from 'vue';
import { ROUTER_CACHE_CONSTANTS } from 'vue-router-dynamic-cache';
import { useRouter } from 'vue-router';
const router = useRouter();

let comment = ref('');
// 跳转到新闻列表
const handleNavNewsList = () => {
    router.push({
        path: '/news/list',
        hash: ROUTER_CACHE_CONSTANTS.KEY.ROUTER_ALIVE_HASH_PUSH,
    });
};

onActivated(() => {
    console.log('被重新激活了');
});

onMounted(() => {
    console.log('首页：onMounted');
});
</script>

<style scoped>
    .container {
        min-height: 100vh;
        max-height: 100vh;
        overflow: hidden;
        background-image: linear-gradient(to bottom, #fff 50%, #DCF7F0, #50E3C2);
    }

    .header-box {
        height: 248px;
    }
    .header-box .img {
        width: 100%;
        height: 100%;
    }

    .title-box {
        padding: 20px 0;
    }

    .title-box .icon {
        width: 77px;
        height: 9px;
    }

    .nav-box .nav-item-box {
        padding-top: 12px;
        padding-bottom: 12px;
        width: 30%;
        background-color: #50E3C2;
        border-radius: 8px;
        text-align: center;
    }

    .nav-box .nav-item-box .name {
       font-size: 14px;
       font-weight: 500;
       color: #fff;
    }

    .nav-box .nav-item-box .icon {
        width: 46px;
        height: 46px;
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
