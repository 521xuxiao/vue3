<template>
    child2
</template>

<script lang="ts" setup>
    //@ts-ignore
    import Bus from "./Bus.ts"
    import { ref, onMounted } from "vue"

    Bus.on("data", (val: string) =>{
        console.log(val)
    })

    onMounted(() => {
        console.log(Bus.on("data2", (...args: Array<any>) =>{
            console.log(args)
        }))
    })
</script>

<style scoped>

</style>
