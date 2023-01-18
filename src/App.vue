<template>
<!--    ref系列: <refTest></refTest>-->
<!--    <hr />-->
<!--    reactive系列: <ReactiveTest></ReactiveTest>-->

<!--    <hr />-->
<!--    to系列： <ToTest></ToTest>-->

<!--    <hr />-->
<!--    vue3响应式原理：-->
<!--    <Test></Test>-->

<!--    <hr />-->
<!--    computed计算属性：-->
<!--    <Computeds></Computeds>-->

<!--    <hr />-->
<!--    watch监听：-->
<!--    <Watchs></Watchs>-->

<!--    <hr />-->
<!--    生命周期：-->
<!--    <LifeCycle></LifeCycle>-->

<!--    <hr />-->
<!--    父子组件的传值：-->
<!--    <Father></Father>-->

<!--    <hr />-->
<!--    瀑布流布局：-->
<!--    <Full></Full>-->

<!--    <hr />-->
<!--    插槽：-->
<!--    <Slots></Slots>-->

<!--    <hr />-->
<!--    异步组件（代码分割）：-->
<!--    <AsyncComponent></AsyncComponent>-->

<!--    <hr />-->
<!--    transition动画：-->
<!--    <Transitions></Transitions>-->

<!--    <hr />-->
<!--    provide 和 inject：-->
<!--    <ProvideInject></ProvideInject>-->

<!--    <hr />-->
<!--    手写eventBus：-->
<!--    <EventBus></EventBus>-->

<!--    <hr />-->
<!--    mitt使用：-->
<!--    <Mitt></Mitt>-->

<!--    <hr />-->
<!--    vModel父子之间的双向绑定:-->
<!--    <VModel></VModel>-->

<!--    <hr />-->
<!--    自定义指令:-->
<!--    <Directives></Directives>-->

    <hr />
    全局变量:
    <Gloable></Gloable>

    <hr />
    vue插件（vue.use()）:
    <plugins></plugins>
</template>

<script setup lang="ts">
    // @ts-ignore
    import refTest from "./components/Ref.vue"
    // @ts-ignore
    import ReactiveTest from "./components/Reactive.vue"
    // @ts-ignore
    import ToTest from "./components/To.vue"
    // @ts-ignore
    import Test from "./components/vue3响应式.vue"
    // @ts-ignore
    import Computeds from "./components/Computeds.vue"
    // @ts-ignore
    import Watchs from "./components/Watchs.vue"
    // @ts-ignore
    import LifeCycle from "./components/LifeCycle.vue"
    // @ts-ignore
    import Father from "./components/父子组件传值/Father.vue"
    // @ts-ignore
    import Full from "./components/瀑布流/Full.vue"
    // @ts-ignore
    import Slots from "./components/插槽/Slots.vue"
    // @ts-ignore
    import AsyncComponent from "./components/异步组件/AsyncComponent.vue"
    // @ts-ignore
    import Transitions from "./components/动画/Transitions.vue"
    // @ts-ignore
    import ProvideInject from "./components/provideInject/ProvideInject.vue"
    // @ts-ignore
    import EventBus from "./components/手写eventBus/Father.vue"
    // @ts-ignore
    import Mitt from "./components/mitt使用/Father.vue"
    // @ts-ignore
    import VModel from "./components/vModel使用/Father.vue"
    // @ts-ignore
    import Directives from "./components/自定义指令/Directive.vue"
    // @ts-ignore
    import Gloable from "./components/全局变量/Index.vue"
    // @ts-ignore
    import plugins from "./components/vue插件/Index.vue"
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
</style>
