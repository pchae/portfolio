<template>
  <!-- Contact -->
  <section :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container fcol">

      <div class="section-headline">
        <h2>Get in touch</h2>
      </div>

      <div class="desc">
        <p>
          Send an <a href="mailto:contact@philchoi.ca" target="_blank">email</a> or connect on
          <a href="https://linkedin.com/in/pchoi1" target="_blank">LinkedIn</a> if you have a mobile app
          or web project in mind.
        </p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
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
  section {
    padding-top: 4rem;
    padding-bottom: 4rem;
    border-top: 0px solid #303030;
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
  }

  .desc p {
    line-height: 1.6;
  }

/* Link Override */



  @media only screen and (max-width: 800px) {
    section {
      text-align: center;
    }

    .baseline-something {
      display: flex;
      flex-direction: column;
    }
  }
</style>
