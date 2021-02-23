<template>
  <div class="card">
    <div id="titleheadline">
      <h3 class="cardtitle">
        {{ title }}
      </h3>
    </div>
    <h4 class="desc">
      {{ desc }}
    </h4>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
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
    imgSrc: {
      type: String,
      default: '',
    },
    imgAlt: {
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
  }

  .titleheadline {
    margin: 0;
  }

  .cardtitle {
    font-weight: 700;
    line-height: 1.5;
    color: #fff;
  }

  .desc {
    font-weight: 400;
    color: #D0D0D0;
  }

  @media only screen and (max-width: 640px) {
    .card {
      padding: 0rem;
    }
  }
</style>
