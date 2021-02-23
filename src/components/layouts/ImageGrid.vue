<template>
  <section :class="[padding, bgColor]">
    <div class="container-lg content-wrapper">
      <h2 class="section-heading">
        {{ headline }}
      </h2>
      <div class="grid">
        <div class="col">
          <ImgCard
            :index="1"
            img-src="thumb_starz.jpg"
            img-alt="Starz Play apps"
          />
          <ImgCard
            :index="2"
            img-src="thumb_pbs.jpg"
            img-alt="PBS Streaming app"
          />
        </div>
        <div class="col">
          <ImgCard
            :index="3"
            img-src="thumb_engage.jpg"
            img-alt="Engage whitelabel components"
          />
          <ImgCard
            :index="4"
            img-src="thumb_rbc.jpg"
            img-alt="RBC Fintech"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImgCard from '@/components/cards/imgCard.vue';

export default {
  name: 'ImageGrid',
  props: {
    headline: {
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
    vidSrc: {
      type: String,
      default: '',
    },
    vidAlt: {
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

  components: {
    ImgCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (max-width: 800px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
  }
}

</style>
