<template>
    <button @click="emitsData">mitt传值</button>
</template>

<script lang="ts" setup>
    import { getCurrentInstance } from "vue"
    const instance = getCurrentInstance()
    const emitsData = () => {
        // @ts-ignore
        instance?.proxy?.$Bus.emit("data", "要传过去的值")
    }
</script>

<style scoped>

</style>
