import Vue from "vue";
import VueRouter from "vue-router";
import Router from "vue-router";
import Welcome from "../views/Welcome.vue";
import SignIn from "../views/SignIn.vue";
import store from "../store.js";
import Secure from "../views/SelectItems.vue";
import Catwalk from "../views/Catwalk.vue";
import CreateOutfit from "../views/CreateOutfit.vue";
import Items from "@/views/Items";
import Outfits from "@/views/Outfits";

Vue.use(Router);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    meta: {
      hasUserCode: true
    }
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/select-items",
    name: "select-items",
    component: Secure,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/catwalk",
    name: "catwalk",
    component: Catwalk,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/create-outfit",
    name: "create-outfit",
    component: CreateOutfit,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/items",
    name: "items",
    component: Items,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/outfits",
    name: "outfits",
    component: Outfits,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // Check if User is logged in
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default router;
