<template>
  <section>
    <button
      class="button is-primary is-medium"
      @click="isComponentModalActive = true"
    >
      Launch component modal
    </button>

    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      destroy-on-hide
      animation="zoom-out"
    >
      <template #default="props">
        <modal-form @close="props.close"></modal-form>
      </template>
    </b-modal>
  </section>
</template>

<script>
import ModalForm from "@/components/ModalForm.vue";

export default {
  components: {
    ModalForm
  },
  data() {
    return {
      isComponentModalActive: false
    };
  }
};
</script>
