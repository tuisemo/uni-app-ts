import Vue from 'vue'
import App from './App.vue'
import Filters from '@/filters/index'

Vue.config.productionTip = false
Vue.use(Filters)

new App().$mount()
