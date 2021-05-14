<template>
  <div :id="[id]" :class="[padding, bgColor]">
    <div class="text-container container">
      <div class="fcol twothird">
        <div class="frow" v-for="item in about.about" :key="item.id">
          <p class="subtext" v-html="item.pg"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  name: "TextParagraph",

  computed: mapState({
    about: state => state.about
  }),

  data() {
    return {
      id: '',
      padding: '',
      bgColor: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-headline {
  margin-bottom: 2rem;
}

.frow {
  justify-content: flex-end;
}

.frow:nth-child(1n) {
  margin-bottom: 2rem;
}

.frow:last-child {
  margin-bottom: 0rem;
}

.twothird {
  width: 66%;
}

@media only screen and (max-width: 800px) {
  .twothird {
    width: 80%;
  }
}

@media only screen and (max-width: 640px) {
  .twothird {
    width: 100%;
  }
}
</style>
