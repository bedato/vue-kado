<template>
    <div class="registration-form">
        <form action="POST">
            <div class="username">
                <label for="username">Username: </label>
                <input v-model="username" type="text" id="username" name="username">
            </div>
            <div class="email">
                <label for="email">E-Mail: </label>
                <input v-model="email" type="email" id="email" name="email">
            </div>
            <div class="password">
                <label for="password">Password: </label>
                <input v-model="password" type="password" id="password" name="password">
            </div>
            <div class="password_confirm">
                <label for="password_confirm">Confirm Password: </label>
                <input v-model="password_confirm" type="password" id="password_confirm" name="password_confirm">
            </div>
            <button v-on:click.prevent="createUser(username, password, password_confirm, email )">Sign In</button>
        </form>
    </div>
</template>

<script>
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

//const apiToken = process.env.VUE_APP_API_KEY;
let timestamp = Math.floor(Date.now() / 1000).toString();
const user_code = uuidv4();

export default {
    name: "Register",
    data: () => ({
        username: '',
        password: '',
        password_confirm: '',
        email: ''
    }),
    methods: {
        createUser: function (username, password, password_confirm, email) {
            if (password == password_confirm) {
                axios.post(`http://local.kado.com/api/users`, {
                    username: username,
                    password: password,
                    email: email,
                    user_code: user_code
                },
                {
                headers: {
                    'X-Request-Timestamp': timestamp,
                    'X-Access-Token': process.env.VUE_APP_API_KEY
                }
                })
                .then(function (response) {
                console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            } else {
                alert('wrong pw')
            }
        }
    }
}
</script>>

<style lang="scss" scoped>

</style>