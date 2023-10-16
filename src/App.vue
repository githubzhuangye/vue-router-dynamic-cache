<template>
    <router-view v-slot="{ Component }">
        <keep-alive 
            :include="$store.state.dynamicCacheRouter.aliveInclude.join(',')"
            :exclude="$store.state.dynamicCacheRouter.aliveExclude.join(',')"
            :max="10"
        >
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<script setup>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body,
div,
span,
p,
form,
input,
label {
    margin: 0;
    padding: 0;
}

/*
 * 基础的通用样式
 */

/****** flex布局 ******/
.flex1 {
    flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
}

.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.row-center {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.row-end {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}

.row-between {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.row-around {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.column-center {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.column-end {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    justify-content: flex-end;
}

.column-around {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    justify-content: space-around;
}

.column-between {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.align-start {
    align-items: flex-start;
}

.align-center {
    align-items: center;
}

.align-end {
    align-items: flex-end;
}

.align-stretch {
    align-items: stretch;
}

.justify-center {
    justify-content: center;
}

.flex-wrap {
    flex-wrap: wrap;
}

.round {
    border-radius: 50%;
}


/****** 悬浮框 ******/
.float-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
}

.fixed {
    position: fixed;
    top: 0;
    left: 0;
}

.fixed-bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999;
}

/****** 行数隐藏 *******/
.line-one {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
}

.line-two {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.line-three {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

/****** 显示隐藏 ******/
.hide {
    display: none;
}

.relative {
    position: relative;
}

.border-box {
    box-sizing: border-box;
}


.bg-white {
    background-color: #FFFFFF;
}

.bg-primary {
    background-color: #50E3C2;
}

.bg-page {
    background-color: #FFFFFF;
}

.bg-gray {
    background-color: #E6E6E6;
}

/*******内容为空********/
.empty {
    width: 100%;
    padding-top: 280px;
    text-align: center;
    font-size: 16px;
    color: #666666;
    margin-bottom: 50px;
}


.tes:after {
    content: ' ';
    display: inline-block;
    height: 6px; /*height、width控制箭头大小*/
    width: 6px;
    border-width: 1px 1px 0 0;
    border-color: #666666;
    border-style: solid;
    -webkit-transform: matrix(-0.71, 0.71, 0.71, 0.71, 2, -1);
    /*前面四个参数控制箭头方向 最后两个参数分别控制距离左侧的距离 距离上侧的距离*/
    transform: matrix(0.71, -0.71, -0.71, -0.71, 2, -1);
}

/******* 宽 高 ******/
.m-h-100 {
    min-height: 100%;
}

.w-100 {
    width: 100%;
}

/****** 外边距 ******/
.mh10 {
    margin-left: 10px;
    margin-right: 10px;
}

.mh20 {
    margin-left: 20px;
    margin-right: 20px;
}

.mh32 {
    margin-left: 32px;
    margin-right: 32px;
}

.mv10 {
    margin-top: 10px;
    margin-bottom: 10px;
}

.mv20 {
    margin-top: 20px;
    margin-bottom: 20px;
}

.mv30 {
    margin-top: 30px;
    margin-bottom: 20px;
}

.mr10 {
    margin-right: 10px;
}

.mr20 {
    margin-right: 20px;
}

.mr30 {
    margin-right: 30px;
}

.mr32 {
    margin-right: 32px;
}

.ml10 {
    margin-left: 10px;
}

.ml20 {
    margin-left: 20px;
}

.ml30 {
    margin-left: 30px;
}

.ml32 {
    margin-left: 32px;
}

.mt10 {
    margin-top: 10px;
}

.mt20 {
    margin-top: 20px;
}

.mt30 {
    margin-top: 30px;
}

.mb10 {
    margin-bottom: 10px;
}

.mb20 {
    margin-bottom: 20px;
}

.mb30 {
    margin-bottom: 30px;
}

/****** 内边距 ******/
.ph10 {
    padding-left: 10px;
    padding-right: 10px;
}

.ph20 {
    padding-left: 20px;
    padding-right: 20px;
}

.ph30 {
    padding-left: 30px;
    padding-right: 30px;
}

.ph32 {
    padding-left: 32px;
    padding-right: 32px;
}

.pv10 {
    padding-top: 10px;
    padding-bottom: 10px;
}

.pv20 {
    padding-top: 20px;
    padding-bottom: 20px;
}

.pv30 {
    padding-top: 30px;
    padding-bottom: 30px;
}

.pl10 {
    padding-left: 10px;
}

.pl20 {
    padding-left: 20px;
}

.pl32 {
    padding-left: 32px;
}

.pr10 {
    padding-right: 10px;
}

.pr20 {
    padding-right: 20px;
}

.pr32 {
    padding-right: 32px;
}

.pt10 {
    padding-top: 10px;
}

.pt20 {
    padding-top: 20px;
}

.pt30 {
    padding-top: 30px;
}

.pb10 {
    padding-bottom: 10px;
}

.pb20 {
    padding-bottom: 20px;
}

.pb30 {
    padding-bottom: 30px;
}

.p32 {
    padding: 32px;
}

.center {
    text-align: center;
}

.button {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #50E3C2;
    color: #FFFFFF;
    font-size: 14px;
    border-radius: 10px;
    border: none;
}

.button::after {
    border: none;
}

.button:focus {
    border: 0 none;
    outline: none;
}

/****** 背景颜色 ******/
.b-page {
    background-color: #FFFFFF;
}

.b-white {
    background-color: #FFFFFF;
}

.b-primary {
    background-color: #50E3C2;
}


.input {
    border: none;
}

input:focus {
    outline: none;
}


.van-button--primary {
    background-color: #50E3C2 !important;
    border: 1px solid #50E3C2 !important;
}

.van-toast {
    background: rgba(0, 0, 0, 0.4) !important;
}
</style>
