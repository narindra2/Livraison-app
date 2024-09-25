import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Login from '@/views/Auth/Login.vue';
import Signup from '@/views/Auth/Signup.vue';
import ForgetPassWord from '@/views/Auth/ForgetPassWord.vue';
import AddNewPackage from '@/views/Package/AddNewPackage.vue';
import FinalisePackage from '@/views/Package/FinalisePackage.vue';
import DetailPackage from '@/views/Package/DetailPackage.vue';
import { getAuthTokenAccess, isAuthenticated } from '@/services/authService';
const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
  },
  {
    path: '/signup',
    component: Signup,
    name: 'signup',
  },
  {
    path: '/forgetPassword',
    component: ForgetPassWord,
    name: 'forgetPassword',


  },
  {
    path: '/addNewPackage',
    component: AddNewPackage,
    name: 'addNewPackage',

  },
  {
    path: '/finalisePackage',
    component: FinalisePackage

  },
  {
    path: '/detailPackage',
    component: DetailPackage,
    name: 'DetailPackage',
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1',
        name: 'home',
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'notification',
        component: () => import('@/views/Notification.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
/** Redirction if user not authenticade */
/**
 * La documention est ici : https://router.vuejs.org/guide/advanced/navigation-guards.html
 */
router.beforeEach(async (to, from, next) => {
  const isAuth =  isAuthenticated();
  const token =  await getAuthTokenAccess();
  console.log("User authentifie : " + isAuth);
  console.log("User token : " + token);
  let guestRoutes = ["signup" , "forgetPassword"];
  guestRoutes.forEach((guestRoute) => {
    /** If not connected and user tired to acces in route  guest */
    if (to.name == guestRoute && !isAuth) {
      return next();
    }
      /** If  connected and user tired to acces in route  guest */
    if (to.name == guestRoute && isAuth) {
      return next({ name: 'home'})
    }
  });
  /** If not connected and user tired to acces in route not guest */
  if (to.name != 'login' && !isAuth) {
    return next({ name: 'login'})
  }
  /** If not connected and  user tired to acces in route home  */
  if (to.name == 'login' && isAuth) {
    return next({ name: 'home'})
  }
  next()
})
export default router
