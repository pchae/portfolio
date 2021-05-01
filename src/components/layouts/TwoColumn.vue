<template>
  <section
    :id="[sectionID]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg">
      <div class="grid">
        <div class="1col pt5">
          <div class="row1">
            <h2 class="title">
              {{ headline }}
            </h2>
          </div>
          <div class="row2 pb2">
            <h2 class="subtext">
              {{ desc }}
            </h2>
          </div>
          <div
            id=""
            class="pb1"
          >
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'TwoColumn',
  props: {
    headline: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
  components: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.25rem;
}

a {
  text-decoration: underline 2px;
}

@media only screen and (max-width: 880px) {

  .grid {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
  }

}
</style>
