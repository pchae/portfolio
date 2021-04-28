<template>
  <div :id="[id]" class="container-xl parallax">
    <div :class="[cover]"></div>
  </div>
</template>

<script>
export default {
  name: "ParallaxImage",
  props: {
    imgSrc: {
      type: String,
      default: "",
    },
    imgAlt: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      cover: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subtext {
  font-weight: 400;
  color: #181818;
}

.media img {
  display: block;
  width: 100%;
  margin: 0;
}

.parallax {
  min-height: 800px;
  /* Parallax scroll */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.outlander {
  background-image: url("~@/assets/project/starz/landscape_outlander.jpg");
}

.blacksail {
  background-image: url("~@/assets/project/starz/blacksail.jpg");
}

.ag2 {
  background-image: url("~@/assets/project/starz/americangods2.jpg");
}

</style>
