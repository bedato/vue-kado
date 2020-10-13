<template>
  <div class="hero is-fullheight">
    <Nav />
    <div class="container">
      <div class=" columns is-centered">
        <div class="mx-5 my-5 px-5 py-5 welcome information column auto">
          <h1 class="is-size-3 pb-4">Make your own Fashion statement - Kado</h1>
          <p class="py-4">
            Type (color) of the field and help message, also adds a matching
            icon, optional. Used by Input, Select and Autocomplete
          </p>
          <img class="pt-5" alt="Vue logo" src="../assets/logo.png" />
        </div>
        <Login
          class="login-form column is-narrow-widescreen mx-5 my-5 card px-5 py-5"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Welcome",
  components: {
    Login,
    Nav,
    Footer
  }
};
</script>

<style lang="css" scoped>
.information {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
