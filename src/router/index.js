import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
import SignIn from "../views/SignIn.vue";

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
