<template>
    <div>111</div>
</template>

<script setup lang="ts">
    // 封装的vue插件在此处使用
    import { ref, getCurrentInstance } from "vue"
    const instance = getCurrentInstance()
    instance?.proxy?.$Loadings.show()

    setTimeout(() => {
        instance?.proxy?.$Loadings.hidden()
    }, 2000)
</script>

<style scoped>

</style>
