<template>
  <div class="sign-in hero is-fullheight">
    <Register />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SignIn",
  components: {
    Register,
    Footer
  }
};
</script>
