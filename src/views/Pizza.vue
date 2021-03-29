<template>
  <div>
    <Nav
      id="navigation"
      tColor="bk"
      bgColor="b4"
    />

    <ArticleHeader
      id="headline"
      class="pt5 b4"
      title="Refining online ordering ux"
      subhead="Pizza Pizza is an Canadian QSR with one of the first online ordering apps."
    />

    <ArticleDetails
      id="detail"
      class="pad3 b4"
    />

    <ImageBlock
      id="header-mockup"
      class="pb2 b4"
      img-src="project/pizza/3phone1.jpg"
      img-alt="Starz header image"
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
      subline="Diagram of demographics and user needs"
      img-src="project/pizza/3phone2.jpg"
      img-alt="X. Lorem ipsum dolor sit amet. Contactless payment options."
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

    <MediaBlock
      id="ui-authenticate"
      class="pb5 b4"
      subline="X. Lorem ipsum dolor sit amet."
      img-src="project/pizza/wires_android.jpg"
      img-alt="Lorem ipsum"
    />


    <textblock
      id="caption-visual-design"
      class="pt4 b4"
      intro="Visual Design"
      desc="The client wanted to maintain creative direction control over the app look and feel. Had to work on slowly upgrading their design sensibilities and continuously homogonize experience to bring Android up to spec."
    />

    <MediaBlock
      id="wireframe-roku"
      class="pb5 b4"
      subline="X. Lorem ipsum dolor sit amet."
      img-src="project/pizza/pp_ipad_ios7_account_settings-Balance_Transfer.jpg"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="wireframe-samsung"
      class="pb5 b4"
      subline="X. Lorem ipsum dolor sit amet."
      img-src="project/pizza/pp_ipad_ios7_account_settings-registered.png"
      img-alt="Wireframe Show details"
    />


    <textblock
      id="caption-redemption"
      class="pt4 b4"
      intro="Redemption"
      desc="Main reason I was brought onto the team was to produce new features and value ads. Came up with pizza redemption similar to 10th purchase is free done by other QSRs. Also integrate more closely with Club 11-11 loyalty plans."
    />

    <MediaBlock
      id="wireframe-redemption"
      class="pb5 b4"
      subline="X. Lorem ipsum dolor sit amet."
      img-src="project/pizza/pp_ipad_ios7_account_settings-validate.png"
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
      class="pb2 b4"
      intro="GPS & Maps"
      desc="Added a store locator feature for pick-up and takeout orders to serve larger demographics and open up purchasing options facilitated through the app."
    />

    <MediaBlock
      id="ui-mobile"
      class="pb5 b4"
      subline="X. Lorem ipsum dolor sit amet."
      img-src="project/pizza/3phone3.jpg"
      img-alt="Development process diagram"
    />


    <textblock
      id="caption-french"
      class="pb2 b4"
      intro="French localization"
      desc="We needed to make significant changes to the old UI in order to facilitate French language translation as the average phrase and statement were 1.5 to 2x the length of English."
    />

    <MediaBlock
      id="ui-mobile"
      class="pb5 b4"
      subline="X. Lorem ipsum."
      img-src="project/pizza/phone_comps.jpg"
      img-alt="Search Results interface"
    />

    <MediaBlock
      id="ui-mobile2"
      class="pb5 b4"
      subline="X. Lorem ipsum."
      img-src="project/pizza/phone_comps.jpg"
      img-alt="Development process diagram"
    />

    <textblock
      id="caption-outcome"
      class="b4"
      intro="Outcome"
      desc="Successfully launched across 3 platforms in Q3 2016 with over 200,000 active subscriptions within the first 3 months. 2 Million active subscriptions after 12 months generating $25.7M in revenue for 2016."
    />

    <Footer id="footer" class="b4" />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/navigation/Navigation.vue";
import ArticleHeader from "@/components/layouts/article_header.vue";
import ArticleDetails from "@/components/layouts/article_details.vue";
import ImageBlock from "@/components/layouts/image_block.vue";
import MediaBlock from "@/components/layouts/MediaBlock.vue";
import textblock from "@/components/layouts/article_text_block.vue";
import Footer from "@/components/navigation/Footer.vue";

export default {
  name: "Pizza",
  components: {
    Nav,
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
        name: "light",
        client: "Pizza Pizza, Plastic Mobile",
        year: "2014",
        role: "Digital Designer",
        result: [
          "Increased revenue from $60 Million to $80 Million for 2015.",
          "50% of all sales shifted to digital platforms.",
          "Refactored UI, added Redemption, GPS, & French localization."
        ]
      }
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
