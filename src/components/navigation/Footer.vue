<template>
  <footer :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container fcol">
      <div class="baseline-something frow">
        <div id="nav-links" class="frow">
          <div class="nav-link">
            <a href="https://linkedin.com/in/pchoi1/"
              ><img src="@/assets/icons/icon-linkedin.svg" alt="linkedin icon"
            /></a>
          </div>
          <div class="nav-link">
            <a href="mailto:contact@philchoi.ca"
              ><img src="@/assets/icons/icon-mail2.svg" alt="email icon"
            /></a>
          </div>
        </div>

        <div class="copyright">
          <h6>© 2021 Phil Choi. All Rights Reserved.</h6>
        </div>
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
      default: "",
    },
    bgColor: {
      type: String,
      default: "",
    },
    sectionID: {
      type: String,
      default: "",
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
  border-top: 1px solid #000;
}

.fcol {
  justify-content: center;
}

.frow {
  justify-content: center;
}

.baseline-something {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.copyright {
  color: #fff;
}

/* Link Override */

.nav-link {
  color: #fff;
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

  .baseline-something {
    display: flex;
    flex-direction: column;
  }

  .copyright {
    margin-top: 2rem;
    color: #fff;
  }
}
</style>
