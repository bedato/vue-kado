<template>
  <div>
    <div>
      <h1 class="is-size-3">Login</h1>
      <hr />
    </div>
    <form action="POST">
      <div class="email pb-4">
        <label for="email">Email: </label>
        <input
          class="input"
          v-model="email"
          type="email"
          id="email"
          name="email"
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
        />
      </div>
      <b-button
        class="is-large mt-4 is-fullwidth"
        type="is-primary"
        v-on:click.prevent="loginUser(email, password)"
        >Sign In</b-button
      >
    </form>
    <p class="mt-6 ">
      Not on Kado yet? <router-link to="/signin">Register Here</router-link>
    </p>
  </div>
</template>

<script>
const axios = require("axios");

let timestamp = Math.floor(Date.now() / 1000).toString();

export default {
  name: "Register",
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    loginUser: function(email, password) {
      if (email && password) {
        axios
          .post(
            process.env.VUE_APP_API_URL + "login",
            {
              email: email,
              password: password
            },
            {
              headers: {
                "X-Request-Timestamp": timestamp,
                "X-Access-Token": process.env.VUE_APP_API_KEY
              }
            }
          )
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>
>
