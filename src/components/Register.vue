<template>
  <div class="container card px-5 py-5">
    <div>
      <h1 class="is-size-3 mb-5">Join Kado</h1>
      <p>
        Registration is quick and easy! Get inspiring Outfit Ideas made for you!
      </p>
      <hr />
    </div>
    <form>
      <div class="username pb-4">
        <b-field
          label="Username"
          :type="{ 'is-danger': usernameValidation }"
          :message="{ 'Username invalid': usernameValidation }"
        >
          <b-input
            v-model="username"
            type="text"
            id="username"
            name="username"
            required
            autofocus
          />
        </b-field>
      </div>
      <div class="email pb-4">
        <b-field
          label="E-Mail"
          :type="{ 'is-danger': emailValidation }"
          :message="{ 'Email invalid': emailValidation }"
        >
          <b-input
            v-model="email"
            type="email"
            id="email"
            name="email"
            required
          />
        </b-field>
      </div>
      <div class="password pb-4">
        <b-field
          label="Password"
          :type="{ 'is-danger': passwordValidation }"
          :message="{
            'Password too short. need atleast 8 characters': passwordValidation
          }"
        >
          <b-input
            v-model="password"
            type="password"
            id="password"
            name="password"
            required
          />
        </b-field>
      </div>
      <div class="password_confirm pb-4">
        <b-field
          label="Confirm Password: "
          :type="{ 'is-danger': passwordConfirmValidation }"
          :message="{
            'Passwords does not match': passwordConfirmValidation
          }"
        >
          <b-input
            v-model="password_confirm"
            type="password"
            id="password_confirm"
            name="password_confirm"
            required
          />
        </b-field>
      </div>
      <b-button
        class="is-large mt-4 is-fullwidth"
        type="submit"
        @click.prevent="
          formValidation();
          register();
        "
        >Sign In</b-button
      >
    </form>
    <p class="mt-6 ">
      Already on Kado? <router-link to="/">Click Here</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    username: "",
    password: "",
    password_confirm: "",
    email: "",
    usernameValidation: false,
    emailValidation: false,
    passwordValidation: false,
    passwordConfirmValidation: false,
    formOK: false
  }),
  methods: {
    register: function() {
      if (this.formOK) {
        let data = {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm
        };
        this.$store
          .dispatch("register", data)
          .then(() => this.$router.push("/secure"))
          .catch(err => console.log(err));
      }
    },
    formValidation: function() {
      if (!this.email) {
        this.emailValidation = true;
      } else if (!this.validEmail(this.email)) {
        this.emailValidation = true;
      }

      if (!this.password) {
        this.passwordValidation = true;
      } else if (!this.passwordValidation.length > 7) {
        this.passwordValidation = true;
      }

      if (!this.password_confirm) {
        this.passwordConfirmValidation = true;
      } else if (!this.password_confirm === this.password) {
        this.passwordConfirmValidation = true;
      }

      if (
        this.emailValidation === false &&
        this.usernameValidation === false &&
        this.passwordConfirmValidation === false &&
        this.passwordConfirmValidation === false) {
        return (this.formOK = true);
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>
>
