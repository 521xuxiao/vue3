import { track, trigger } from "./vue3Effect"

export const vue3Reactive = <T extends object>(target: T) => {
    return new Proxy(target, {
        get(target, key, receiver) {
            let res = Reflect.get(target, key, receiver)
            // @ts-ignore
            track(target, key)  // 收集依赖
            return res
        },
        set(target, key, value, receiver) {
            let res = Reflect.set(target, key, value, receiver)
            trigger(target, key)  // 更新依赖
            return res
        }
    })
}
