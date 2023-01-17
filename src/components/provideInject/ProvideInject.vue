<template>
    <Child></Child>
</template>

<script lang="ts" setup>
    // @ts-ignore
    import Child from "./Child.vue"
    import { provide, inject, ref, readonly } from "vue"

    let data = ref("这是数据")
    provide("data", readonly(data))
</script>

<style scoped>

</style>
