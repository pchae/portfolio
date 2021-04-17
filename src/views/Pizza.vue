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
      title="Optimizing North America’s first pizza ordering app."
      subhead="Pizza Pizza is Canada's largest Quick Service Restaurant (QSR) chain with over 700 locations across the country."
    />

    <ImageBlock
      id="header-mockup"
      class=" b4"
      img-src="project/pizza/hero.png"
      img-alt="Pizza Pizza header image"
    />

    <ArticleDetails
      id="detail"
      class="pad3 b4"
    />

    <textblock
      id="caption-intro"
      class="pad2 b4"
      intro="Overview"
      desc="Pizza Pizza is one of Canada’s largest Quick Service Restaurant (QSR) chains and first to launch a pizza ordering iPhone app worldwide. During my time at Plastic Mobile I designed and delivered new features like the digital wallet, coupon redemption, native French support, and a UI refresh to coincide with iOS 8."
    />

    <MediaBlock
      id="diagram-misc"
      class="pb5 b4"
      subline="X. Lorem ipsum dolor sit amet. Contactless payment options."
      img-src="project/pizza/payment.png"
      img-alt="Lorem ipsum."
    />

    <textblock
      id="caption-challenge-one"
      class="pad2 b4"
      intro="Challenges"
      desc="The goals of the team were to design, build, and deploy new updates to coincide with iOS 8. Annual refresh of the product. Increase conversions and create habits based on ordering pizza. Needed to work with difficult stakeholders and refine and guide their design sensibilities."
    />

    <MediaBlock
      id="ui-authenticate"
      class="pb5 b4"
      subline="X. Lorem ipsum dolor sit amet."
      img-src="project/pizza/wires_ios.jpg"
      img-alt="Lorem ipsum"
    />


    <textblock
      id="caption-visual-design"
      class="pad2 b4"
      intro="Visual Design"
      desc="The client wanted to maintain creative direction control over the app look and feel. Had to work on slowly upgrading their design sensibilities and continuously homogonize experience to bring Android up to spec."
    />

    <MediaBlock
      id="wireframe-roku"
      class="pb2 b4"
      subline=""
      img-src="project/pizza/transfer.jpg"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="wireframe-samsung"
      class="pb5 b4"
      subline="X. Lorem ipsum dolor sit amet."
      img-src="project/pizza/transfer.jpg"
      img-alt="Wireframe Show details"
    />


    <textblock
      id="caption-redemption"
      class="pad2 b4"
      intro="Redemption"
      desc="Main reason I was brought onto the team was to produce new features and value ads. Came up with pizza redemption similar to 10th purchase is free done by other QSRs. Also integrate more closely with Club 11-11 loyalty plans."
    />

    <MediaBlock
      id="wireframe-redemption"
      class="pb1 b4"
      subline=""
      img-src="project/pizza/history.png"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="wireframe-redemption2"
      class="pb5 b4"
      subline="X. Lorem ipsum dolor sit amet."
      img-src="project/pizza/pp_ipad_ios7_account_settings-history.png"
      img-alt="Wireframe Show details"
    />


    <textblock
      id="caption-gps"
      class="pad2 b4"
      intro="GPS & Maps"
      desc="Added a store locator feature for pick-up and takeout orders to serve larger demographics and open up purchasing options facilitated through the app."
    />

    <MediaBlock
      id="ui-mobile"
      class="pb5 b4"
      subline=""
      img-src="project/pizza/maps.png"
      img-alt="Find a location GPS designs"
    />


    <textblock
      id="caption-french"
      class="pad2 b4"
      intro="French localization"
      desc="We needed to make significant changes to the old UI in order to facilitate French language translation as the average phrase and statement were 1.5 to 2x the length of English."
    />

    <MediaBlock
      id="ui-mobile"
      class=" b4"
      subline="Many of the layouts had to be redesigned in order to be more modular and scale with French language support due to minimum 1.5x extra length for text."
      img-src="project/pizza/phone_comps.jpg"
      img-alt="Search Results interface"
    />

    <textblock
      id="caption-outcome"
      class="pad5 b4"
      intro="Outcome"
      desc="The UI refresh and personalization features increased revenue by $20MM to a total of $80MM in 2015. Successfully transferred 50% of all sales to the digital platforms and maintained a 4.5 average rating across app stores."
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

  name: "Pizza",
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
        client: "Pizza Pizza, Plastic Mobile",
        year: "2014",
        role: "Digital Designer",
        result: [
          "Increased revenue from $60 Million to $80 Million for 2015.",
          "50% of all sales shifted to digital platforms.",
          "4.5 avg. rating across app stores."
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
