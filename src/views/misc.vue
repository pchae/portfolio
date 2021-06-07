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
      title="Misc projects"
      subhead=""
    />


    <textblock
      id="intro"
      class="pad2 b2"
      intro="Overview"
      desc="Native app and responsive web projects from 2014 to 2021."
    />


    <ImageBlock
      id="ui-cnn1"
      class="b2"
      img-src="project/misc/cnn.jpg"
      img-alt="REPLACE ME."
    />

    <ImageBlock
      id="ui-cnn2"
      class="b2"
      img-src="project/misc/cnn2.jpg"
      img-alt="REPLACE ME."
    />

    <ImageBlock
      id="ui-cnn3"
      class="pb5 b2"
      img-src="project/misc/cnn3.jpg"
      img-alt="REPLACE ME."
    />

    <ImageBlock
      id="ui-bmo"
      class="pb5 b2"
      img-src="project/misc/bmo.jpg"
      img-alt="REPLACE ME."
    />

    <ImageBlock
      id="ui-dfs"
      class="pb5 b2"
      img-src="project/misc/dfs.jpg"
      img-alt="REPLACE ME."
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
import ImageBlock from "@/components/layouts/image_block.vue";
import textblock from "@/components/layouts/article_text_block.vue";
import Contact from "@/components/navigation/contact.vue";
import Footer from "@/components/navigation/footer.vue";

import { defineComponent, computed, reactive } from 'vue';
import { useHead } from "@vueuse/head";

export default {
// Page meta tags
setup() {
    const siteData = reactive({
      title: `Phil Choi - Misc Projects`,
      description: `Phil Choi - Misc native and web app projects`,
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

  name: "Misc",
  components: {
    Nav,
    NavMobile,
    ArticleHeader,
    ImageBlock,
    textblock,
    Contact,
    Footer,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Phil Choi",
    // all titles will be injected into this template

    titleTemplate: "%s - Misc Projects",
  },
  provide() {
    return {
      workInfo: {
        client: "SPC, BMO, SDM, GLX",
        year: "2014 - 2021",
        role: "Sr. UX/UI Designer, Design Lead",
        result: [
          "",
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
