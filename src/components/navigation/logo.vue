<template>
  <div id="logo" class="container-lg pad1">
    <div class="logo">
      <router-link to="/" active-class="active" exact>
        <h5>Phil Choi</h5>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 3rem;
    cursor: pointer;
    z-index: 1000;
  }

</style>
