import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/views/HelloWorld';

Vue.use(Router);

const router = new Router({
  mode: 'history', // 访问路径不带井号  需要使用 history模式，才能使用 scrollBehavior
  routes: [
    {
      path: '/count',
      name: 'count',
      component: resolve => require(['@/views/count'], resolve) // 使用懒加载
    },
    {
      path: '/count2',
      name: 'count2',
      component: resolve => require(['@/views/count2'], resolve) // 使用懒加载
    },
    {
      path: '/count3',
      name: 'count3',
      component: resolve => require(['@/views/count3'], resolve) // 使用懒加载
    },
    {
      path: '/count4',
      name: 'count4',
      component: resolve => require(['@/views/count4'], resolve) // 使用懒加载
    },
    {
      path: '/count5',
      name: 'count5',
      component: resolve => require(['@/views/count5'], resolve) // 使用懒加载
    },
    {
      path: '/count6',
      name: 'count6',
      component: resolve => require(['@/views/count6'], resolve) // 使用懒加载
    },
    {
      path: '/count7',
      name: 'count7',
      component: resolve => require(['@/views/count7'], resolve) // 使用懒加载
    }
  ]
});
export default router;