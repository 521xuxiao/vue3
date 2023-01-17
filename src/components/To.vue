<template>
    <div>{{obj}}</div>
    <div>{{names}}</div>
    <button @click="change">修改</button>

    <div>{{obj2}}</div>
    <button @click="change2">修改</button>
</template>

<script lang="ts" setup>
    // toRef   toRefs  toRaw

    // 1、toRef只针对响应式的数据有效果，对非响应式的数据没有效果
    import { toRef, reactive } from "vue"
    let obj = reactive({name: '小满'})
    let names = toRef(obj, 'name')
    const change = () => {
        obj.name = "大满"
    }


    // 2、toRefs结构出来的数据具有响应式
    const toRefs = <T extends object>(object: T) => {  // toRefs的源码
        const map: any = {}
        for(let key in object) {
            map[key] = toRef(object, key)
        }
        return map
    }

    let obj2 = reactive({name: '小满', age: 18})
    const change2 = () => {
        let { name, age } = toRefs(obj2)
        name.value = "damain"
    }

    // toRaw 是把响应式的数据变成非响应式的

</script>

<style scoped>

</style>
