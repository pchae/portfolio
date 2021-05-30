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
      title="Royal Bank of Canada"
      subhead=""
    />

    <ArticleDetails
      id="detail"
      class="pad2 b2"
    />


    <ImageBlock
      id="header"
      class="pb5 b2"
      img-src="project/fintech/wallet.jpg"
      img-alt="Header image"
    />

    <textblock
      id="intro"
      class="pad2 b2"
      intro="Overview"
      desc="Redesigns and conceptual design explorations for Royal Bank of Canada and Bank of Montreal's digital wallet apps and various digital channels."
    />

    <MediaBlock
      id="RENAME"
      class="pb5 b2"
      subline=""
      img-src="project/fintech/rewards.jpg"
      img-alt="RENAME"
    />

    <MediaBlock
      id="RENAME"
      class="pb5 b2"
      subline=""
      img-src="project/fintech/rewards.jpg"
      img-alt="RENAME"
    />

    <MediaBlock
      id="RENAME"
      class="pb5 b2"
      subline=""
      img-src="project/fintech/web.jpg"
      img-alt="responsive web layouts."
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
import MediaBlock from "@/components/layouts/MediaBlock.vue";
import textblock from "@/components/layouts/article_text_block.vue";
import Contact from "@/components/navigation/contact.vue";
import Footer from "@/components/navigation/footer.vue";

import { defineComponent, computed, reactive } from 'vue';
import { useHead } from "@vueuse/head";

export default {
// Page meta tags
setup() {
    const siteData = reactive({
      title: `Phil Choi - RBC`,
      description: `Phil Choi - Royal Bank of Canada projects`,
    })

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
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

  name: "Mma",
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
    titleTemplate: "%s - Fintech",
  },

  provide() {
    return {
      workInfo: {
        client: "Royal Bank of Canada, RBC Rewards",
        year: "2016",
        role: "Product Design Lead",
        result: [
          "2017 launch"
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
