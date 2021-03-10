<template>
  <section
    :id="[sectionID]"
    :class="[padding, bgColor]"
  >
    <div class="cover">
      <div class="bg tor">
      </div>
      <div class="title">
        <div class="container-lg">
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
  name: 'CoverFixed',
  props: {
    statement: {
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
  data() {
    return {
      bgImage: "@/assets/headers/toronto.jpg"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cover {
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 800px;
}
.bg {
  display: block;
  background-color: #000;
  width: 100%;
  height: 100%;
  min-height: 800px;
  opacity: 1;
}

.tor {
  background-image: url('~@/assets/headers/toronto.jpg');
  background-position: center;
  background-size: cover;
}

.title {
  position: absolute;
  width: 100%;
  padding: 0;
  z-index: 10;
}

.headline {
  font-size: 8rem;
  line-height: 1.2;
  font-weight: 800;
  color: #fff;
}

@media only screen and (max-width: 1080px) {
  .headline {
    font-size: 7rem;
  }
}

@media only screen and (max-width: 880px) {

}

@media only screen and (max-width: 640px) {
.cover {
  max-height: 680px;
}
  .headline {
    font-size: 5rem;
  }
}

@media only screen and (max-width: 400px) {
.cover {
  max-height: 600px;
}
  .headline {
    font-size: 4rem;
  }
}
</style>
