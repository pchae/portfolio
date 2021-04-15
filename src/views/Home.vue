<template>
  <div>
    <Nav
      tColor="bk"
      bgColor="b4"
      v-if="!mobileView"
    />

    <NavMobile
      tColor="bk"
      bgColor="b4"
      v-if="mobileView"
    />

    <ImageGrid id="projects" class="pt120 b4" />

    <Footer id="footer" class="b1" />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/navigation/Navigation.vue";
import NavMobile from "@/components/navigation/NavigationMobile.vue";
import ImageGrid from "@/components/layouts/ImageGrid.vue";
import Footer from "@/components/navigation/Footer.vue";

export default {
  data: () => {
    return {
      mobileView: false
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 800;
    },
  },

  name: "Home",
  components: {
    Nav,
    NavMobile,
    ImageGrid,
    Footer,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Phil Choi",
    // all titles will be injected into this template
    titleTemplate: "%s - Product Design",
  },

  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
