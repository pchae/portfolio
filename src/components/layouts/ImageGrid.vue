<template>
  <section :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container-lg content-wrapper">
      <div class="flex">
        <div class="list-container">
          <router-link to="/starz" exact>
            <ImgCard
              :index="1"
              img-src="blank.png"
              img-alt="Starz Play apps"
              title="Starz Play"
              desc="Roku, Amazon, Samsung"
            />
          </router-link>
        </div>
        <div class="list-container">
          <ImgCard
            :index="2"
            img-src="blank.png"
            img-alt="Engage whitelabel components"
            title="Engage Whitelabel"
            desc="PWA, SaaS"
          />
        </div>
        <div class="list-container">
          <ImgCard
            :index="3"
            img-src="blank.png"
            img-alt="PBS"
            title="PBS"
            desc="Microsoft Lumia & Surface"
          />
        </div>
        <div class="list-container">
          <ImgCard
            :index="4"
            img-src="blank.png"
            img-alt="Pizza Pizza native apps"
            title="Pizza Pizza"
            desc="Android, iOS"
          />
        </div>
        <div class="list-container">
          <ImgCard
            :index="5"
            img-src="blank.png"
            img-alt="C51"
            title="C51"
            desc="React Native, SaaS"
          />
        </div>
        <div class="list-container">
          <ImgCard
            :index="6"
            img-src="blank.png"
            img-alt="Fintech Design Systems"
            title="Fintech Design Systems"
            desc="Android, iOS"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImgCard from "@/components/cards/imgCard.vue";

export default {
  name: "ImageGrid",
  props: {
    imgSrc: {
      type: String,
      default: "",
    },
    imgAlt: {
      type: String,
      default: "",
    },
    vidSrc: {
      type: String,
      default: "",
    },
    vidAlt: {
      type: String,
      default: "",
    },
    sectionID: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      padding: "",
      bgColor: "",
    };
  },

  components: {
    ImgCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
}

.list-container {
  width: calc(50% - 1rem);
  margin-bottom: 2rem;
}

@media only screen and (max-width: 800px) {
  .list-container {
    width: 100%;
  }
}
</style>
