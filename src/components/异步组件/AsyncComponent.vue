<template>
    <Suspense>
        <template #default>
            <Son></Son>
        </template>
        <template #fallback>
            <div>加载中</div>
        </template>
    </Suspense>
</template>

<script setup lang="ts">
    import { defineAsyncComponent } from "vue"
    // @ts-ignore
    const Son = defineAsyncComponent(() => import("./Son.vue"))
</script>

<style scoped>

</style>
