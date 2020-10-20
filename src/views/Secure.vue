<template>
  <div class="user-clothes-select container is-fullheight">
    <keep-alive>
      <component v-bind:is="component" />
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import SelectItems from "@/components/CategorySelect.vue";
import ClothesDetailsSelect from "@/components/ClothesDetailsSelect";

export default {
  name: "Secure",
  data() {
    return {
      component: "SelectItems"
    };
  },
  components: {
    SelectItems,
    Footer,
    ClothesDetailsSelect
  }
};
</script>
