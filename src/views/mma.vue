<template>
  <div>

    <Nav
      id="Nav"
      tColor="bk"
      bgColor="b2"
      v-if="!mobileView"
    />

    <NavMobile
      id="NavMobile"
      tColor="bk"
      bgColor="b2"
      v-if="mobileView"
    />

    <ArticleHeader
      id="headline"
      class="pt120 b2"
      title="MMA / Fintech"
      subhead=""
    />

    <ArticleDetails
      id="detail"
      class="pad3 b2"
    />

    <textblock
      id="intro"
      class="pad2 b2"
      intro="Overview"
      desc="Various web and mobile projects for RBC and BMO."
    />

    <ImageBlock
      id="header"
      class="pb5 b2"
      img-src="project/mma/header.jpg"
      img-alt="header image"
    />

    <MediaBlock
      id="ui-lumia"
      class="pb5 b2"
      subline=""
      img-src="project/mma/mobile_a.jpg"
      img-alt="REPLACE"
    />

    <MediaBlock
      id="ui-lumia"
      class="pb5 b2"
      subline=""
      img-src="project/mma/mobile.jpg"
      img-alt="REPLACE"
    />


    <ImageBlock
      id="surface-home-hub"
      class="pb5 b2"
      subline=""
      img-src="project/mma/layout.png"
      img-alt="REPLACE"
    />

    <Contact id="contact" class="b2" />

    <Footer id="footer" class="b2" />

  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/navigation/Navigation.vue";
import NavMobile from "@/components/navigation/nav_mobile.vue";
import ArticleHeader from "@/components/layouts/article_header.vue";
import ArticleDetails from "@/components/layouts/article_details.vue";
import ImageBlock from "@/components/layouts/image_block.vue";
import MediaBlock from "@/components/layouts/MediaBlock.vue";
import textblock from "@/components/layouts/article_text_block.vue";
import Contact from "@/components/navigation/contact.vue";
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

  name: "PBS",
  components: {
    Nav,
    NavMobile,
    ArticleHeader,
    ArticleDetails,
    ImageBlock,
    MediaBlock,
    textblock,
    Contact,
    Footer,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Phil Choi",
    // all titles will be injected into this template
    titleTemplate: "%s - Pizza Pizza",
  },
  provide() {
    return {
      workInfo: {
        client: "",
        year: "2021",
        role: "Principle Designer",
        result: [
          "Currently in development.",
        ]
      }
    };
  },

  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
