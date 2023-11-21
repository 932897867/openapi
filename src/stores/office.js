import { defineStore } from 'pinia'

export const officeStore = defineStore('main', {
  state: () => ({
    counter: 0,
    users: [{
      id: 0,
      name: 'yq'
    }, {
      id: 1,
      name: 'zs'
    }]
  }),
  getters: {
    // 自动将返回类型推断为数字
    doubleCount(state) {
      return state.counter * 2
    },
    // 返回类型必须明确设置
    doublePlusOne() {
      return this.counter * 2 + 1
    },
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
})