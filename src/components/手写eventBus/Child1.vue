<template>
    child1  <button @click="test">传值</button>
</template>

<script lang="ts" setup>
    //@ts-ignore
    import Bus from "./Bus.ts"

    import { ref, onMounted } from "vue"
    onMounted(() => {
        Bus.emit("data", "要传到Child2组件里面的值")
    })

    const test = () => {
        Bus.emit("data2", "1", "2", "3")
    }
</script>

<style scoped>

</style>
