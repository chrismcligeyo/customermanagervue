import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import { routes } from "./routes";


Vue.use(VueRouter);
Vue.use(vueResource);

const router = new VueRouter({
  mode: "history",
  routes: routes,
  base: __dirname  //current directory
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
