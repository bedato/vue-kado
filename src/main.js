import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import { ValidationProvider, extend } from "vee-validate";
import { required, email } from 'vee-validate/dist/rules';
// Add a rule.
extend("email", {...email, message: "Please use a valid E-Mail Adress"}, "required", {
  ...required,
  message: "This field is required"
});

Vue.use(Buefy);
Vue.component("ValidationProvider", ValidationProvider);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
