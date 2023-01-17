<template>
    <div>
        {{comTest1}}  --  {{handleComputed2}}
        <button @click="handleComputed">计算属性</button>
    </div>
</template>

<script lang="ts" setup>
    import { computed, ref } from "vue"
    let test1 = ref("张三")
    let comTest1 = computed(() => {
        return test1.value + "计算之后拼接的值"
    })

    const handleComputed = () => {
        test1.value = "修改值了哈："
        console.log(comTest1.value)
    }

    // 计算属性另外一种写法
    const handleComputed2 = computed({
        get() {
            return test1.value + ":::"
        },
        set() {
            test1.value + ":::"
        }
    })
</script>

<style scoped>

</style>
