<template>
  <section
    :id="[sectionID]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg">
      <div class="fcol">
        <hr class="divider-style-class" />

        <h4 class="section-headline pb4">
          {{ title }}
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    sectionID: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      padding: '',
      bgColor: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.section-headline {
  font-weight: 400;
}
hr {
  margin-bottom: 1rem;
}

.divider-style-class {
}

@media only screen and (max-width: 640px) {
}

</style>
