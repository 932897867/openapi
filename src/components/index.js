// 注意 有些组件使用异步加载会有影响
// app.component('open-icon', () => import('./open-icon/index.vue'))
// Vue.component('open-icon-svg', () => import('./open-icon-svg/index.vue'))
// Vue.component('open-icon-select', () => import('./open-icon-select/index.vue'))
// Vue.component('open-icon-svg-select', () => import('./open-icon-svg-select/index.vue'))


// 全局组件
import openIcon from './open-icon/index.vue'

let components = {
  openIcon
}

const globalComponents = {
  install(App, options) {
    console.log(options)

    // 全局组件
    Object.keys(components).forEach((key) => {
      App.component(key, components[key])
    })
  }
}

export default globalComponents