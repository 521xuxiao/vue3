<template>
    <button @click="dialogIsShow = !dialogIsShow">开关  --   {{text}}</button>
    <Child v-model="dialogIsShow" v-model:text="text"></Child>
</template>

<script lang="ts" setup>
    // @ts-ignore
    import Child from "./Child.vue"

    import { ref } from "vue"
    let dialogIsShow = ref<boolean>(false)
    let text = ref<string>("")
</script>

<style scoped>

</style>
