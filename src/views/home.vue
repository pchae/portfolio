<template>
  <div>
    <Nav
      t-color="bk"
      bg-color="b2"
      v-if="!mobileView"
    />

    <NavMobile
      t-color="bk"
      bg-color="b2"
      v-if="mobileView"
    />

    <ImageGrid
      id="projects"
      class="pt12 b2"
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
import ImageGrid from "@/components/layouts/image_grid.vue";
import Contact from "@/components/navigation/contact.vue";
import Footer from "@/components/navigation/footer.vue";

import { defineComponent, computed, reactive } from 'vue';
import { useHead } from "@vueuse/head";

export default {
// Page meta tags
setup() {
    const siteData = reactive({
      title: `Phil Choi - Product Designer`,
      description: `Phil Choi - Product Design portfolio`,
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
      mobileView: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 800;
    },
  },

  name: "Home",

  components: {
    Nav,
    NavMobile,
    ImageGrid,
    Contact,
    Footer,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Phil Choi",
    // all titles will be injected into this template
    titleTemplate: "%s - Product Design",
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
