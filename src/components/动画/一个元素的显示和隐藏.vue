<template>
    <div>
        <transition name="fade">
            <div class="box" v-if="isShow"></div>
        </transition>
        <button @click="change">单个动画</button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue"
    let isShow = ref(true)
    const change = () => {
        isShow.value = !isShow.value
    }
</script>

<style scoped>
    .box{
        width: 200px;
        height: 200px;
        background: #535bf2;
    }
    .fade-enter-from{
        width: 0;
        height: 0;
    }
    .fade-enter-active{
        transition: all 1.5s ease;
    }
    .fade-leave-active{
        transition: all 1.5s ease;
    }
    .fade-leave-to{
        width: 0;
        height: 0;
    }
</style>
