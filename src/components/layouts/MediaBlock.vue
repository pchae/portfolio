<template>
  <div
    :id="[sectionID]"
    :class="[padding, bgColor]">
    <div class="container-lg media-block">
      <img
        v-lazy="require('@/assets/' + imgSrc)"
        :alt="imgAlt"
      >
    </div>
    <div class="container pt1">
      <p class="subtext">
        {{ subline }}
      </p>
    </div>
  </div>
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
    sectionID: {
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
.subtext {
  font-weight: 400;
  font-size: 0.875rem;
  color: #181818;
}

.media-block img {
  display: block;
  width: 100%;
  margin: 0;
}

</style>
