// src/plugins/elementPlus/index.ts
// 需要全局引入一些组件，如ElScrollbar，不然一些下拉项样式有问题
import { ElLoading, ElScrollbar, ElMessage } from 'element-plus'

const plugins = [ElLoading]

const components = [ElScrollbar]

export const setupElementPlus = (app) => {
  plugins.forEach((plugin) => {
    app.use(plugin)
  })

  components.forEach((component) => {
    app.component(component.name, component)
  })

  const ElMessageCfg = { duration: 2000, customClass: 'globalElMessageStyle' }
  app.config.globalProperties.$ElMessage = (msg) => {
    return ElMessage({ message: msg, ...ElMessageCfg })
  }
  app.config.globalProperties.$ElMessage.success = (msg) => {
    return ElMessage.success({ message: msg, ...ElMessageCfg })
  }
  app.config.globalProperties.$ElMessage.warning = (msg) => {
    return ElMessage.warning({ message: msg, ...ElMessageCfg })
  }
  app.config.globalProperties.$ElMessage.info = (msg) => {
    return ElMessage.info({ message: msg, ...ElMessageCfg })
  }
  app.config.globalProperties.$ElMessage.error = (msg) => {
    return ElMessage.error({ message: msg, ...ElMessageCfg })
  }
}