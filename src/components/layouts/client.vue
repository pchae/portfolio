<template>
  <section
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg content-wrapper">
      <div class="">
        <h2 class="section-headline">
          {{ headline }}
        </h2>

        <div class="client-partners">
          <div
            class="item-container"
            v-for="item in clients.clients"
            :key="item.id"
          >
            <Logo
              :img-src="item.imgSrc"
              :img-alt="item.imgAlt"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Logo from '@/components/layouts/logo.vue';

export default {
  name: 'Clientlist',
  props: {
    headline: {
      type: String,
      default: '',
    },
  },

  computed: mapState({
    clients: state => state.clients
  }),

  data() {
    return {
      id: '',
      padding: '',
      bgColor: '',
    };
  },

  components: {
    Logo,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.client-partners {
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;
}

.item-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 25%;
  flex-shrink: 0;
  padding: 0 2rem;
  margin-bottom: 6rem;
  cursor: default;
}

.img-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}

.col {
  span: 1;
}

@media screen and (min-width: 960px) {
  .client-partners {
    margin-top: 5rem;
  }
}

@media only screen and (max-width: 800px) {
  .item-container {
    width: 33.33%;
  }

  .img-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 640px) {
  .item-container {
    width: 50%;
    padding: 0 0.5rem;
  }
}
</style>
