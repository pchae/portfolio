<template>
  <div>
    <Nav
      id="Nav"
      tColor="bk"
      bgColor="b4"
      v-if="!mobileView"
    />

    <NavMobile
      id="NavMobile"
      tColor="bk"
      bgColor="b4"
      v-if="mobileView"
    />

    <IntroBlock
      id="title"
      class="pt120 b4"
      headline="My focus is on art, design, and technology as well as when, where, and how they affect everyday life."
    />

    <TextPG
      id="about"
      class="pb5 b4"
    />


    <Clientgrid
      id="clientlist"
      class="pad5 b4"
    />

    <Footer
      id="footer"
      class="b1"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/navigation/Navigation.vue";
import NavMobile from "@/components/navigation/nav_mobile.vue";
import IntroBlock from "@/components/layouts/IntroBlock.vue";
import TextPG from "@/components/layouts/text_paragraph.vue";
import Clientgrid from "@/components/clients/Clientlist.vue";
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

  name: "Info",
  components: {
    Nav,
    NavMobile,
    IntroBlock,
    TextPG,
    Clientgrid,
    Footer,
  },

  computed: {
  },

  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Phil Choi",
    // all titles will be injected into this template
    titleTemplate: "%s - Info",
  },

  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
