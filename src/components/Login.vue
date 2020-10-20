<template>
  <div>
    <div>
      <h1 class="is-size-3">Login</h1>
      <hr />
    </div>
    <section>
      <b-field
        label="Email"
        :type="{ 'is-danger': emailValidation }"
        :message="{ 'Please select a correct Email': emailValidation }"
      >
        <b-input value="" v-model="email"></b-input>
      </b-field>

      <b-field
        label="Password"
        :type="{ 'is-danger': passwordValidation }"
        :message="[
          { 'Password must have at least 8 characters': passwordValidation }
        ]"
      >
        <b-input
          value="123"
          type="password"
          maxlength="30"
          v-model="password"
        ></b-input>
      </b-field>
    </section>
    <b-button
      class="is-large mt-4 is-fullwidth button has-background-primary has-text-white submit"
      type="submit"
      @click.prevent="
        formValidation();
        login();
      "
      >Sign In</b-button
    >
    <p class="mt-6 ">
      Not on Kado yet? <router-link to="/sign-in">Register Here</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    password: "",
    email: "",
    emailValidation: false,
    passwordValidation: false
  }),
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/secure"))
        .catch(err => console.log(err, this.$store.state.errors));
    },
    formValidation: function() {
      if (!this.email) {
        this.emailValidation = true;
      } else if (!this.validEmail(this.email)) {
        this.emailValidation = true;
      }

      if (!this.password) {
        this.passwordValidation = true;
      } else if (!this.password.length > 7) {
        this.passwordValidation = true;
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>
