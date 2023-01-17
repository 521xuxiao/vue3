<template>
    <div>
        <transition enter-active-class="animate__animated animate__tada" leave-active-class="animate__animated animate__backOutDown">
            <div class="box" v-if="isShow"></div>
        </transition>
        <button @click="change">单个动画</button>
    </div>

    <div>测试 transition-group </div>
    <div class="content">
        <transition-group enter-active-class="animate__animated animate__tada" leave-active-class="animate__animated animate__flipOutX" appear appear-active-class="animate__animated animate__tada">
            <div v-for="item in list" :key="item" class="div"> {{item}}</div>
        </transition-group>
    </div>
    <button @click="changeNumber(true)">增加</button>
    <button @click="changeNumber(false)">减少</button>
</template>

<script setup lang="ts">
    import { ref, reactive } from "vue"

    import "animate.css"

    let isShow = ref(true)
    const change = () => {
        isShow.value = !isShow.value
    }

    ////

    let list = reactive<Array<number>>([1,2,3,4,5,6,7,8,9,10,11])
    const changeNumber = (flag: boolean):void =>  {
        flag ? list.push(list.length + 1) : list.shift()
    }
</script>

<style scoped>
    .box{
        width: 200px;
        height: 200px;
        background: #535bf2;
    }

    .content{
        display: flex;
    }
    .div{
        margin: 10px;
        border: 1px solid #333;
        padding: 3px 8px;
    }
</style>
