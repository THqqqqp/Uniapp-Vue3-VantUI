import {defineStore} from 'pinia'

// 为一个简单的pinia使用示例
export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++
        }
    }
})
