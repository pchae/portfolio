<template>
  <section
    :id="[sectionID]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg content-wrapper">
      <h2 class="section-heading">
        {{ headline }}
      </h2>
      <div class="services">
        <div class="list-container">
          <ListCard
            :index="1"
            title="Research"
            desc1="Competitive analysis"
            desc2="User journey design"
            desc3="User research"
            desc4="Prototyping &amp; Usability tests"
          />
        </div>
        <div class="list-container">
          <ListCard
            :index="2"
            title="Strategy"
            desc1="Product Strategy"
            desc2="Feature roadmap"
            desc3="Systems Design"
            desc4="Anaylsis &amp; Measurement"
          />
        </div>
        <div class="list-container">
          <ListCard
            :index="3"
            title="Design"
            desc1="Information Architecture"
            desc2="Wireframing"
            desc3="Web &amp; Native App design"
            desc4="Design Systems"
          />
        </div>
        <div class="list-container">
          <ListCard
            :index="4"
            title="Develop"
            desc1="Systems Architecture"
            desc2="Web Development"
            desc3="Native Mobile Apps"
            desc4="Automation Testing"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ListCard from '@/components/cards/ListCard.vue';

export default {
  name: 'ServiceList',
  props: {
    index: {
      type: Number,
      default: 0,
    },
    headline: {
      type: String,
      default: '',
    },
    title: {
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

  components: {
    ListCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .services {
    display: flex;
    flex-wrap: wrap;
    gap: 0rem;
    margin-top: 4rem;
  }

  .list-container {
    width: 25%;
  }

  .list-container {
    padding: 0 2rem;
  }

  @media only screen and (max-width: 1000px) {
    .list-container {
      width: 50%;
    }
    .list-container {
      padding: 0 1rem;
    }
  }

  @media only screen and (max-width: 540px) {
    .list-container {
      width: 100%;
    }
  }
</style>
