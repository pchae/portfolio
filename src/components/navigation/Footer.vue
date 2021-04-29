<template>
  <!-- Footer -->
  <footer :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container-sm fcol">
      <div class="title">
        <h2>Let's talk</h2>
      </div>

      <div class="desc">
        <p>
          If you have a website or mobile app project in mind or need some product advice, feel free to send an email.
        </p>
      </div>

      <div class="frow">
        <PrimaryButton
          buttonName="contact@philchoi.ca"
          url="mailto:contact@philchoi.ca"
          class="email"
          type="email"
        />
      </div>
<!--
      <div id="nav-links" class="frow">
        <div class="nav-link">
          <a href="https://linkedin.com/in/pchoi1/"
            ><img src="@/assets/icons/icon-linkedin.svg" alt="linkedin icon"
          /></a>
        </div>
        <div class="nav-link">
          <a href="https://github.com/username/"
            ><img src="@/assets/icons/icon-github.png" alt="mail icon"
          /></a>
        </div>
      </div>
-->
      <div class="copyright">
        <h6>© Phil Choi 2021</h6>
      </div>
    </div>
  </footer>
</template>

<script>
import PrimaryButton from "@/components/buttons/PrimaryButton.vue";

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
    PrimaryButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  padding-top: 4rem;
  padding-bottom: 2rem;
  text-align: center;
}

.fcol {
  justify-content: center;
}

.frow {
  justify-content: center;
}

.title {
  color: #fff;
}

.desc {
  color: #787878;
  margin-bottom: 3rem;
}

.email {
  background-color: #2430f8;
  margin-bottom: 3rem;
}

a {
  color: #fff;
}

.copyright {
  margin-top: 2rem;
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
</style>
