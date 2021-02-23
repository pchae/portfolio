<template>
  <section
    :id="[sectionID]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg content-wrapper">
      <h2 class="section-heading">
        {{ headline }}
      </h2>
      <div class="capabilities">
        <div class="skill-container">
          <SkillCard2
            title=""
            desc=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillCard2 from '@/components/cards/SkillCard2.vue';

export default {
  name: 'SkillGrid',
  props: {
    headline: {
      type: String,
      default: '',
    },
    padding: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '',
    },
    sectionID: {
      type: String,
      default: '',
    },
  },
  components: {
    SkillCard2,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .capabilities {
    display: flex;
    flex-wrap: wrap;
    gap: 0rem;
    margin-top: 4rem;
  }

  .skill-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    width: 50%;
    flex-shrink: 0;
    margin-bottom: 4rem;
    cursor: default;
  }

  @media only screen and (min-width: 641px) {
    .skill-container:nth-child(odd) {
      padding-right: 2rem;
    }

    .skill-container:nth-child(2n) {
      padding-left: 2rem;
    }
  }

  @media only screen and (max-width: 640px) {
    .skill-container {
      width: 100%;
    }
  }
</style>
