<template>
    <!--  自定义指令的生命钩子  -->
    <div v-move:aaa.xiaoman="{ background: 'red' }" class="card"></div>


    <!--  按钮级别的权限例子  -->
    <br /> <br />
    <button v-has-menu="'deletes'">删除</button>
    <button v-has-menu="'update'">修改</button>
    <button v-has-menu="'add'">新增</button>

    <!--  自定义指令实现拖拽功能  -->
    <br /> <br />
    <div class="dialog" v-dialog-move>
        <div class="header"></div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, Directive, DirectiveBinding } from "vue"

    // 自定义指令的生命钩子
    const vMove: Directive = {
        created() {},
        beforeMount() {},
        mounted(el: HTMLElement, binding: DirectiveBinding) {
            el.style.background = binding.value.background
        },
        beforeUpdate() {},
        updated() {},
        beforeUnmount() {},
        unmounted() {},
    }

    // 自定义指令动态控制页面的按钮权限
    const menuList = ['add', 'update']  // 模拟后台返回的数据
    const vHasMenu: Directive = (el: HTMLElement, binding: DirectiveBinding) => {  // 直接方法相当于是自定义指令里面的 updated 和 mounted
        if(!menuList.includes(binding.value)) {
            el.style.display = "none"
        }
    }

    // 自定义指令实现拖拽功能
    const vDialogMove = (el: HTMLElement, binding: DirectiveBinding): void => {

        // 获取头部元素
        const firstChild: HTMLDivElement = el.firstElementChild as HTMLDivElement

        // 鼠标按下事件
        const dialogMouseDown = (e: MouseEvent) => {
            let x = e.clientX - el.offsetLeft
            let y = e.clientY - el.offsetTop
            // 鼠标移动事件
            const dialogMouseMove = (e: MouseEvent) => {
                el.style.left = e.clientX - x + 'px'
                el.style.top = e.clientY - y + 'px'
            }
            document.addEventListener("mousemove", dialogMouseMove)
            // 鼠标抬起的时候清空移动事件
            document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", dialogMouseMove)
            })
        }

        firstChild.addEventListener("mousedown", dialogMouseDown)
    }
</script>

<style scoped>
    .card{
        width: 100px;
        height: 100px;
        border: 1px solid #333;
    }

    .dialog{
        position: absolute;
        width: 700px;
        height: 500px;
        border: 1px solid #333;
    }
    .header{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 60px;
        background: #999;
        cursor: move;
    }
</style>
