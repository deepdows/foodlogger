import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'
import installElementPlus from './plugins/element'

const app = createApp(App)
installElementPlus(app)
app.use(router).use(VueApexCharts).mount('#app')