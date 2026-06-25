import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@nysds/styles'
import '@nysds/components'

import { registerIconLibrary } from '@nysds/components'

registerIconLibrary('default', {
  resolver: (name) => `/mlaufer-nysed-nysds-sample/assets/icons/${name}.svg`,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
