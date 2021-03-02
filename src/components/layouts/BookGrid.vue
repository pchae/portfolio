<template>
  <section :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container-lg content-wrapper">
      <div class="flex fwrap">
        <div class="list-container">
          <ImgCard
            :index="1"
            img-src="netflix-no-rules-rules.jpg"
            img-alt="No Rules Rules"
            title="No Rules Rules"
            desc="Reed Hastings"
          />
        </div>
        <div class="list-container">
          <ImgCard
            :index="2"
            img-src="shoe-dog.jpg"
            img-alt="Shoe Dog"
            title="Shoe Dog"
            desc="Phil Knight"
          />
        </div>
        <div class="list-container">
          <ImgCard
            :index="3"
            img-src="eat-a-peach.jpg"
            img-alt="Eat A Peach"
            title="Eat A Peach"
            desc="David Chang"
          />
        </div>
        <div class="list-container">
          <ImgCard
            :index="4"
            img-src="outliers.jpg"
            img-alt="Outliers"
            title="Outliers"
            desc="Malcolm Gladwell"
          />
        </div>
        <div class="list-container">
          <ImgCard
            :index="5"
            img-src="the-lean-startup.jpg"
            img-alt="The Lean Startup"
            title="The Lean Startup"
            desc="Eric Reis"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImgCard from '@/components/cards/imgCard.vue';

export default {
  name: 'BookGrid',
  props: {
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
      default: "",
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

  .fwrap {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }

  .list-container {
    width: calc(20% - 1rem);
    padding-bottom: 1rem;
  }

  .list-container:nth-child(5n) {
    padding-bottom: 0rem;
  }

@media only screen and (max-width: 800px) {

  .list-container {
    width: calc(50% - 0.5rem);
  }
}

</style>
