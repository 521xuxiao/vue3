<template>
    <Son :msg="msg" :obj="obj" :defaultValue="defaultValue" @test1="test1" ref="son"></Son>
</template>

<script setup lang="ts">
    // @ts-ignore
    import Son from "./son.vue"
    import { ref, reactive } from "vue"
    let msg = ref("123")
    let obj = reactive({
        name: '张三',
        age: 18
    })

    let defaultValue = ref("这个是父组件传给子组件的值，不传就有默认值了")

    const test1 = (val: string):void => {
        console.log(val)
    }

</script>

<style scoped>

</style>
