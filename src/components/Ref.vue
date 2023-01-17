<template>
    <div ref="test1">{{obj}}</div>

    <button @click="chang">修改</button>
    <button @click="isRefOk">isRef判断是不是ref对象</button>
</template>

<script lang="ts" setup>
    // ref的使用
    import { ref, isRef, shallowRef, triggerRef, customRef, onMounted } from "vue"
    import type { Ref } from "vue"
    type IObj = {
        name: string
    }
    let obj: Ref<IObj> = ref({name: '小满'})

    const chang = () => {
        obj.value.name = "大满"
    }

    // 1、isRef 判断是不是ref对象
    const isRefOk = () => {
        console.log(isRef(obj))
    }

    // 2、shallowRef 只是浅层次的， ref是深层次的； ref和shallowRef不能同时使用

    // 3、自定ref（customRef）

    // 4、ref获取dom元素
    const test1 = ref()
    onMounted(() => {
        test1.value.style.color = "red"
    })
</script>

<style scoped>

</style>
