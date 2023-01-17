<template>

</template>

<script lang="ts" setup>
    import { getCurrentInstance } from "vue"
    const instance = getCurrentInstance()
    // @ts-ignore
    instance?.proxy?.$Bus.on("data", (val) =>{
        console.log(val)
    })
</script>

<style scoped>

</style>
