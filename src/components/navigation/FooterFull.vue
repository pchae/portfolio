<template>
  <!-- Footer -->
  <footer :class="[padding, bgColor] ">
    <div class="container-lg fcontain">
      <div class="copyright">
        <h6>{{ legal }}</h6>
      </div>
      <div
        id="nav-links"
        class="frow"
      >
        <div class="link">
          <router-link to="/">
            <h6>Work</h6>
          </router-link>
        </div>
        <div class="link">
          <router-link to="/info">
            <h6>Info</h6>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterFull',
  props: {
    legal: {
      type: String,
      required: true,
      default: '© 2016-2021 Phil Choi',
    },
    padding: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  footer {
    color: #fff;
    padding: 2rem 0;
  }

  .nav {
    text-align: right;
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

  a {
    color: #fff;
  }

@media only screen and (max-width: 640px) {
  .fcontain {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .frow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .copyright {
    text-align: center;
    margin: 1rem;
  }
  .nav {
    display: block;
    text-align: center;
    margin: 1rem;
  }
}
</style>
