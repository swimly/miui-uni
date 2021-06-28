import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import Utils from './utils/index.js'
Vue.prototype.$utils = Utils
App.mpType = 'app'
import HCUI from './index.js'
Vue.use(HCUI)

const app = new Vue({
    ...App
})
app.$mount()
