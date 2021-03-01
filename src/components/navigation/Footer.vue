<template>
  <!-- Footer -->
  <footer
    :id="[sectionID]"
    :class="[padding, bgColor] ">
    <div class="container-lg fcontain">
      <div class="copyright">
        <h6>{{ legal }}</h6>
      </div>
      <div
        id="nav-links"
        class="frow"
      >
        <div class="nav-link">
          <a href="https://www.linkedin.com/in/pchoi1/" rel="noreferrer" target="_blank">
            <h6>LinkedIn</h6>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
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
    sectionID: {
      type: String,
      default: '',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  footer {
    padding-top: 4rem;
    padding-bottom: 2rem;
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

.nav-link:nth-child(1n) {
}

.nav-link:nth-child(2n) {
}

.nav-link:nth-child(3n) {
  padding-left: 0rem;
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
