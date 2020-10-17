<template>
  <div class="user-clothes-select container is-fullheight">
    <component v-bind:is="component" />
    <button v-on:click="toggle">Continue</button>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import SelectItems from "@/components/CategorySelect.vue";
import ClothesDetailsSelect from "@/components/ClothesDetailsSelect";
//import ClothesDetailsSelect from "@/components/ClothesDetailsSelect";

export default {
  name: "Secure",
  data() {
    return {
      component: "SelectItems"
    };
  },
  methods: {
    toggle() {
      if (this.component === SelectItems) {
        this.component = ClothesDetailsSelect;
      } else {
        this.component = SelectItems;
      }
    }
  },
  components: {
    SelectItems,
    Footer,
    ClothesDetailsSelect
  }
};
</script>
