<template>
  <div class="container card px-5 py-5">
    <div>
      <h1 class="is-size-3 mb-5">Join Kado</h1>
      <p>
        Registration is quick and easy! Get inspiring Outfit Ideas made for you!
      </p>
      <hr />
    </div>
    <form action="POST">
      <div class="username pb-4">
        <b-field
          label="Username"
          :type="{ 'is-danger': invalidUsername }"
          :message="{ 'Your Username is too short!': invalidUsername }"
        >
          <b-input
            v-model="username"
            type="text"
            id="username"
            name="username"
            v-on:keyup="checkUsername(username)"
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
      <div class="password_confirm pb-4">
        <label for="password_confirm">Confirm Password: </label>
        <input
          class="input"
          v-model="password_confirm"
          type="password"
          id="password_confirm"
          name="password_confirm"
        />
      </div>
      <b-button
        class="is-large mt-4 is-fullwidth"
        type="is-primary"
        v-on:click.prevent="
          createUser(username, password, password_confirm, email)
        "
        >Sign In</b-button
      >
    </form>
    <p class="mt-6 ">
      Already on Kado? <router-link to="/welcome">Click Here</router-link>
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
    password: "",
    password_confirm: "",
    email: "",
    invalidUsername: false
  }),
  methods: {
    createUser: function(username, password, password_confirm, email) {
      if ((password, username, password_confirm, email)) {
        axios
          .post(
            process.env.VUE_APP_API_URL + "users",
            {
              username: username,
              password: password,
              email: email
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
            let invalidUsername = invalidUsername;
            if (response.data.errors.username) {
              console.log(this.invalidUsername);
            }
          });
      }
    }
  }
};
</script>
>
