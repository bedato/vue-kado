<template>
  <div class="sign-in">
    <Register/>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";

export default {
  name: "SignIn",
  components: {
    Register
  }
};
</script>
