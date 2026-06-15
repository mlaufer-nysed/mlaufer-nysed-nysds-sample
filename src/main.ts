import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@nysds/styles'
import '@nysds/components'

const app = createApp(App)

app.use(router)

app.mount('#app')
