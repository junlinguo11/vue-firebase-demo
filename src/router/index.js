import Vue from 'vue';
import Router from 'vue-router';
import ViewEmployees from '@/components/ViewEmployees';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ViewEmployees',
      component: ViewEmployees,
    },
  ],
});
