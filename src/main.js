import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import globalComponents from './components/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ElLoading, ElScrollbar, ElMessage } from 'element-plus'
app.use(ElementPlus)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(globalComponents)
app.use(createPinia())
app.use(router)


// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import 'vuetify/lib/styles/main.sass'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import '@mdi/font/css/materialdesignicons.css'

// const vuetify = createVuetify({
//   ssr: true,
//   components,
//   directives,
// })
// app.use(vuetify)

app.mount('#app')
