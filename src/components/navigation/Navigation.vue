<template>
  <!-- Header -->
  <header :id="[sectionID]" :class="[bgColor]" class="pad1">
    <div>
      <div class="container-lg fcontain">
        <div class="logo">
          <router-link to="/" exact>
            <h5 :class="[tColor]">Phil Choi</h5>
          </router-link>
        </div>

        <div role="button" class="button toggle" @click='toggle = !toggle' aria-expanded="false">
          <img src="@/assets/icons/menu.svg" alt="menu icon">
        </div>
      </div>

      <div id="menu" class="overlay" v-show="toggle">
        <div class="container-lg fcontain overnav pad1">
          <div role="button" class="button toggle" @click='toggle = !toggle' aria-expanded="true">
            <img src="@/assets/icons/close.svg" alt="close icon">
          </div>
        </div>

          <div id="nav" class="container-lg fcol menu-links">
            <div class="nav-link">
              <router-link to="/" active-class="active" exact>
                <h2>Work</h2>
              </router-link>
            </div>
            <div class="nav-link">
              <router-link to="/info" active-class="active" exact>
                <h2>Info</h2>
              </router-link>
            </div>
            <div class="nav-link">
              <router-link to="/contact" active-class="active" exact>
                <h2>Contact</h2>
              </router-link>
            </div>
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
      default: '',
    },
    bgColor: {
      type: String,
      default: "",
    },
    tColor: {
      type: String,
      default: "",
    }
  },
  data: function() {
    return {
      toggle: false
    };
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
  justify-content: space-between;
}


/* Overlay Menu */

.button {
  /* show hand cursor */
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
}

.overlay {
  display: inherit;
  flex-direction: column;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  overflow: visible;
  opacity: 1;
  z-index: 1000;
}

.overnav {
  justify-content: end;
  flex-direction: row-reverse;
}

.menu-links {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.nav-link:nth-child(odd) {
  margin-bottom: 4rem;
}

.nav-link:nth-child(even) {
  margin-bottom: 4rem;
}


/* Link Style Override */

.active {
  background-color: #dcdcdc;
  border-radius: 0.25rem;
}

.active > h2 {
  color: #fff;
  border-bottom: 1px solid;
}

.link {
  padding: 0 1rem;
}

</style>
