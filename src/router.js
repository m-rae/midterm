import VueRouter from 'vue-router';
import loginPage from './components/pages/login-page/login-page.component.vue';
import dashboardPage from './components/pages/dashboard-page/dashboard-page.component.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: loginPage
    },
    {
      path: '/dashboard',
      component: dashboardPage
    }
  ]
});

export default router;