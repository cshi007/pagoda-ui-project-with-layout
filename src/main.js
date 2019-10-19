import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入element-ui 作为依赖
import ElementUi from 'element-ui'
import PagodaUi from 'pagoda-ui'
import 'pagoda-ui/src/theme/theme1.scss'
import 'pagoda-ui/src/theme/ui-reset.scss'
import './registerServiceWorker'

// 注意：需要在use element-ui 之前 use pagoda-ui
Vue
  .use(PagodaUi)
  .use(ElementUi, { size: 'mini' })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
