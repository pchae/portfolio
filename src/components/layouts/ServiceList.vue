<template>
  <section
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="container content-wrapper">
      <div class="section-title pb4">
        <h3 class="section-headline">
          What I do
        </h3>
      </div>
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
            desc4="Analytics &amp; Measurement"
          />
        </div>
        <div class="list-container">
          <ListCard
            :index="3"
            title="UX Design"
            desc1="Information Architecture"
            desc2="Wireframing"
            desc3="Web &amp; Native App design"
            desc4="User Experience Design"
          />
        </div>
        <div class="list-container">
          <ListCard
            :index="4"
            title="UI Design"
            desc1="Motion Design"
            desc2="Interaction Design"
            desc3="Visual Design"
            desc4="Design Systems"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ListCard from "@/components/cards/ListCard.vue";

export default {
  name: "ServiceList",
  props: {
    index: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      padding: '',
      bgColor: '',
      id: ''
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
  margin-top: 0rem;
}

.list-container {
  width: 50%;
}

.list-container {
  padding-right: 2rem;
}

@media only screen and (max-width: 1000px) {
  .list-container {
    width: 50%;
  }

  .section-headline {
    text-align: left;
  }
}

@media only screen and (max-width: 540px) {
  .list-container {
    width: 100%;
  }
}
</style>
