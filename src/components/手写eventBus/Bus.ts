

// @ts-ignore
type BusClass = {
    emit: (name: string) => void
    on: (name: string, fn: Function) => void
}

type List = {
    [key: string | number | symbol]: Array<Function>
}

class Bus implements BusClass {

    list: List   // list是一个对象， key就是使用的时候使用者起得名字，值就是数组

    // 调度中心
    constructor() {
        this.list = {}
    }


    emit(name: string, ...args:Array<any>): void {
        console.log(this.list)
        let eventName: Array<Function> = this.list[name]
        eventName.forEach(fn => {
            fn.apply(this, args)
        })
    }

    on(name: string, callback: Function): void {
        let fn: Array<Function> = this.list[name] || []
        fn.push(callback)
        this.list[name] = fn
    }

}

export default new Bus();
