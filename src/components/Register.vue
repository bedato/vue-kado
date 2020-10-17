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
        <b-field label="Username">
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
        <label for="email">E-Mail: </label>
        <input
          class="input"
          v-model="email"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div class="password pb-4">
        <label for="password">Password: </label>
        <input
          class="input"
          v-model="password"
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      <div class="password_confirm pb-4">
        <label for="password_confirm">Confirm Password: </label>
        <input
          class="input"
          v-model="password_confirm"
          type="password"
          id="password_confirm"
          name="password_confirm"
          required
        />
      </div>
      <b-button
        class="is-large mt-4 is-fullwidth"
        type="submit"
        @click.prevent="register"
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
    email: ""
  }),
  methods: {
    register: function() {
      let data = {
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>
>
