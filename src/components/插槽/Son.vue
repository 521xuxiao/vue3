<template>
    <header class="header">
        <slot name="header"></slot>
    </header>
    <main class="main">
        <div v-for="(item, index) in data" :key="index">
            <slot :dataList="item"></slot>
        </div>
    </main>
    <footer class="footer">
        <slot name="footer"></slot>
        <slot :dataList="data" name="xuxiao" :msg="msg"></slot>
    </footer>
</template>

<script setup lang="ts">
    import { reactive, ref } from "vue"
    type TData = {
        name: string,
        age: number
    }
    let data = reactive<Array<TData>>([
        { name: '张三', age: 18 },
        { name: '李四', age: 18 },
        { name: '王五', age: 18 },
        { name: '赵六', age: 18 },
        { name: '孙七', age: 18 },
        { name: '王八', age: 18 }
    ])

    let msg = ref<string>("张三123")
</script>

<style scoped>
    .header{
        height: 300px;
        background: #535bf2;
    }
    .main{
        height: 300px;
        background: red;
    }
    .footer{
        height: 300px;
        background: orange;
    }
</style>
