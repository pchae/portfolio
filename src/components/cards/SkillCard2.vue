<template
  v-for="{id,title,desc} in skill"
  :key="skill"
>
  <div class="card">
    <h3 class="cardtitle">
      {{ title }}
    </h3>
    <h4 class="desc">
      {{ desc }}
    </h4>
  </div>
</template>

<script>

export default {
  name: 'SkillCard2',
  props: {
    id: {
      type: String,
      default: '',
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
  getters: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cardtitle {
    font-weight: 700;
    line-height: 1.5;
    color: #fff;
    margin-bottom: 1rem;
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
