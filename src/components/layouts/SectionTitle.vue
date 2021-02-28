<template>
  <section
    :id="[sectionID]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg">
      <div class="temp1">
        <hr class="temp" />
        <h4 class="section-headline">
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
    desc: {
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

.temp1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.section-headline {
  font-weight: 400;
}
hr {
  margin-bottom: 1.25rem;
}

@media only screen and (max-width: 640px) {
}

</style>
