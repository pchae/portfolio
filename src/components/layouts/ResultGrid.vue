<template>
  <section
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg">
      <h2 class="section-heading">
        {{ headline }}
      </h2>
      <div class="flex-name">
        <div class="list-container">
          <ResultCard
            :index="1"
            title="38MM"
            desc="Dollars in avg. ARR created by our digital products and services for clients."
          />
        </div>
        <div class="list-container">
          <ResultCard
            :index="2"
            title="42+"
            desc="Projects completed for Fortune 500s, startups, non-profits, and SMEs."
          />
        </div>
        <div class="list-container">
          <ResultCard
            :index="3"
            title="05"
            desc="Years in business founded in Downtown Toronto and helping companies worldwide."
          />
        </div>
        <div class="list-container">
          <ResultCard
            :index="4"
            title="16+"
            desc="Collective years of experience working with brands like Pizza Pizza,
          Reuters, and Dell EMC."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ResultCard from '@/components/cards/ResultCard.vue';

export default {
  name: 'ResultGrid',
  props: {
    index: {
      type: Number,
      default: 1,
    },
    headline: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
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
    ResultCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .list-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    width: 50%;
    flex-shrink: 0;
    margin-bottom: 2rem;
    cursor: default;
  }

  .flex-name {
    display: flex;
    flex-wrap: wrap;
    gap: 0rem;
    margin-top: 4rem;
  }

  @media only screen and (max-width: 800px) {
    .list-container {
      width: 50%;
    }
  }

  @media only screen and (min-width: 641px) {
    .list-container:nth-child(odd) {
    padding-right: 2rem;
  }

    .list-container:nth-child(2n) {
      padding-left: 2rem;
    }
  }

  @media only screen and (max-width: 640px) {
    .list-container {
      width: 100%;
    }
  }

</style>
