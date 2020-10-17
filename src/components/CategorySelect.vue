<template>
  <div>
    <div class="select-items">
      <h1 class="is-size-3">Let's Go Rockstar!</h1>
      <h2 class="is-size-4">Select your Clothes and get your Outfit soon!</h2>
    </div>
    <div class="clothes">
      <div
        class="py-3 px-5  mx-4 my-4 has-background-primary categories"
        v-for="categories in info"
        v-bind:key="categories"
      >
        {{ categories.category }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

let timestamp = Math.floor(Date.now() / 1000).toString();

export default {
  name: "SelectItems",
  data() {
    return {
      info: null
    };
  },
  mounted() {
    console.log(process.env.VUE_APP_API_URL + "styles");
    axios
      .get(process.env.VUE_APP_API_URL + "categories", {
        headers: {
          "X-Request-Timestamp": timestamp,
          "X-Access-Token": process.env.VUE_APP_API_KEY
        }
      })
      .then(response => (this.info = response.data.data));
  }
};
</script>

<style scoped>
.clothes {
  display: flex;
  flex-wrap: wrap;
}

.categories {
  width: 10rem;
  text-align: center;
  border-radius: 500px;
  -webkit-box-shadow: 10px -1px 16px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px -1px 16px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 10px -1px 16px -10px rgba(0, 0, 0, 0.75);
  color: white;
}
</style>
