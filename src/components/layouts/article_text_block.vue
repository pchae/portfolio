<template>
  <div
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="container">
      <div class="fcol ">
        <h3 class="section-headline">
          {{ intro }}
        </h3>
        <div class="frow">
          <p class="subtext">
            {{ desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textblock',
  props: {
    intro: {
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
      id: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-headline {
}

.frow {
  justify-content: flex-start;
}

.frow:nth-child(1n) {
  margin-bottom: 2rem;
}

.frow:last-child {
  margin-bottom: 0rem;
}

@media only screen and (max-width: 980px) {

}

</style>
