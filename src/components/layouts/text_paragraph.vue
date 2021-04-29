<template>
  <div
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="text-container container">

      <div class="fcol">
        <div class="frow" v-for="item in about" :key="item.id">
          <p class="subtext" v-html="item.pg"></p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'TextPG',
  
  computed: mapState({
    about: state => state.about
  }),

  props: {
  },
  data() {
    return {
      padding: '',
      bgColor: '',
      id: '',
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
