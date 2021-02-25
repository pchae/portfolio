<template>
  <!-- Header -->
  <header :class="[padding, bgColor]">
    <div class="pad1">
      <div class="container-lg fcontain">
        <div class="logo">
          <router-link to="/" exact>
            <h5>Phil Choi</h5>
          </router-link>
        </div>
        <div id="nav" class="frow">
          <div class="nav-link">
            <router-link to="/" active-class="active" exact>
              <h6>Work</h6>
            </router-link>
          </div>
          <div class="nav-link">
            <router-link to="/info" active-class="active" exact>
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
  name: "NavBar",
  props: {
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

.nav-link:nth-child(odd) {
  padding-right: 1rem;
}

.nav-link:nth-child(2n) {
  padding-left: 1rem;
}

/* Link Override */

a {
  color: #40b884;
}

.active > h6 {
  border-bottom: 1px solid #000;
}

.link {
  padding: 0 1rem;
}

/* Mobile Menu */

.mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #000;
  opacity: 0;
  z-index: 1000;
}

.class-to-flexrow-position {
  width: 100%;
}

.class-to-vertically-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

@media only screen and (max-width: 640px) {
}
</style>
