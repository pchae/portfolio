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

    <IntroBlock
      id="title"
      class="pt120 b4"
      headline="My focus is on art, design, and technology as well as when, where, and how they affect everyday life."
    />

    <TextPG
      id="about"
      class="pb5 b4"
    />


    <Clientgrid
      id="clientlist"
      class="pad5 b4"
    />

    <Footer
      id="footer"
      class="b1"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/navigation/Navigation.vue";
import NavMobile from "@/components/navigation/nav_mobile.vue";
import IntroBlock from "@/components/layouts/IntroBlock.vue";
import TextPG from "@/components/layouts/text_paragraph.vue";
import Clientgrid from "@/components/clients/Clientlist.vue";
import Footer from "@/components/navigation/Footer.vue";
import Summary from "@/json/about.json";

export default {
  data: () => {
    return {
      mobileView: false,
      txtSummary: Summary,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 800;
    },
  },

  name: "Info",
  components: {
    Nav,
    NavMobile,
    IntroBlock,
    TextPG,
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

provide() {
    return {
      about: [
        {
          id: "0",
          pg: "As an 80s kid, I hold a unique perspective due to maturing in parallel with the shift from analog to digital technologies. The result is that I'm able to bridge the cultural and ideological gaps between older generations and today's youth.",
        },
        {
          id: "1",
          pg: "Over the past decade I've designed and built solutions for North American digital agencies, brands, startups, FinTech and Software as a Service platforms. My Design process incorporates Human-centered design principles, Agile Manifesto, Scalable Design systems, and Mindful management.",
        },
        {
          id: "2",
          pg: "Platforms I've designed for include: Android, iOS, Roku, Amazon Fire TV, Smart TVs, Playstation, Windows Devices, and enterprise SaaS.",
        },
      ],
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
