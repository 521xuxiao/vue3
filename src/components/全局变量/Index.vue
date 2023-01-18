<template>
    {{$dataStr}}
</template>

<script setup lang="ts">
    import { ref, getCurrentInstance } from "vue"

    const instance = getCurrentInstance()
    const str = instance?.proxy?.$dataStr
    console.log(str)
</script>

<style scoped>

</style>
