<template>
  <div
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="text-container container">

      <div class="fcol">
        <div class="frow" v-for="about in txtSummary" :key="about.id">
          <p class="subtext" v-html="about.pg"></p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Summary from "@/json/about.json";

export default {
  name: 'TextPG',
  props: {
  },
  data() {
    return {
      padding: '',
      bgColor: '',
      id: '',
      txtSummary: Summary,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-headline {
  margin-bottom: 2rem;
  color: #000;
}

.frow {
  justify-content: flex-end;
}

.subtext {
  font-size: 1.25rem;
  font-weight: 400;
  color: #000;
  width: 100%;
}

.frow:nth-child(1n) {
  margin-bottom: 2rem;
}

.frow:last-child {
  margin-bottom: 0rem;
}


@media only screen and (max-width: 980px) {
  .subtext {
    width: 100%;
  }
}

</style>
