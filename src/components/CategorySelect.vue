<template>
  <div class="items-container n-container has-text-light">
    <div class="select-items pb-6">
      <h1 class="is-size-1">Register your Items!</h1>
      <h2 class="is-size-4 pt-5">
        To create an outfit, we need to know what kind of clothes you have.
        Click on a Item and give it the specific details to that Item. The more
        Item details you give, the more random your outfits are going to be.
      </h2>
    </div>
    <div class="clothes">
      <div
        class="py-3 px-5  mx-4 my-4 has-background-primary categories"
        v-for="categories in info"
        :key="categories.category"
        @click="
          handleSelectedItem(categories.category);
          isComponentModalActive = true;
        "
      >
        {{ categories.category }}
      </div>
      <b-modal
        v-model="isComponentModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-modal
        ><template #default="props">
          <modal-form @close="props.close"></modal-form>
        </template>
      </b-modal>
    </div>
    <div class="next">
      <b-button type="is-primary is-light" icon-right="arrow-right"
        ><router-link to="/create-outfit">Create Outfit</router-link></b-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ModalForm from "@/components/ModalForm";

let timestamp = Math.floor(Date.now() / 1000).toString();

export default {
  name: "CategorySelect",
  data() {
    return {
      selectedItem: "",
      info: null,
      details: false,
      isComponentModalActive: false
    };
  },
  methods: {
    handleSelectedItem(item) {
      this.selectedItem = item;
      console.log(this.selectedItem);
      this.$store.state.clothes = this.selectedItem;
      console.log(this.$store.state.clothes);
    }
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
  },
  components: {
    ModalForm
  }
};
</script>

<style scoped>
.clothes {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.select-items {
  display: flex;
  flex-direction: column;
}

.categories {
  width: 15rem;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 500px;
  -webkit-box-shadow: 10px -1px 16px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px -1px 16px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 10px -1px 16px -10px rgba(0, 0, 0, 0.75);
  color: white;
  cursor: pointer;
}

.items-container {
  background: #1f1f1f;
  padding: 2rem;
  border-radius: 2rem;
}

.next {
  padding: 5rem 0 1rem 0;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .categories {
    width: 25rem;
  }
}
</style>
