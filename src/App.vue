<template>
  <div id="app">
    <div id="nav" class="navbar has-background-primary mb-6">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt=""
            width="112"
            height="28"
        /></a>
      </div>
      <div class="meta-nav">
        <b-navbar-item tag="div">
          <div class="buttons" v-if="isLoggedIn">
            <a class="button is-danger" @click="logout">
              <b-icon icon="power"></b-icon>
            </a>
            <a class="button is-light">
              <b-icon icon="cat"></b-icon>
              <router-link to="/catwalk">Catwalk</router-link>
            </a>
          </div>
        </b-navbar-item>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style lang="css">
body {
  background: #121212;
}

#nav {
  display: flex;
  justify-content: space-between;
}

.meta-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.n-container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .n-container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .n-container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .n-container {
    width: 1170px;
  }
}
</style>
