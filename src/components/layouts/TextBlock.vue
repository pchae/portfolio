<template>
  <section
    :id="[sectionID]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg">
      <div class="fcol quote pt5">
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
  name: 'TextBlock',
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
.section-headline {
  margin-bottom: 2rem;
}

.subtext {
  display: flex;
  color: #000;
  font-weight: 400;
  width: 66%;
  justify-content: flex-end;
}

.quote {
  min-height: 10rem;
  justify-content: flex-end;
}
@media only screen and (max-width: 980px) {
  .subtext {
    width: 100%;
  }
}

</style>
