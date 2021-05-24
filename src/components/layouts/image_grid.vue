<template>
  <section
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg content-wrapper">
      <div class="flex pb5">
        <div
          class="list-container"
          v-for="item in projects"
          :key="item.id"
        >
          <router-link
            :to="item.to"
          >
            <ImgCard
              :img-src="item.imgSrc"
              :img-alt="item.imgAlt"
              :title="item.title"
              :desc="item.desc"
            />
          </router-link>
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
  },

  data() {
    return {
      id: '',
      padding: '',
      bgColor: '',
    };
  },

  components: {
    ImgCard,
  },

  inject: ["projects"],
  created() {
    console.log(this.projects);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
  flex-wrap: wrap;
  justify-content: flex-start;
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
