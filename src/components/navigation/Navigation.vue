<template>
  <!-- Header -->
  <header :class="[padding, bgColor]">
    <div class="header pad1">
      <div class="container-xl fcontain">
        <div class="logo">
          <router-link to="/" exact>
            <h5>Phil Choi</h5>
          </router-link>
        </div>
        <div id="nav" class="frow">
          <div class="link">
            <router-link to="/" exact>
              <h6>About</h6>
            </router-link>
          </div>
          <div class="link">
            <router-link to="/info" exact>
              <h6>Info</h6>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    logo: {
      type: String,
      default: "",
    },
    padding: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  display: block;
  position: absolute;
  width: 100%;
  top: 0;
  background-color: transparent;
  background: none;
}

.fcontain {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}

.frow {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

/* Link Override */

.link {
  padding: 0 1rem;
}

@media only screen and (max-width: 640px) {
}
</style>
