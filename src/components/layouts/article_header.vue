<template>
  <div :id="[id]" :class="[padding, bgColor]" class="container">
    <div class="fcol intro">
      <h1 class="project-headline">
        {{ title }}
      </h1>
      <h4 class="tagline">
        {{ subhead }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleHeader",
  props: {
    title: {
      type: String,
      default: "",
    },
    subhead: {
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
.project-headline {
  padding-bottom: 1rem;
}

.tagline {
  font-size: 1.5rem;
  font-weight: 400;
  color: #444;
}

.intro {
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

@media only screen and (max-width: 800px) {
}
</style>
