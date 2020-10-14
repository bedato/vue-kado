import Vue from "vue";
import VueRouter from "vue-router";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
import SignIn from "../views/SignIn.vue";
import store from "../store.js";
import Secure from "../views/Secure.vue";

Vue.use(Router);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/secure",
    name: "secure",
    component: Secure,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/welcome");
  } else {
    next();
  }
});

export default router;
