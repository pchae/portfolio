<template>
  <section
    :id="[sectionID]"
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
          <p class="subtext">
            {{ paragraph }}
          </p>
        </div>
        <div class="frow">
          <p class="subtext">
            {{ platform }}
          </p>
        </div>
      </div>
    </div>
  </section>
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
    paragraph: {
      type: String,
      default: '',
    },
    platform: {
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
  display: inherit;
  color: #000;
  font-weight: 400;
  width: 50%;
}

.quote {
  min-height: 10rem;
}

.frow:nth-child(1n) {
  margin-bottom: 1rem;
}

.subtext {
  font-size: 1.125rem;
}

@media only screen and (max-width: 980px) {
  .subtext {
    width: 100%;
  }
}

</style>
