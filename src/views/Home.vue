<template>
  <div>
    <Nav tColor="bk" bgColor="b2" v-if="!mobileView" />

    <NavMobile tColor="bk" bgColor="b2" v-if="mobileView" />

    <ImageGrid id="projects" class="pt120 b2" />

    <Footer id="footer" class="b2" />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/navigation/Navigation.vue";
import NavMobile from "@/components/navigation/nav_mobile.vue";
import ImageGrid from "@/components/layouts/image_grid.vue";
import Footer from "@/components/navigation/Footer.vue";

export default {
  data: () => {
    return {
      mobileView: false,
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
  provide() {
    return {
      projects: [
        {
          id: "0",
          to: "/starz",
          imgSrc: "thumbs/starz.jpg",
          imgAlt: "Starz Play",
          title: "Starz Play",
          desc: "Roku, Samsung SmartTV, Amazon FireTV",
        },
        {
          id: "1",
          to: "/pizza",
          imgSrc: "thumbs/pizza.jpg",
          imgAlt: "Pizza Pizza",
          title: "Pizza Pizza",
          desc: "iOS, Android",
        },
        {
          id: "2",
          to: "/engage",
          imgSrc: "thumbs/engage.jpg",
          imgAlt: "Scribblelive Engage",
          title: "Engage",
          desc: "PWA, Responsive Web",
        },
        {
          id: "3",
          to: "/pbs",
          imgSrc: "thumbs/pbs.jpg",
          imgAlt: "Public Broadcasting Service",
          title: "PBS",
          desc: "Microsoft Lumia & Surface",
        },
      ],
    };
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
