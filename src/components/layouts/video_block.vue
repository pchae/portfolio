<template>
  <div
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg media">
      <video
        ref="video"
        autoplay
        loop
        muted
        playsinline
        :src="require('@/assets/' + vidSrc)"
        :alt="vidAlt"
        :poster="require('@/assets/' + imgSrc)"
        type="video/mp4"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: {
    vidSrc: {
      type: String,
      default: '',
    },
    vidAlt: {
      type: String,
      default: '',
    },
    imgSrc: {
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
