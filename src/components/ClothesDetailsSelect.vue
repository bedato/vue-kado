<template>
  <div class="clothes-modal">
    <h1>Tell us more about your</h1>
    <h1>{{ this.$store.state.clothes }}</h1>
    <div class="details-form">
      <b-field label="Season">
        <b-select
          placeholder="What Season do we have?"
          v-model="selectedSeason"
          class="select-field"
          rounded
        >
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
        </b-select>
      </b-field>

      <b-field label="color">
        <b-select
          placeholder="What Color is your Item?"
          v-model="selectedColor"
          rounded
        >
          <option
            v-for="colors in color"
            :key="colors.color"
            v-bind:value="colors.color"
            >{{ colors.color }}</option
          >
        </b-select>
      </b-field>

      <b-field label="style">
        <b-select
          placeholder="What Style is it?"
          rounded
          v-model="selectedStyle"
        >
          <option
            v-for="styles in style"
            :key="styles.style"
            v-bind:value="styles.style"
          >
            {{ styles.style }}</option
          >
        </b-select>
      </b-field>

      <b-field label="shape">
        <b-select
          placeholder="What shape does it have?"
          rounded
          v-model="selectedShape"
        >
          <option
            v-bind:value="shapes.shapes"
            v-for="shapes in shape"
            :key="shapes.shapes"
          >
            {{ shapes.shapes }}</option
          >
        </b-select>
      </b-field>

      <b-button @click="postItem()" type="is-success is-medium"
        >Success Light</b-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

let timestamp = Math.floor(Date.now() / 1000).toString();

export default {
  name: "ClothesDetailsSelect",
  data() {
    return {
      selectedSeason: "",
      selectedColor: "",
      selectedStyle: "",
      selectedShape: "",
      color: null,
      style: null,
      shape: null
    };
  },
  methods: {
    postItem() {
      console.log(
        this.selectedStyle,
        this.selectedColor,
        this.selectedSeason,
        this.selectedShape,
        this.$store.state.clothes
      );
      axios
        .post(
          process.env.VUE_APP_API_URL + "items",
          {
            category: this.$store.state.clothes,
            season: this.selectedSeason,
            color: this.selectedColor,
            style: this.selectedStyle,
            shape: this.selectedShape
          },
          {
            headers: {
              "X-Request-Timestamp": timestamp,
              "X-Access-Token": process.env.VUE_APP_API_KEY,
              "X-User-Code": this.$store.state.token
            }
          }
        )
        .then(response => {
          console.log(response);
        });
    }
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_URL + "colors", {
        headers: {
          "X-Request-Timestamp": timestamp,
          "X-Access-Token": process.env.VUE_APP_API_KEY
        }
      })
      .then(response => (this.color = response.data.data));

    axios
      .get(process.env.VUE_APP_API_URL + "styles", {
        headers: {
          "X-Request-Timestamp": timestamp,
          "X-Access-Token": process.env.VUE_APP_API_KEY
        }
      })
      .then(response => (this.style = response.data.data));

    axios
      .get(process.env.VUE_APP_API_URL + "shapes", {
        headers: {
          "X-Request-Timestamp": timestamp,
          "X-Access-Token": process.env.VUE_APP_API_KEY
        }
      })
      .then(response => (this.shape = response.data.data));
  }
};
</script>

<style scoped>
.clothes-modal {
  position: fixed;
  padding: 3rem;
  margin-top: 3rem;
  z-index: 1;
  left: 0;
  top: 0;
  border-radius: 3rem;
  width: 100%;
  background-color: #121212;
}
</style>
