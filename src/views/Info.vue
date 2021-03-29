<template>
  <div>
    <Nav 
      d="navigation"
      tColor="bk"
      bgColor="b4"
    />

    <IntroBlock
      id="headline"
      class="pad5 b4"
      headline="My focus is on art, design, and technology as well as when, where, and how they affect everyday life."
    />

    <Intro />

    <ServiceList
      id="skillset"
      class="pad5 b4"
    />

    <Clientgrid
      id="clientlist"
      sectiontitle="section-title-lt"
      title="Select clients"
      class=" b4"
    />

    <Footer
      id="footer"
      class="b4"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/navigation/Navigation.vue";
import IntroBlock from "@/components/layouts/IntroBlock.vue";
import Intro from "@/components/layouts/Intro.vue";
import ServiceList from "@/components/layouts/ServiceList.vue";
import Clientgrid from "@/components/clients/Clientlist.vue";
import Footer from "@/components/navigation/Footer.vue";

export default {
  name: "Info",
  components: {
    Nav,
    IntroBlock,
    Intro,
    ServiceList,
    Clientgrid,
    Footer,
  },

  computed: {

  },

  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Phil Choi",
    // all titles will be injected into this template
    titleTemplate: "%s - Info",
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
