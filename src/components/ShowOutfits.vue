<template>
  <div class="hero is-fullheight">
    <div class="cat-card mt-5" v-for="outfit in outfits" :key="outfit.outfits">
      <div class="cat-card mt-5">
        <div class="cat-card-head">
          <p class="title has-text-light is-size-1">Outfits</p>
        </div>
        <div class="card-body">
          <div class="pt-5 mt-5 items-container">
            <div class="contents">
              <p>Outfit NR: {{ outfit.id }}</p>
            </div>
            <div class="icon">
              <b-icon icon="hanger" size="is-large" type="is-primary"> </b-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let timestamp = Math.floor(Date.now() / 1000).toString();

export default {
  name: "ShowOutfits",
  data() {
    return {
      outfits: this.$store.state.outfit
    };
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_URL + "users", {
        headers: {
          "X-Request-Timestamp": timestamp,
          "X-Access-Token": process.env.VUE_APP_API_KEY,
          "X-User-Code": this.$store.state.token
        }
      })
      .then(response => {
        (this.$store.state.user_id = response.data.data.user_id),
          axios
            .get(
              process.env.VUE_APP_API_URL +
                "outfits?user_id=" +
                this.$store.state.user_id,
              {
                headers: {
                  "X-Request-Timestamp": timestamp,
                  "X-Access-Token": process.env.VUE_APP_API_KEY
                }
              }
            )
            .then(response => (this.$store.state.outfit = response.data.data));
      });
  }
};
</script>

<style scoped>
.cat-card {
  background: #1f1f1f;
  padding: 1rem;
  border-radius: 2rem;
}

.items-container {
  background: #131313;
  padding: 1.3rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>
