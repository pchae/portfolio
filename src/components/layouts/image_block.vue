<template>
  <div
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg media">
      <picture>
        <img
          v-lazy="require('@/assets/' + imgSrc)"
          :alt="imgAlt"
        >
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageBlock',
  props: {
    webpSrc: {
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
      id: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subtext {
  font-weight: 400;
  color: #181818;
}

.media img {
  display: block;
  width: 100%;
  margin: 0;
}

</style>
