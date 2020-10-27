<template>
  <div>
    <div class="hero is-fullheight-with-navbar n-container">
      <div class="outfit-card">
        <div class="outfit-card-head">
          <p class="title has-text-light is-size-1">Create Outfit</p>
          <p class="has-text-light">
            Get a randomized Outfit. By clicking the Button you will get a
            randomized Outfit based on your registered Items.
          </p>
        </div>
        <div class="card-body">
          <div class="next pt-5">
            <b-button
              type="is-primary is-light is-large"
              icon-right="tshirt-crew"
              class="create-outfit"
              >Create Outfit</b-button
            >
          </div>
        </div>
      </div>

      <div>
        <p class="title has-text-light is-size-1">Your next Outfit.</p>
        <p class="has-text-light">
          Show the world your next outfit and become a trendsetter. One touch
          away.
        </p>
      </div>

      <div class="outfit-card">
        <div class="outfit-card-head">
          <p class="title has-text-light is-size-1">Outfit Nr-1</p>
          <p class="has-text-light">
            What about this Outfit:
          </p>
          <ul>
            <li>Top:</li>
            <li>Bottom:</li>
            <li>Outer:</li>
            <li>Winter:</li>
          </ul>
        </div>
      </div>
      <div class="btn-group">
        <b-button
          type="is-danger is-medium"
          icon-right="hanger"
          class="cred-btn"
          >Reload Outfit</b-button
        >
        <b-button
          type="is-success is-medium"
          icon-right="hanger"
          class="cred-btn"
          >Keep Outfit</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateOutfit"
};
</script>

<style scoped>
.outfit-card {
  background: #1f1f1f;
  padding: 2rem;
  border-radius: 2rem;
}

.create-outfit {
  width: 100%;
}

.cred-btn {
  width: 40%;
  margin-bottom: 3rem;
}

.btn-group {
  display: flex;
  justify-content: space-between;
}
</style>
