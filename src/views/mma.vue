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
      title="Microservice based SaaS for Mixed Martial Arts"
      subhead=""
    />

    <ArticleDetails
      id="detail"
      class="pad2 b2"
    />


    <ImageBlock
      id="header"
      class="pb5 b2"
      img-src="project/mma/header.jpg"
      img-alt="Header image"
    />

    <textblock
      id="intro"
      class="pad2 b2"
      intro="Preview"
      desc="A Software as a Service (SaaS) suite of modular, cloud-based microservices aimed at modernizing real-time data and analytics for Mixed Martial Arts."
    />

    <MediaBlock
      id="RENAME"
      class="pb5 b2"
      subline=""
      img-src="project/mma/search.jpg"
      img-alt="search overlay UI"
    />

    <MediaBlock
      id="RENAME"
      class="pb5 b2"
      subline=""
      img-src="project/mma/stats.jpg"
      img-alt="Stats Overview UI"
    />

    <MediaBlock
      id="RENAME"
      class="pb5 b2"
      subline=""
      img-src="project/mma/signup.jpg"
      img-alt="Signup UI"
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
