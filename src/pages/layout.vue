<template>
    <div class="layout-container">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>
<script>
export default {
    name: 'Layout',
};
</script>
<script setup>
</script>

<style lang="less" scoped></style>
