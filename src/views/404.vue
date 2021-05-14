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
<div class="tall">
    <IntroBlock
      id="title"
      class="pt120 b2"
      headline="404"
      status="Page not found."
    />
</div>
    <Contact id="contact" class="b2" />

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
import Contact from "@/components/navigation/contact.vue";
import Footer from "@/components/navigation/footer.vue";

export default {
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

  name: "404",
  components: {
    Nav,
    NavMobile,
    IntroBlock,
    Contact,
    Footer,
  },

  computed: {
  },

  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Phil Choi",
    // all titles will be injected into this template
    titleTemplate: "404 Page not found",
  },

  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.tall {
  height: 100%;
  background-color: #000;
}

</style>
