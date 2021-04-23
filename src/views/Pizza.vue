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
      subhead=""
    />

    <ImageBlock
      id="header-mockup"
      class=" b4"
      img-src="project/pizza/hero.jpg"
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
      desc="Pizza Pizza is one of Canada’s largest Quick Service Restaurant (QSR) chains and first to launch a pizza ordering iPhone app worldwide. While consulting at Plastic Mobile, I was the design lead for new features including the digital wallet, GPS location mapping, coupon redemptions, native French support, and a UI refresh to coincide with iOS 8."
    />

    <MediaBlock
      id="diagram-misc"
      class="pb5 b4"
      subline=""
      img-src="project/pizza/payment.jpg"
      img-alt="REPLACE ME"
    />

    <textblock
      id="caption-challenge-one"
      class="pad2 b4"
      intro="Objective"
      desc="The goals were to design, build, and deploy new features that would increase conversion rates, create repeatable purchasing habits, and introduce quality of life improvements that would refine the core experience."
    />

    <MediaBlock
      id="wires-pizza"
      class="pb5 b4"
      subline=""
      img-src="project/pizza/wire.png"
      img-alt="REPLACE ME"
    />


    <textblock
      id="caption-redemption"
      class="pad2 b4"
      intro="Redemption"
      desc="Before joining the team, Pizza Pizza's Club 11-11 memberships were limited to physical cards that could only be used in-store. By allowing customers to use their membership cards for online orders and redeem free menu items after every eleventh purchase, we increased annual revenue by $20 Million in 2015 and drove 50% of all sales to the digital platforms."
    />

    <MediaBlock
      id="wireframe-redemption1"
      class="pb1 b4"
      subline=""
      img-src="project/pizza/club.jpg"
      img-alt="REPLACE ME"
    />

    <MediaBlock
      id="wireframe-redemption2"
      class="pb1 b4"
      subline=""
      img-src="project/pizza/history.jpg"
      img-alt="REPLACE ME"
    />

    <MediaBlock
      id="wireframe-redemption2"
      class="pb5 b4"
      subline=""
      img-src="project/pizza/transfer.jpg"
      img-alt="REPLACE ME"
    />


    <textblock
      id="caption-gps"
      class="pad2 b4"
      intro="GPS & Maps"
      desc="Another key feature was the Store locator for pick-up and takeout orders which opened up the app to larger underserved demographics and open up purchasing options facilitated through the app."
    />

    <MediaBlock
      id="ui-maps"
      class="pb5 b4"
      subline=""
      img-src="project/pizza/maps.jpg"
      img-alt="REPLACE ME"
    />


    <textblock
      id="caption-outcome"
      class="pad5 b4"
      intro="Outcome"
      desc="The new features and UI refresh increased revenue by $20 Million to a total of $80 Million in 2015. It also successfully shifted 50% of all sales to the digital platforms and maintained a 4.5 average rating across app stores."
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
