import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import Axios from "axios";
import store from "./store";
import Vuelidate from "vuelidate";

Vue.use(Buefy);
Vue.use(Vuelidate);
Vue.use(Vuex);
Vue.config.productionTip = false;

Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");
