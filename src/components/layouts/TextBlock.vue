<template>
  <div
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg">
      <div class="fcol quote pt5">
        <h2 class="section-headline">
          {{ headline }}
        </h2>
        <div class="frow">
          <p class="subtext">
            {{ desc }}
          </p>
        </div>
        <div class="frow">
          <p
            class="subtext"
            v-html="para"
          />
        </div>
        <div class="frow">
          <p class="subtext">
            {{ platform }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    headline: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    para: {
      type: String,
      default: '',
    },
    platform: {
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
  margin-bottom: 2rem;
}

.frow {
  justify-content: flex-end;
}

.subtext {
  width: 50%;
}

.quote {
  min-height: 10rem;
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
