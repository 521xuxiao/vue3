<template>
    <div>
        <button @click="watchs">监听</button>
    </div>
</template>

<script lang="ts" setup>
    import { ref, watch } from "vue"
    import { useRouter } from "vue-router"
    const router = useRouter()
    // 1、监听单个字段
    let name = ref("张三")
    watch(name, (val) => {
        console.log(val)
    })
    const watchs = () => {
        name.value = "李四"

        obj.value.name = "李四"
    }

    // 监听对象
    let obj = ref({name: '张三'})
    watch(() => obj.value.name, (val) => {
        console.log(val)
    })

    // 深度监听和懒监听
    watch(name, (val) => {
        console.log(val)
    }, {deep: true, immediate: true})

    // 监听路由
    watch(() => router.currentRoute.value, (val) => {
        console.log(val)
    })
</script>

<style scoped>

</style>
