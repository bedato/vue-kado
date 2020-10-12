<template>
  <div class="login-form column is-one-quarter mx-5 my-5 card px-5 py-5">
    <div>
      <h1 class="is-size-3">Login</h1>
      <hr />
    </div>
    <form action="POST">
      <div class="username pb-4">
        <label for="username">Username: </label>
        <input
          class="input"
          v-model="username"
          type="text"
          id="username"
          name="username"
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
        v-on:click.prevent="
          loginUser(username, password, password_confirm, email)
        "
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
    username: "",
    password: ""
  }),
  methods: {
    loginUser: function(username, password) {
      if (username && password) {
        axios
          .get(
            `http://local.kado.com/api/users`,
            {
              username: username,
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
