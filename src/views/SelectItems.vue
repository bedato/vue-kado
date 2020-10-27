<template>
  <div class="user-clothes-select hero is-fullheight">
    <CategorySelect></CategorySelect>
  </div>
</template>

<script>
import CategorySelect from "@/components/CategorySelect.vue";

export default {
  name: "Secure",
  data() {
    return {};
  },
  components: {
    CategorySelect
  }
};
</script>

<style scoped lang="css">
.user-clothes-select {
  max-height: 100%;
}
</style>
