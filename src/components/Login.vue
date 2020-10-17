<template>
  <div>
    <div>
      <h1 class="is-size-3">Login</h1>
      <hr />
    </div>
    <form class="login">
      <ValidationProvider rules="email" v-slot="{ errors }" class="email pb-4">
        <label for="email">Email: </label>
        <input
          class="input"
          v-model="email"
          type="email"
          id="email"
          name="email"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <div class="password pb-4">
        <label for="password">Password: </label>
        <input
          class="input"
          v-model="password"
          type="password"
          id="password"
          name="password"
        />
      </div>
      <b-button
        class="is-large mt-4 is-fullwidth"
        type="submit"
        @click.prevent="login"
        >Sign In</b-button
      >
    </form>
    <p class="mt-6 ">
      Not on Kado yet? <router-link to="/sign-in">Register Here</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    password: "",
    email: ""
  }),
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/secure"))
        .catch(err => console.log(err));
    }
  }
};
</script>
>
