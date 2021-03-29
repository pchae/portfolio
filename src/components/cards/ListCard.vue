<template>
  <div class="card">
    <h3 class="card-title">
      {{ title }}
    </h3>
    <ul class="desc">
      <li>{{ desc1 }}</li>
      <li>{{ desc2 }}</li>
      <li>{{ desc3 }}</li>
      <li>{{ desc4 }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListCard',
  props: {
    index: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: '',
    },
    desc1: {
      type: String,
      default: '',
    },
    desc2: {
      type: String,
      default: '',
    },
    desc3: {
      type: String,
      default: '',
    },
    desc4: {
      type: String,
      default: '',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .card {
    margin-bottom: 2rem;
  }

  .card>* {
    margin-bottom: 0.5rem;
  }

  .card-title {
    font-weight: 700;
    line-height: 1.5;
    color: #000;
  }

  .desc {
    font-weight: 400;
    color: #202020;
  }

</style>
