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

    <ArticleHeader
      id="headline"
      class="pt120 b4"
      title="Introducing an iconic public broadcaster to Windows"
      subhead="The Digiflare team invited me to help shape the user experience and visual design of a new responsive streaming app for PBS."
    />

    <ImageBlock
      id="header"
      class=" b4"
      img-src="project/pbs/mockup.png"
      img-alt="PBS header image"
    />

    <ArticleDetails
      id="detail"
      class="pad3 b4"
    />

    <textblock
      id="intro"
      class="pad2 b4"
      intro="Overview"
      desc="PBS is a non-profit American public broadcaster and a prominent provider of educational shows including Sesame Street, Downton Abbey and Mind of a Chef. However, even with 80% household viewership in the United States, they needed a digital presence to maintain relevance."
    />

    <MediaBlock
      id="featured-show"
      class="pb5 b4"
      subline=""
      img-src="project/pbs/featured.jpg"
      img-alt="Featured Shows layout for PBS on Surface tablets."
    />


    <textblock
      id="challenge"
      class="pad2 b4"
      intro="Challenges"
      desc="The Digiflare team invited me to help shape the user experience and visual design of a new responsive streaming app for PBS. Unlike typical responsive design projects, this needed to be future-ready in order to scale across Microsoft's current and unreleased Surface tablet devices."
    />

    <MediaBlock
      id="design-guide"
      class="pb5 b4"
      subline=""
      img-src="project/pbs/lumia_light.jpg"
      img-alt="Microsoft Metro and Surface documentation"
    />


    <textblock
      id="visual-design"
      class="pad2 b4"
      intro="Visual Design"
      desc="The client wanted to maintain creative direction control over the app look and feel. Had to work on slowly upgrading their design sensibilities and continuously homogonize experience to bring Android up to spec."
    />

    <MediaBlock
      id="surface-home-hub"
      class="pb2 b4"
      subline=""
      img-src="project/pbs/home_hub.jpg"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="surface-resume"
      class="pb5 b4"
      subline=""
      img-src="project/pbs/history.jpg"
      img-alt="Previously watched: Resume layout for Surface tablets."
    />


    <textblock
      id="caption-shows"
      class="pad2 b4"
      intro="Show Details"
      desc="Main reason I was brought onto the team was to produce new features and value ads. Came up with pizza redemption similar to 10th purchase is free done by other QSRs."
    />

    <MediaBlock
      id="surface-show-detail"
      class="pb5 b4"
      subline=""
      img-src="project/pbs/show_detail.jpg"
      img-alt="Wireframe Show details"
    />


    <textblock
      id="caption-shows"
      class="pad2 b4"
      intro="Video Player"
      desc="Prioritize unintrusive, easy to understand iconography. Uses Microsoft's native controls."
    />

    <MediaBlock
      id="surface-playback"
      class="pb5 b4"
      subline=""
      img-src="project/pbs/playback.jpg"
      img-alt="Wireframe Show details"
    />


    <textblock
      id="caption-phone"
      class="pad2 b4"
      intro="Lumia Phones"
      desc="The apps were required to have responsive designs that dynamically scaled from Lumia phone resolutions all the way up to 2K on Surface tablets and Windows PCs. We achieved this by using a Base-2 grid system which enabled us to maintain a consistent look while scaling across devices."
    />

    <MediaBlock
      id="ui-lumia"
      class=" b4"
      subline=""
      img-src="project/pbs/lumia_light.jpg"
      img-alt="Various layouts for Lumia phones."
    />


    <textblock
      id="caption-outcome"
      class="pad5 b4"
      intro="Outcome"
      desc="Successfully launched in 2016. Featured on Microsoft Experience Blog?"
    />

    <Footer id="footer" class="b1" />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/navigation/Navigation.vue";
import NavMobile from "@/components/navigation/NavigationMobile.vue";
import ArticleHeader from "@/components/layouts/article_header.vue";
import ArticleDetails from "@/components/layouts/article_details.vue";
import ImageBlock from "@/components/layouts/image_block.vue";
import MediaBlock from "@/components/layouts/MediaBlock.vue";
import textblock from "@/components/layouts/article_text_block.vue";
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
          "Achieved a future-ready scaleable Design System.",
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
