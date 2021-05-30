<template>
  <div>
    <Nav
      id="Nav"
      t-color="bk"
      bg-color="b2"
      v-if="!mobileView"
    />

    <NavMobile
      id="NavMobile"
      t-color="bk"
      bg-color="b2"
      v-if="mobileView"
    />

    <ArticleHeader
      id="headline"
      class="pt120 b2"
      title="Optimizing North America’s first pizza ordering app."
      subhead=""
    />

    <ArticleDetails
      id="detail"
      class="pad2 b2"
    />


    <ImageBlock
      id="header-mockup"
      class="pb5 b2"
      img-src="project/pizza/header.jpg"
      img-alt="Pizza Pizza header image"
    />


    <textblock
      id="caption-overview"
      class="pad2 b2"
      intro="Overview"
      desc="Pizza Pizza is one of Canada’s largest Quick Service Restaurant (QSR) chains and first pizza ordering iPhone app. While consulting at Plastic Mobile, I was the design lead for the digital wallet, store locator, QR payments, Club 11-11, French support, and a UI refresh for iOS 8."
    />


    <textblock
      id="caption-payments"
      class="pad2 b2"
      intro="Contactless Payments"
      desc="We wanted to experiment with creating easier payment methods and took learnings from the adoption of QR codes in South Korea and Japan. This reduced a major source of friction by enabling users to complete every step of the ordering and payment process from within the app."
    />

    <ImageBlock
      id="ui-payments"
      class="pb5 b2"
      img-src="project/pizza/payment.jpg"
      img-alt="qr code payments"
    />


    <textblock
      id="caption-wallet"
      class="pad2 b2"
      intro="Digital Wallet"
      desc="The objective of the wallet was to create a hub for personalized digital coupons, add value to the Club 11-11 features, and test new simplified formats of the checkout flow."
    />

    <ImageBlock
      id="wf-wallet"
      class="pb5 b2"
      img-src="project/pizza/wallet.jpg"
      img-alt="digital wallet wireframes"
    />


    <textblock
      id="caption-redemption"
      class="pad2 b2"
      intro="Redemption"
      desc="Before joining the team, Pizza Pizza's Club 11-11 memberships were limited to physical cards that could only be used in-store. We integrated the membership cards to equalize the value proposition between ordering online vs in-store and create an access point to track rewards."
    />

    <ImageBlock
      id="wf-redemption1"
      class="pb5 b2"
      img-src="project/pizza/club.jpg"
      img-alt="club 11-11 registration interface"
    />

    <ImageBlock
      id="wf-redemption2"
      class="pb5 b2"
      img-src="project/pizza/history.jpg"
      img-alt="club 11-11 purchase history interface"
    />

    <ImageBlock
      id="wf-redemption2"
      class="pb5 b2"
      img-src="project/pizza/transfer.jpg"
      img-alt="club 11-11 account transfer interface"
    />

    <ColumnTwo
      id="ui-maps"
      class="pad5 b2"
      headline="Store locator"
      desc="Another key feature was the Store locator for pick-up and takeout orders which opened up the app to larger underserved demographics that prefered to visit locations in person and pay with cash."
      img-src="project/pizza/map.jpg"
      img-alt="store locator interface"
    />


    <textblock
      id="caption-outcome"
      class="pad5 b2"
      intro="Outcome"
      desc="The new features and UI refresh successfully shifted 50% of all sales to the digital platforms and increased revenue by $20 Million to a total of $80 Million in 2015. It also increased the average app store ratings to 4.5/5."
    />

    <Contact
      id="contact"
      class="b2"
    />

    <Footer
      id="footer"
      class="b2"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/navigation/nav.vue";
import NavMobile from "@/components/navigation/nav_mobile.vue";
import ArticleHeader from "@/components/layouts/article_header.vue";
import ArticleDetails from "@/components/layouts/article_details.vue";
import ImageBlock from "@/components/layouts/image_block.vue";
import textblock from "@/components/layouts/article_text_block.vue";
import ColumnTwo from "@/components/layouts/col_two.vue";
import Contact from "@/components/navigation/contact.vue";
import Footer from "@/components/navigation/footer.vue";

import { defineComponent, computed, reactive } from 'vue';
import { useHead } from "@vueuse/head";

export default {
// Page meta tags
setup() {
    const siteData = reactive({
      title: `Phil Choi - Pizza Pizza`,
      description: `Phil Choi - Pizza Pizza apps`,
    })

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          property: `description`,
          content: computed(() => siteData.description),
        },
      ],
    })
  },

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
    textblock,
    ColumnTwo,
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
        client: "Pizza Pizza, Plastic Mobile",
        year: "2014",
        role: "Digital Designer",
        result: [
          "$20 Million increase in revenue for 2015.",
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
