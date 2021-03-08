<template>
  <section :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container-lg">
      <div class="fcol intro pt5">
        <h2 class="section-headline">
          {{ headline }}
        </h2>
        <h3 class="subtext" v-html="status">
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroBlock",
  props: {
    headline: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    sectionID: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      padding: "",
      bgColor: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subtext {
  color: #000;
  font-weight: 400;
}

.intro {
  min-height: 10rem;
  justify-content: flex-end;
}

@media only screen and (max-width: 640px) {
}
</style>
