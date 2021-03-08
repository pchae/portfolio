<template>
  <div>
    <Nav 
      d="navigation"
      tColor="wt"
    />

    <CoverFixed
      statement="Based in Toronto"
    />

    <Twocolthirds
      id="about"
      sectiontitle="section-title-dk"
      title="About"
      class="pd120 b4"
      DynamicComponent="Intro"
    />

    <Twocolthirds
      id="process"
      sectiontitle="section-title-lt"
      title="Methodology"
      class="pd120 b2"
      DynamicComponent=""
      subline="Lorem ipsum does this work"
      src="process.svg"
    />

    <ServiceList
      id="skillset"
      class="pd120 b2"
    />

    <Twocolthirds
      id="clientlist"
      sectiontitle="section-title-lt"
      title="Select clients"
      class="pd120 b1"
      DynamicComponent="Clientgrid"
    />

    <Footer
      id="footer"
      class="b1"
      legal="© 2014-2021"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/navigation/Navigation.vue";
import CoverFixed from "@/components/CoverFixed.vue";
import ServiceList from "@/components/layouts/ServiceList.vue";
import Twocolthirds from "@/components/layouts/Twocolthirds.vue";
import Footer from "@/components/navigation/Footer.vue";

export default {
  name: "Info",
  components: {
    Nav,
    CoverFixed,
    ServiceList,
    Twocolthirds,
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
