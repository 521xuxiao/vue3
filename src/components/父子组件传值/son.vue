<template>
    <div>{{msg}}  --  {{obj.name}}  --   {{defaultValue}}</div>
    <button @click="giveDataToFather">子组件给父组件传值</button>
</template>

<script lang="ts" setup>
    // 1、子组件接受父组件传过来的值
    type IObj = {
        name: string,
        age: number
    }
    const props = withDefaults(defineProps<{
        msg: string,
        obj: IObj,
        defaultValue: string
    }>(), {
        msg: '默认值',
        obj: () => ({name: '111', age: 0}),
        defaultValue: "ts中的默认值"
    })

    console.log(props.msg, props.obj?.name)

    // 2、子组件给父组件传值
    // const emit = defineEmits(['test1'])
    const emit = defineEmits<{
        (e: 'test1', name: string):void
    }>()
    const giveDataToFather = () => {
        emit('test1', "要传给父的值")
    }
</script>

<style scoped>

</style>
