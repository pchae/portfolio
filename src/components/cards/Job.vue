<template>
  <div class="card">
    <h5 class="card-title">
      <span class="role">{{ role }} @ </span>
      <span class="org">{{ org }}</span>
    </h5>
    <h5 class="date">{{ date }}</h5>
    <ul class="desc">
      <p class="pb1">{{ desc }}</p>
      <p class="pb1">{{ desc2 }}</p>
      <p>{{ detail }}</p>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: {
    index: {
      type: Number,
      default: 1,
    },
    org: {
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
    desc: {
      type: String,
      default: "",
    },
    desc2: {
      type: String,
      default: "",
    },
    detail: {
      type: String,
      default: "",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin-bottom: 2rem;
}

.card > * {
  margin-bottom: 0.5rem;
}

.card-title {
  font-weight: 700;
  line-height: 1.5;
  color: #000;
}
.org {
  font-weight: 500;
  color: #000;
}
.role {
  font-weight: 500;
  color: #000;
}
.date {
  font-weight: 400;
  color: #000;
}
.desc {
  font-weight: 400;
  color: #000;
}
.detail {
  font-weight: 400;
  color: #000;
}
</style>
