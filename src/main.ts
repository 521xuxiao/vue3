import { createApp } from 'vue'
// import './style.css'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import router from "./router/index.ts"


const arr = createApp(App)
arr.use(router)

// 引入mitt，注册到vue实例上
import Mitt from "mitt"
const Mit = Mitt()
// ts中需要对 mitt 声明文件
declare module "vue" {
    export interface ComponentCustomProperties{
        $Bus: typeof Mit
    }
}
// mitt往vue实例挂在（vue3写法）
arr.config.globalProperties.$Bus = Mit

arr.mount('#app')
