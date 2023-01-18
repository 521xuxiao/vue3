<template>
    <div v-if="isShow" class="div">加载中...</div>
</template>

<script lang="ts" setup>
    import { ref, defineExpose } from "vue"
    let isShow = ref<boolean>(false)

    const show = () => isShow.value = true
    const hidden = () => isShow.value = false

    defineExpose({
        show,
        hidden
    })
</script>

<style scoped>
.div{
    height: 100vh;
    background: #999;
    opacity: .8;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;
    color: #000;
    line-height: 100vh;
}
</style>
