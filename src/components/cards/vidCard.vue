<template>
  <div class="thumb">
    <video
      ref="video"
      autoplay
      loop
      muted
      playsinline
      :preload="preload"
      :src="require('@/assets/work/' + vidSrc)"
      :alt="vidAlt"
      type="video/mp4"
    />
  </div>
</template>

<script>
export default {
  name: 'VidCard',
  props: {
    vidSrc: {
      type: String,
      default: '',
    },
    vidAlt: {
      type: String,
      default: '',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.thumb {}
video {}

</style>
