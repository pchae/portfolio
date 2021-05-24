<template>
  <!-- Contact -->
  <section
    :id="[sectionID]"
    :class="[padding, bgColor]"
  >
    <div class="container fcol">
      <div class="section-headline">
        <h2>Get in touch for project inquiries</h2>
      </div>

      <div class="desc">
        <p>
          Available for freelance projects starting: July 2021.
        </p>
        <p>
          Mail: <a
            href="mailto:contact@philchoi.ca"
            target="_blank"
          >contact at philchoi.ca</a>
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
