import Vue from 'vue';
import Router from 'vue-router';
import CodeGenerator from '@/components/CodeGenerator';
import History from '@/components/History';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/',
      name: 'CodeGenerator',
      component: CodeGenerator
    }
  ]
})
