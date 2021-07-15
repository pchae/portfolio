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

    <IntroBlock
      id="title"
      class="pt12 b2"
      headline="My focus is on art, design, and technology as well as when, where, and how they affect everyday life."
    />

    <TextParagraph
      id="about"
      class="pb5 b2"
    />

    <Clientlist
      id="clients"
      class="pad5 b2"
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
import IntroBlock from "@/components/layouts/IntroBlock.vue";
import TextParagraph from "@/components/layouts/text_paragraph.vue";
import Clientlist from "@/components/layouts/client.vue";
import Contact from "@/components/navigation/contact.vue";
import Footer from "@/components/navigation/footer.vue";

import { defineComponent, computed, reactive } from 'vue';
import { useHead } from "@vueuse/head";

export default {
// Page meta tags
setup() {
    const siteData = reactive({
      title: `About - Phil Choi`,
      description: `About Phil Choi, Product Designer based in Toronto`,
      ogdescription: `About Phil Choi, Product Designer based in Toronto`,
    })

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
        {
          name: `og:description`,
          content: computed(() => siteData.ogdescription),
        },
      ],
    })
  },

  data: () => {
    return {
      mobileView: false,
    };
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 800;
    },
  },

  name: "About",
  components: {
    Nav,
    NavMobile,
    IntroBlock,
    TextParagraph,

    Clientlist,
    Contact,
    Footer,
  },

  computed: {
  },

  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
