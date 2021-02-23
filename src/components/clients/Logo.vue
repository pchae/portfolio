<template>
  <div class="svglogo">
    <img
      :src="require('@/assets/logo/' + imgSrc)"
      :alt="imgAlt"
    >
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    index: {
      type: Number,
      default: 1,
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

.svglogo {
  width: 100%;
  max-width: 10rem;
  margin: 0;
}

</style>
