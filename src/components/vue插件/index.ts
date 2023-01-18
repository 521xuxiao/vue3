/**
 *
 *    index.vue 是业务组件
 *    index.ts  是封装vue插件的ts文件
 *    plugins   是被封装的组件， 利用ts文件挂在vue实例对象上，让每个组件使用
 *
 */



import type { App, VNode } from "vue"
import { createVNode, render } from "vue"  // vue包里面的 createVNode 将plugins组件转换成 虚拟dom
//@ts-ignore
import Loading from "./Plugins.vue"
export default {
    // install方法会在main.ts中使用vue.use()的时候自动调用install方法
    install(app: App) {
        const Vnode: VNode = createVNode(Loading)  // 将引进来的Loading 组件转换成虚拟dom

        render(Vnode, document.body)  // 利用render函数将虚拟dom挂在到 body标签上；挂在到dom上之前， Vnode里面的component属性是个null

        app.config.globalProperties.$Loadings = {  // 拿到自己封装的插件里面的属性和方法挂在到vue实例上，让所有的组件都可以使用
            show: Vnode.component?.exposed?.show,
            hidden: Vnode.component?.exposed?.hidden
        }
    }
}
