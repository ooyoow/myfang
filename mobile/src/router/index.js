import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search');
const hourse = r => require.ensure([], () => r(require('../page/hourse/hourse')), 'hourse');
const hourseDetail = r => require.ensure([], () => r(require('../page/hourse/children/hourseDetail')), 'hourseDetail');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        // 二级路由。对应App.vue
        // 地址为空时跳转home页面
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: home
        },
        {
          path: '/search',
          component: search
        },
        {
          path: '/hourse',
          component: hourse,
          children: [{
            path: 'detail', // 房源详情页
            component: hourseDetail
          }]
        }
      ]
    }
  ]
});
