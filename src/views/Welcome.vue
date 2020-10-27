<template>
  <div class="hero is-fullheight">
    <div class="container">
      <div class=" columns is-centered">
        <div class="mx-5 my-5 px-5 py-5 information column auto">
          <h1 class="is-size-3 has-text-light pb-4">
            Make your own Fashion statement - Kado
          </h1>
          <p class="py-4 has-text-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
            dolores omnis iusto laudantium aspernatur dolor! Necessitatibus
            reprehenderit, ipsum debitis dolorum esse asperiores reiciendis
            illum, nisi illo, dolore quaerat animi molestiae.
          </p>
          <img class="pt-5" alt="Vue logo" src="../assets/logo.png" />
        </div>
        <Login
          class="login-form column is-two-fifths mx-5 my-5 card px-5 py-5"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Welcome",
  components: {
    Login,
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
