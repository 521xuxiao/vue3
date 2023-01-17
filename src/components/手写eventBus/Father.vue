<template>
    手写一个eventBus来实现兄弟之间的传值： 原理是js的设计模式：发布订阅模式；有一个调度中心
    <Child1></Child1>
    <Child2></Child2>
</template>

<script lang="ts" setup>
    // @ts-ignore
    import Child1 from "./Child1.vue"
    // @ts-ignore
    import Child2 from "./Child2.vue"
</script>

<style scoped>

</style>
