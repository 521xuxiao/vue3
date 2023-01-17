<template>
    <div class="wrap">
        <div class="items" v-for="(item, index) in waterList" :key="index" :style="{height: item.height + 'px', width: item.width + 'px', background: item.background, left: item.left + 'px', top: item.top + 'px'}"></div>
    </div>

    <div>123</div>
</template>

<script lang="ts" setup>

    import { onMounted, reactive } from "vue"

    let propsValue = defineProps<{
        list: Array<any>
    }>()

    let waterList = reactive<any[]>([])  // 整个元素对象  包含width、height、left、top、background
    let heightList: number[] = []   // 维护一个高度数组
    onMounted(() => {
        const width = 130  // 每个元素的宽度
        const x = document.body.clientWidth  // 可视区域的宽度
        const column = Math.floor(x / width)  // 每一行摆放几个元素

        for (let i = 0; i < propsValue.list.length; i++) {  // 便利所有的元素
            if(i < column) {  // 只找第一行的元素
                // 给第一行的元素设置left和top值
                propsValue.list[i].left = i * width
                propsValue.list[i].top = 20
                waterList.push(propsValue.list[i])
                heightList.push(propsValue.list[i].height)
            }else{  // 第二行开始找
                let current = heightList[0]  // 默认第一个元素是最小的
                let index = 0                // 默认第一个元素是最小的，记录一下索引的位置，方便给元素设置left的值
                heightList.forEach((item, i) => {  // 便利只放了高度的数组
                    if(current > item) {  // 找到后面的元素，要是比前面的元素的高度小的话就换当前元素和索引
                        current = item
                        index = i
                    }
                })

                /**   此时 current 是最小元素的高度， index 是最小元素的索引  **/

                // 找到最小的那个元素，赋值给元素列表的 left 和 top
                propsValue.list[i].top = current + 40
                propsValue.list[i].left = index * width

                // 找到最小元素的位置 加上 原来的已经排放好了的元素
                heightList[index] =  heightList[index] + propsValue.list[i].height + 20

                // 最终放到waterList往页面上渲染
                waterList.push(propsValue.list[i])
            }
        }
    })
</script>

<style scoped>
.wrap{
    position: relative;
}
.wrap .items{
    position: absolute;
    width: 120px
}
</style>
