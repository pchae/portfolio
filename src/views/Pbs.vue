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
      title="Introducing an iconic public broadcaster to Windows"
      subhead=""
    />

    <ArticleDetails
      id="detail"
      class="pad3 b2"
    />


    <ImageBlock
      id="header"
      class=" b2"
      img-src="project/pbs/header.jpg"
      img-alt="PBS header image"
    />


    <textblock
      id="intro"
      class="pad2 b2"
      intro="Overview"
      desc="PBS is a non-profit American public broadcaster and a prominent provider of educational shows including Sesame Street, Downton Abbey and Mind of a Chef. However, even with 80% household viewership in the United States, they needed a digital presence to maintain relevance."
    />

    <MediaBlock
      id="featured-show"
      class="pb5 b2"
      subline=""
      img-src="project/pbs/featured.jpg"
      img-alt="Featured Shows layout for PBS on Surface tablets."
    />


    <textblock
      id="Objectives"
      class="pad2 b2"
      intro="Objectives"
      desc="The Digiflare team invited me to help shape the user experience and visual design of a new responsive streaming app for PBS. Unlike typical responsive design projects, this needed to be future-ready in order to scale across Microsoft's current and unreleased Surface tablet devices while combining the PBS brand with Microsoft's Metro design language."
    />


    <MediaBlock
      id="surface-home-hub"
      class="pb5 b2"
      subline=""
      img-src="project/pbs/home_hub.jpg"
      img-alt="Home Hub showing expanded menu."
    />

    <MediaBlock
      id="surface-resume"
      class="pb5 b2"
      subline=""
      img-src="project/pbs/history.jpg"
      img-alt="Previously watched: Resume interface."
    />


    <MediaBlock
      id="surface-show-detail"
      class="pb5 b2"
      subline=""
      img-src="project/pbs/show_detail.jpg"
      img-alt="Show Details interface."
    />


    <MediaBlock
      id="surface-playback"
      class="pb5 b2"
      subline=""
      img-src="project/pbs/playback.jpg"
      img-alt="Video Player interface."
    />


    <textblock
      id="caption-phone"
      class="pad2 b2"
      intro="Lumia Phones"
      desc="The apps were required to have responsive designs that dynamically scaled from Lumia phone resolutions all the way up to 2K on Surface tablets and Windows PCs. We achieved this by using a Base-2 grid system which enabled us to maintain a consistent look while scaling across devices."
    />

    <MediaBlock
      id="ui-lumia"
      class=" b2"
      subline=""
      img-src="project/pbs/lumia.jpg"
      img-alt="Misc screens for Lumia phones."
    />


    <textblock
      id="caption-outcome"
      class="pad5 b2"
      intro="Outcome"
      desc="The app was successfully launched in 2016 and featured on Microsoft's Windows Experience Blog."
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
        client: "Public Broadcasting Service, Digiflare",
        year: "2014",
        role: "Sr. UX/UI Designer",
        result: [
          "Featured on Microsoft's Windows Experience Blog.",
          "Launched in 2016."
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
