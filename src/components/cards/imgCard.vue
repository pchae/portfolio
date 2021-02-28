<template>
  <div class="thumb">
    <div class="">
      <img
        :src="require('@/assets/thumbs/' + imgSrc)"
        :alt="imgAlt"
      >
    </div>
    <div class="text-box">
      <h4 class="card-title">
        {{ title }}
      </h4>
      <p class="desc">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImgCard',
    props: {
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

  .thumb {
  }

  .text-box {
  }

  .card-title {
  }

  .desc{
  }

</style>
