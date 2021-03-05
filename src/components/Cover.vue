<template>
  <section
    :id="[sectionID]"
    :class="[padding, bgColor]"
  >
    <div class="cover">
      <div class="bg">
        <picture>
          <source
            media="(min-width: 769px)"
            :srcset="require('@/assets/headers/' + imgLandscape)"
            alt="landscape header bg image"
          >
          <img
            :src="require('@/assets/headers/' + imgPortrait)"
            alt="portrait header bg image"
          >
        </picture>
      </div>
      <div class="title">
        <div class="container">
          <h1 class="headline">
            {{ statement }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Cover',
  props: {
    statement: {
      type: String,
      required: true,
    },
    imgLandscape: {
      type: String,
      required: true,
    },
    imgPortrait: {
      type: String,
      required: true,
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cover {
  display: flex;
  background-color: #000018;
  flex-direction: column;
  justify-content: center;
}
.bg {
  background-image: 
}
.cover .bg picture img,
.cover .bg picture source {
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  opacity: 1;
}

.title {
  position: absolute;
  width: 100%;
  padding: 0 4rem;
  z-index: 100;
}

.container {
    max-width: 1400px;
    margin: auto;
}

.headline {
  font-size: 5rem;
  line-height: 1.5;
  font-weight: 800;
  color: #fff;
  text-align: center;
}

@media only screen and (max-width: 1080px) {
  .headline {
    font-size: 4rem;
  }
}

@media only screen and (max-width: 880px) {
  .headline {
    font-size: 3.5rem;
  }
}

@media only screen and (max-width: 640px) {
  .title {
    padding: 0 1rem;
  }
  .headline {
    font-size: 2.75rem;
  }
}

@media only screen and (max-width: 400px) {
  .headline {
    font-size: 2.5rem;
  }
}
</style>
