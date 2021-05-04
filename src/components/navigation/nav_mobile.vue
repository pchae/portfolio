<template>
  <!-- Header -->
  <header :id="[sectionID]" :class="[bgColor]" class="pad05">
    <div>
      <div class="container-lg fcontain">
        <div class="logo">
          <router-link to="/" active-class="active" exact>
            <h5>Phil Choi</h5>
          </router-link>
        </div>

        <div
          role="button"
          class="button toggle"
          @click="toggle = !toggle"
          aria-expanded="false"
        >
          <img src="@/assets/icons/menu.svg" alt="menu icon" />
        </div>
      </div>

      <div id="menu" class="overlay" v-show="toggle">
        <div class="container-lg fcontain overnav pad05">
          <div
            role="button"
            class="button toggle"
            @click="toggle = !toggle"
            aria-expanded="true"
          >
            <img src="@/assets/icons/close.svg" alt="close icon" />
          </div>
        </div>

        <div id="nav" class="container-lg fcol menu-links">
          <div class="nav-link">
            <router-link to="/" active-class="active" exact>
              <h2>Work</h2>
            </router-link>
          </div>
          <div class="nav-link">
            <router-link to="/about" active-class="active" exact>
              <h2>About</h2>
            </router-link>
          </div>
          <div class="frow">
            <div class="social-link">
              <a href="https://linkedin.com/in/pchoi1/"
                ><img src="@/assets/icons/linkedin-40.svg" alt="linkedin icon"
              /></a>
            </div>
            <div class="social-link">
              <a href="mailto:contact@philchoi.ca"
                ><img src="@/assets/icons/mail-40.svg" alt="email icon"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavMobile",
  props: {
    sectionID: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '',
    },
    tColor: {
      type: String,
      default: '',
    },
  },
  data: function() {
    return {
      toggle: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  display: block;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #303030;
  z-index: 1000;
}

.fcontain {
  justify-content: space-between;
}

.frow {
}
/* Overlay Menu */

.button {
  /* show hand cursor */
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 3rem;
  width: 3rem;
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
  opacity: 0.96;
  z-index: 1000;
}

.overnav {
  justify-content: end;
  flex-direction: row-reverse;
}

.menu-links {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
}

.nav-link:nth-child(odd) {
  margin-bottom: 4rem;
}

.nav-link:nth-child(even) {
  margin-bottom: 4rem;
}

.social-link:nth-child(odd) {
  margin-right: 2rem;
}

.social-link:nth-child(even) {
  margin-left: 2rem;
}


/* Link Style Override */

.active {
  background-color: none;
}

.active > h2 {
  color: #fff;
  border-bottom: 0px solid;
}

.link {
  padding: 0 1rem;
}
</style>
