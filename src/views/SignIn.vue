<template>
  <div class="sign-in hero is-fullheight">
    <Nav />
    <Register />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SignIn",
  components: {
    Register,
    Nav,
    Footer
  }
};
</script>
