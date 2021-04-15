<template>
  <!-- Header -->
  <header :id="[sectionID]" :class="[bgColor]" class="pad05">
    <div class="container-lg fcontain">
      <div class="logo">
        <router-link to="/" active-class="active" exact>
          <h5>Phil Choi</h5>
        </router-link>
      </div>

      <div id="nav" class="fcontain menu-links">
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
  </header>
</template>

<script>
export default {
  name: "Nav",
  props: {
    sectionID: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "",
    },
    tColor: {
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
  position: fixed;
  width: 100%;
  z-index: 1000;
}

/* Rename This */

.fcontain {
  display: flex;
  flex-direction: row;
}

.menu-links {
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 3rem;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
}

.nav-link {
  align-items: center;
}

.nav-link:nth-child(odd) {
  margin-right: 2rem;
}

.nav-link:nth-child(even) {
  margin-left: 2rem;
}

/* Link Style Override */

.active {
  background-color: none;
}

.active > h6 {
  border-bottom: 1px solid;
}

.link {
  padding: 0 1rem;
}
</style>
