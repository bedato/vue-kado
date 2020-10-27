<template>
  <div class="hero is-fullheight-with-navbar n-container">
    <div class="cat-card">
      <div class="cat-card-head">
        <p class="title has-text-light is-size-1">Catwalk</p>
        <p class="has-text-light">
          This is your Personal Catwalk. Create new Outfits and register some
          Items. You have also a summary of your Items and Outfits further
          below. <br />
          Create a new Outfit and get an Inspiration.
        </p>
      </div>
      <div class="card-body">
        <div class="next pt-5">
          <router-link to="/create-outfit">
            <b-button
              type="is-primary is-light is-large"
              icon-right="tshirt-crew"
              class="create-outfit"
            >
              Create Outfit</b-button
            >
          </router-link>
        </div>
      </div>
    </div>

    <div class="cat-card mt-5">
      <div class="cat-card-head">
        <p class="title has-text-light is-size-1">Create Items</p>
        <p class="has-text-light">
          To create Outfits you need to register some Items in your Wardrobe.
          The more you register the funkier your Outfits will be!
        </p>
      </div>
      <div class="card-body">
        <div class="next pt-5">
          <router-link to="/select-items">
            <b-button
              type="is-success is-light is-large"
              icon-right="hanger"
              class="create-outfit"
              >Register Items</b-button
            >
          </router-link>
        </div>
      </div>
    </div>

    <ShowItems />
  </div>
</template>

<script>
import ShowItems from "@/components/ShowItems";

export default {
  name: "Catwalk",
  components: { ShowItems }
};
</script>

<style lang="css" scoped>
.cat-card {
  background: #1f1f1f;
  padding: 2rem;
  border-radius: 2rem;
}

.items-container {
  background: #131313;
  padding: 1.3rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
}

.create-outfit {
  width: 100%;
}
</style>
