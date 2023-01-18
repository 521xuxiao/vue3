import { createApp } from 'vue'
// import './style.css'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import router from "./router/index.ts"

// @ts-ignore
import Loading from "./components/vue插件/index.ts"


const arr = createApp(App)
arr.use(router)
arr.use(Loading)

// 引入mitt，注册到vue实例上
import Mitt from "mitt"
const Mit = Mitt()
// ts中需要对 mitt 声明文件
type Loadings = {
    show: () => void,
    hidden: () => void
}
declare module "@vue/runtime-core" {
    export interface ComponentCustomProperties{
        $Bus: typeof Mit,
        $dataStr: string,
        $Loadings: Loadings
    }
}
// mitt往vue实例挂在（vue3写法）
arr.config.globalProperties.$Bus = Mit

arr.config.globalProperties.$dataStr = "这是全局变量"

arr.mount('#app')
