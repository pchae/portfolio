<template>
  <!-- Footer -->
  <footer :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container ft-nav">
        <div class="frow nav-links">
          <div class="nav-link">
            <a href="https://linkedin.com/in/pchoi1/" target="_blank"
              ><img src="@/assets/icons/icon-linkedin.svg" alt="linkedin icon"
            /></a>
          </div>
          <div class="nav-link">
            <a href="mailto:contact@philchoi.ca" target="_blank"
              ><img src="@/assets/icons/icon-mail2.svg" alt="email icon"
            /></a>
          </div>
        </div>

        <div class="copyright">
          <h6>© 2021 Phil Choi. All Rights Reserved.</h6>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
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
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-top: 0px solid #000;
  }

  .frow {
    justify-content: center;
  }

  .ft-nav {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    height: 1.5rem;
  }

  .copyright {
    align-self: center;
    color: #fff;
    height: 1.5rem;
  }

/* Link Override */

  .nav-links {
    height: 1.5rem;
  }

  .nav-link:nth-child(1n) {
    padding-right: 3rem;
  }

  .nav-link:nth-child(2n) {
    padding-right: 0rem;
  }

  .nav-link:nth-child(3n) {
  }

  @media only screen and (max-width: 800px) {
    footer {
      text-align: center;
    }

    .ft-nav {
      display: flex;
      flex-direction: column;
      height: 6rem;
    }

    .copyright {
      width: 100%;
      margin-top: 2rem;
      color: #fff;
    }

    .nav-links {
      width: 100%;
   }

  }
</style>
