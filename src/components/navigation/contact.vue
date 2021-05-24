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
        <p class="pb2">
          Available for freelance projects starting July 2021.
        </p>
        <PrimaryButton
          button-name="Send an email"
          url="mailto:contact@philchoi.ca"
          class="ctaButton"
        />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import PrimaryButton from "@/components/buttons/PrimaryButton.vue";

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
  components: {
    PrimaryButton,
  },
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


.section-headline {
}

.desc p {
  line-height: 1.6;
}

.ctaButton {
  border: 1px solid #0cccff;
  background-color: #0a0a0a;
}


/* Link Override */

@media only screen and (max-width: 800px) {
  section {
  }
}
</style>
