<template>
  <section
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="container">
      <div class="fcol intro ">
        <h2 class="section-headline pb2">
          {{ headline }}
        </h2>
        <h3
          class="subtext"
          v-html="status"
        />
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
      default: '',
    },
    status: {
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
.subtext {
  font-weight: 400;
}

.intro {
  justify-content: flex-end;
}

@media only screen and (max-width: 640px) {
}
</style>
