<template>
    <div>生命周期</div>
</template>

<script setup lang="ts">
    import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue"

    onBeforeMount(() => {
        console.log("onBeforeMount")
    })
    onMounted(() => {
        console.log("onMounted")
    })
    onBeforeUpdate(() => {
        console.log("onBeforeUpdate")
    })
    onUpdated(() => {
        console.log("onUpdated")
    })
    onBeforeUnmount(() => {
        console.log("onBeforeUnmount")
    })
    onUnmounted(() => {
        console.log("onUnmounted")
    })
</script>

<style scoped>

</style>
