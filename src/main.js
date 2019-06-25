import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Menu, MenuItem, Submenu,MenuItemGroup} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';
import './assets/css/iview-index.less'
import './assets/css/main.less'
import i18n from './locale'
Vue.use(iView, {
    transfer: true,
    i18n: (key, value) => i18n.t(key, value)
})

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);




Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
