import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import { ValidationProvider, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import Axios from "axios";
import store from "./store";

Vue.use(Buefy);
Vue.use(Vuex);
Vue.component("ValidationProvider", ValidationProvider);
Vue.config.productionTip = false;

Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

extend(
  "email",
  { ...email, message: "Please use a valid E-Mail Adress" },
  "required",
  {
    ...required,
    message: "This field is required"
  }
);

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");
