<template>
  <div class="card">
    <h1 class="cardtitle">
      {{ title }}
    </h1>
    <h4 class="desc">
      {{ desc }}
    </h4>
  </div>
</template>

<script>
export default {
  name: 'ResultCard',
  props: {
    index: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .card {
    align-items: flex-start;
    min-height: 10rem;
    margin-bottom: 2rem;
  }

  .cardtitle {
    font-weight: 300;
    line-height: 1.5;
    color: #fff;
  }

  .desc {
    font-weight: 400;
    color: #D0D0D0;
  }

  @media only screen and (max-width: 640px) {
  }

</style>
