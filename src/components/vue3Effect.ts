

// 副作用函数
let activeEffect: () => void
export const effect = (fn: Function) => {
    const _effect = function() {
        activeEffect = _effect
        fn()
    }

    _effect()
}


// 收集依赖
const targetMap = new WeakMap()
export const track = (target: object, key: string) => {
    let depsMap = targetMap.get(target)
    if(!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }

    let deps = depsMap.get(key)
    if(!deps) {
        deps = new Set()
        depsMap.set(key, deps)

    }

    deps.add(activeEffect)
}

// 更新依赖
// @ts-ignore
export const trigger = (target, key: string | symbol) => {
    const depsMap = target.get(target)
    const deps  = depsMap.get(key)
    deps.forEach((effect: () => any) => effect())
}
