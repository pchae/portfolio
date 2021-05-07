<template>
  <section
    :id="[id]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg">
      <div class="frow">

        <div id="col-left" class="col-1">
          <div class="row1">
            <h3 class="section-headline">
              {{ headline }}
            </h3>
          </div>
          <div class="row2 pb2">
            <p class="subtext">
              {{ desc }}
            </p>
          </div>
        </div>

          <div id="col-right" class="col-2">
            <img :src="require('@/assets/' + imgSrc)" :alt="imgAlt" />
          </div>

      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ColumnTwo',
  props: {
    sectionID: {
      type: String,
      default: ''
    },
    headline: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    imgSrc: {
      type: String,
      default: ''
    },
    imgAlt: {
      type: String,
      default: ''
    },
  },
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

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.25rem;
}

.col-1 {
  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  padding: 0 2rem;
}

.col-2 {
  display: inherit;
  flex-direction: column;
  width: 50%;
  padding: 0 2rem;  
}

img {
  width: 100%;
}

a {
  text-decoration: underline 2px;
}


@media only screen and (max-width: 740px) {

  .frow {
    flex-direction: column;
  }

.col-1 {
  width: 100%;
  padding: 0rem;
  align-items: flex-start;
  justify-content: flex-start;
}

.col-2 {
  width: 100%;
  padding: 0rem;  
}

}
</style>
