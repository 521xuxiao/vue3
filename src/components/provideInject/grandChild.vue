<template>
    <div>孙子: {{data}}</div>
</template>

<script lang="ts" setup>
    import { inject, Ref } from "vue"
    let data = inject<Ref<string>>("data")
    console.log(data?.value)
</script>

<style scoped>

</style>
