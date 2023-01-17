<template>
    <div>孩子： {{data}}</div>
    <GrandChild></GrandChild>
    <button @click="handleClick">改动</button>
</template>

<script lang="ts" setup>
    // @ts-ignore
    import GrandChild from "./GrandChild.vue"

    import { inject, Ref } from "vue"
    let data = inject<Ref<string>>("data")
    console.log(data?.value)

    const handleClick= () => {
        data!.value = "修改值"
    }
</script>

<style scoped>

</style>
