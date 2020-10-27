<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title has-text-light">
        {{ this.$store.state.clothes }} Details
      </p>
      <button type="button" class="delete" @click="$emit('close')" />
    </header>
    <section class="modal-card-body">
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

        <b-field label="Color">
          <b-select
            placeholder="What Color is your Item?"
            v-model="selectedColor"
            rounded
            class="select-field"
          >
            <option
              v-for="colors in color"
              :key="colors.color"
              v-bind:value="colors.color"
              >{{ colors.color }}</option
            >
          </b-select>
        </b-field>

        <b-field label="Style">
          <b-select
            placeholder="What Style is it?"
            rounded
            class="select-field"
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

        <b-field label="Shape">
          <b-select
            placeholder="What shape does it have?"
            rounded
            class="select-field"
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
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$emit('close')">
        Back
      </button>
      <button
        @click="
          postItem();
          $emit('close');
        "
        class="button is-primary"
      >
        Register Item
      </button>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
let timestamp = Math.floor(Date.now() / 1000).toString();

export default {
  name: "ModalForm",
  data() {
    return {
      selectedSeason: null,
      selectedColor: null,
      selectedStyle: null,
      selectedShape: null,
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
.modal-card-head {
  background: #1f1f1f;
  border-bottom: none;
}

.modal-card-body {
  background: #131313;
}

.modal-card-foot {
  background: #1f1f1f;
  border-top: none;
}
</style>
