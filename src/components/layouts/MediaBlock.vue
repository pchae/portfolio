<template>
  <section :class="[padding, bgColor]">
    <div class="container-lg">
      <h2 class="section-heading pb2">
        {{ headline }}
      </h2>
      <h3 class="subtext">
        {{ subline }}
      </h3>
    </div>
    <div class="container-lg media-block">
      <img
        :src="require('@/assets/' + imgSrc)"
        :alt="imgAlt"
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'MediaBlock',
  props: {
    headline: {
      type: String,
      default: '',
    },
    subline: {
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
  data() {
    return {
      padding: '',
      bgColor: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.media-block img {
  display: block;
  width: 100%;
  margin: 0;
}

</style>
