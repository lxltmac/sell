// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from 'components/goods/goods.vue'
import ratings from 'components/ratings/ratings.vue'
import seller from 'components/seller/seller.vue'

import 'common/stylus/index.styl'

Vue.use(VueRouter)
const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
]
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

/*eslint-disable*/
const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
router.push('/goods')


