import { createApp } from 'vue'
import stores from './stores'
import routes from './routes'
import i18n from './i18n'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import '@icon-space/vue-next/styles/index.css'
const app = createApp(App)


app.use(stores)
app.use(routes)
app.use(i18n)

app.mount('body')
