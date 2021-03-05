<template>
  <div class="card">
    <h3 class="card-title">
      {{ title }}
    </h3>
    <ul class="desc">
      <li>{{ list }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "ServiceList",
  props: {
    title: {
      type: String,
      default: '',
    },
    list: {
      type: String,
      default: '',
    }
  }
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

.desc {
  font-weight: 400;
  color: #181818;
}
</style>
