<template>
    <div>
        <input type="text" v-model='form.name'>
        <input type="text" v-model='form.age'>
        <button @click="submit">提交</button>

        <ul>
            <li v-for="item in arr.list" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import { reactive, readonly, shallowReactive } from "vue"
    //1、只能写引用数据类型
    let form = reactive({
        name: '张三',
        age:" 18"
    })
    const submit = () => {
        console.log(form)
    }

    // 2、渲染数组
    type IArr = {
        list: Array<string>
    }
    let arr = reactive<IArr>({
        list: []
    })
    setTimeout(() => {
        arr.list = ['1', '2', '3']
        console.log(arr.list)
    }, 1000)

    // 3、shallowRef浅层次的

</script>

<style scoped>

</style>
