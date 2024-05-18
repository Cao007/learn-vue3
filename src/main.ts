// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import * as AllComponents from './components/index'
// import router from './router'

const app = createApp(App)
for (const [key,component] of Object.entries(AllComponents)) {
    app.component(key, component)
}

app.use(createPinia())
// app.use(router)

app.mount('#app')
