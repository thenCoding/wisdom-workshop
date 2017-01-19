/**
 * Created by yqj on 2017/1/19.
 */
import Vue from 'vue'
import Router from 'vue-router'
import loginView from '../components/login/login.vue'
import userManagementView from '../components/userManagement/userManagement.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    { path: '/', component: loginView },
    { path: '/login', component: loginView },
    { path: '/userManagement/:page(\\d+)?', component: userManagementView }
  ]
})
