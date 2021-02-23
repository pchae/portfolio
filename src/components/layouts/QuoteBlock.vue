<template>
  <section
    :id="[sectionID]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg">
      <div class="">
        <h2 class="section-headline">
          {{ headline }}
        </h2>
        <h3 class="subtext">
          {{ desc }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuoteBlock',
  props: {
    headline: {
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

@media only screen and (max-width: 640px) {
}

</style>
