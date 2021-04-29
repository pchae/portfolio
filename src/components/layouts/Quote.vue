<template>
  <section
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg">
      <div class="quote pt5">
        <h2 class="section-headline">
          {{ headline }}
        </h2>
        <h4 class="subtext">
          {{ desc }}
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Quote',
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
  data() {
    return {
      padding: '',
      bgColor: '',
      id: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-headline {
  margin-bottom: 2rem;
}

.subtext {
  display: flex;
  color: #000;
  font-weight: 400;
  width: 100%;
}

.quote {
  display: flex;
  flex-direction: column;
  min-height: 10rem;
}

@media only screen and (max-width: 800px) {
  .subtext {
  }
}

</style>
