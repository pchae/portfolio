<template>
  <section :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container">
      <div class="fcol intro pt5">
        <h2 class="project-headline">
          {{ project }}
        </h2>
        <p class="details">
          {{ role }} • {{ date }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectTitle",
  props: {
    sectionID: {
      type: String,
      default: "",
    },
    project: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "",
    },
    date: {
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
.details {
  color: #444;
  font-size: 1.125rem;
  font-weight: 400;
}

.intro {
  min-height: 10rem;
  justify-content: flex-end;
}

.project-headline {
  font-size: 5rem;
}

@media only screen and (max-width: 800px) {
  .project-headline {
    font-size: 2.5rem;
  }
}
</style>
