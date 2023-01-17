<template>
    <div class="wrap" v-if="modelValue">
        <span class="close" @click="handleClose">关闭</span>
        <input type="text" :value="text" @input="changeInput"/>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from "vue"
    const props = defineProps<{
        modelValue: boolean,
        text: string
    }>()

    const emit = defineEmits(['update:modelValue', 'update:text'])

    const handleClose = () => {
        emit("update:modelValue", !props.modelValue)
    }

    const changeInput = (e: Event) => {
        const htmlValue = e.target as HTMLInputElement
        emit("update:text", htmlValue.value)
    }
</script>

<style scoped>
    .wrap{
        height: 200px;
        border: 1px solid #333;
        width: 600px;
        position: relative;
    }
    .close{
        position: absolute;
        right: 10px;
        top: 20px;
        cursor: pointer;
        user-select: none;
    }
</style>
