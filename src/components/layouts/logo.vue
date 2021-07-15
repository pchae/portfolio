<template>
  <div class="svg__logo">
    <img
      :src="require('@/assets/' + imgSrc)"
      :alt="imgAlt"
    >
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
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

.svg__logo {
  width: 100%;
  max-width: 10rem;
  margin: 0;
}

</style>
