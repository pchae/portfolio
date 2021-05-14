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
      title="Project Preview: Mixed Martial Arts"
      subhead=""
    />

    <ArticleDetails
      id="detail"
      class="pad2 b2"
    />

    <textblock
      id="intro"
      class="pad2 b2"
      intro="Overview"
      desc="Below is a preview of visual designs for a Software as a Service (SaaS) MVP that aims to provide innovative user experiences that utilize a proprietary real-time stats and analytics API for live Mixed Martial Arts events. The project uses a Microservice architecture, domain-driven development principles, and modern frameworks like Express and Vue.js."
    />

    <ImageBlock
      id="header"
      class="pb5 b2"
      img-src="project/mma/signup.jpg"
      img-alt="Header image"
    />

    <MediaBlock
      id="RENAME"
      class="pb5 b2"
      subline=""
      img-src="project/mma/profile.jpg"
      img-alt="Stats Overview UI"
    />


    <Contact id="contact" class="b2" />

    <Footer id="footer" class="b2" />

  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/navigation/nav.vue";
import NavMobile from "@/components/navigation/nav_mobile.vue";
import ArticleHeader from "@/components/layouts/article_header.vue";
import ArticleDetails from "@/components/layouts/article_details.vue";
import ImageBlock from "@/components/layouts/image_block.vue";
import MediaBlock from "@/components/layouts/MediaBlock.vue";
import textblock from "@/components/layouts/article_text_block.vue";
import Contact from "@/components/navigation/contact.vue";
import Footer from "@/components/navigation/footer.vue";

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

  name: "mma",
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
    titleTemplate: "%s - MMA SaaS",
  },
  provide() {
    return {
      workInfo: {
        client: "N/A",
        year: "2021",
        role: "Product Design Lead",
        result: [
          "In development"
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
