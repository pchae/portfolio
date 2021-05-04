<template>
  <!-- Footer -->
  <footer :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container fcol">
      <div class="section-headline">
        <h2>Get in touch</h2>
      </div>

      <div class="desc">
        <p>
          If you have a website or mobile app project in mind or need some
          product advice, feel free to send an email.
        </p>
      </div>

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
  components: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  padding-top: 4rem;
  padding-bottom: 2rem;
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

.section-headline {
  text-align: center;
}

.desc p {
  line-height: 1.6;
  text-align: center;
  margin-bottom: 4rem;
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
