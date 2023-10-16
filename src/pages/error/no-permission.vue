<template>
    <div class="container">
        <div class="header-box row-between bg-white pv10 ph20">
            <div
                class="icon-back"
                @click="handleNavBack"
            ></div>
            <div class="title">暂无权限</div>
            <div class="btn-box"></div>
        </div>
        <div class="body-box column-center">
            <img
                fit="cover"
                class="img-404"
                src="./assets/images/no-permission.png"
            />
            <span class="tip">暂无权限访问！</span>
        </div>
    </div>
</template>

<script setup name="NoPermission">
import { useRouter, useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();

const handleNavBack = () => {
    router.back();
}


</script>

<style scoped>
    .container {
        min-height: 100vh;
        max-height: 100vh;
        overflow: hidden;
        background-image: linear-gradient(to bottom, #fff 50%, #DCF7F0, #50E3C2);
    }

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

    .body-box {
        color: #50E3C2;
        font-size: 36px;
        font-weight: 600;
        text-align: center;
        padding-top: 200px;
    }

    .body-box .img-404 {
        width: 60VW;
        height: 200px;
        text-align: center;
    }

    .body-box .tip {
        padding-top: 40px;
    }
</style>
