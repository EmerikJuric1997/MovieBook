import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Firebase from "firebase/compat/app";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/movies',
    name: 'movies',
    component: () => import('../views/MovieView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/movies/:id',
    name: 'MovieDetails',
    component: () => import('../components/MovieDetails'),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
  path: '/:catchAll(.*)',
  redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
   next('/login');
   alert("You must be logged in!")
  } else if (requiresAuth && currentUser) {
   next();
  } else {
   next();
  }
  });



export default router;
