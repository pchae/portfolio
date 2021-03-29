<template>
  <div :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container-lg">
        <div class="rowleft">
      <div class="fcol intro pt5">
          <h2 class="project-headline">
            {{ title }}
          </h2>
          <h3 class="tagline">
            {{ subhead }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleHeader",
  props: {
    sectionID: {
      type: String,
      default: "",
    },
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
  font-size: 3rem;
}

.tagline {
  color: #444;
  font-size: 2rem;
  font-weight: 400;
}

.intro {
  min-height: 10rem;
  width: 100%;
  justify-content: flex-start;
}

@media only screen and (max-width: 800px) {
  .project-headline {
    font-size: 2.5rem;
  }
  .tagline {
    font-size: 1.5rem;
  }
}
</style>
