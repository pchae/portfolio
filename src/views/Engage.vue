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

    <ArticleHeader
      id="headline"
      class="pt120 b4"
      title="Modernizing social content for Enterprise SaaS"
      subhead="Engage is a multi-channel social media engagement tool used by news media, sports teams and brands to promote live dynamic content and drive audience participation."
    />

    <ImageBlock
      id="header-mockup"
      class=" b4"
      img-src="project/engage/landscape.jpg"
      img-alt="Starz header image"
    />

    <ArticleDetails
      id="detail"
      class="pad3 b4"
    />


    <textblock
      id="caption-intro"
      class="pad2 b4"
      intro="Overview"
      desc="Upon joining as Design Lead, I made it a priority to establish a close relationship with Customer Support Managers and their clients. By taking the time to address outstanding issues and expected timelines, we were able to create a buffer that allowed us to meet the business demands of simultaneously overhauling the user experiences of multiple SaaS products while continuing to add value to their legacy versions."
    />


    <MediaBlock
      id="ui-mobile-apps"
      class="pb5 b4"
      subline="ABOVE: Original version of Engage's Content Studio web app."
      img-src="project/engage/engage-old_stream.png"
      img-alt="Lorem ipsum"
    />


    <textblock
      id="caption-tech-debt"
      class="pad2 b4"
      intro="Challenges"
      desc="Over the years, the web app went through several redesigns that had not been fully implemented and the source code to the native mobile apps had been lost. The Engineering team recommended building a Progressive Web App (PWA) to replace the mobile apps, leverage the team's expertise, and have a shared codebase for both mobile platforms. This would also allow us to refactor the web application at the feature level without negatively impacting the experience for clients."
    />

    <MediaBlock
      id="ui-pwa1"
      class="pb5 b4"
      subline=""
      img-src="project/engage/stream.jpg"
      img-alt="Engage Content Studio PWA screens"
    />


    <textblock
      id="caption-analytics"
      class="pad2 b4"
      intro="Analytics"
      desc="I worked with Product owners to introduce and configure Pendo.ai as our primary measurement tool across the organization. This allowed us to accurately validate high traffic features, identify pain points, and isolate unused features to sunset. Meanwhile, initiatives like client outreach with CSMs allowed us to uncover new issues which led to a reprioritization of the roadmap."
    />

    <MediaBlock
      id="analytics-pendo"
      class="pb5 b4"
      subline=""
      img-src="project/engage/pendo.jpg"
      img-alt="Pendo analytics dashboard"
    />


    <textblock
      id="caption-visual-design"
      class="pad2 b4"
      intro="Design Process"
      desc="A separate audit was initiated to identify common elements between the SaaS platforms as well as document their usage patterns. We also established reusable patterns, common atomic elements, and where responsive design was needed. Once the core user flows were defined, sketches and mid-fidelity wireframes were produced which incorporated best practices from Apple's Human Interface Guidelines, Google's Material Design, and 8pt Grid Systems. The core components formed the foundation of the Design System that would be used to align the company's products."
    />



    <textblock
      id="caption-testing"
      class="pad2 b4"
      intro="Usability Testing"
      desc="To validate each user story, I created a series of user flows and interactive prototypes to document and test conditional logic, complex micro-interactions, and dynamic workflows. Validation was done in-house with clients and via remote tools like usertesting.com."
    />

    <MediaBlock
      id="ui-invision"
      class="pb5 b4"
      subline="ABOVE: Usability testing session of the Progressive Web App (PWA) for Content Studio. We simulated the streamlined features and workflows with the goal of simplifying how clients moderated fan engagement across Social Media streams for live events."
      img-src="project/engage/prototype.jpg"
      img-alt="Usability Testing session"
    />


    <textblock
      id="caption-client-requests"
      class="pad2 b4"
      intro="Client Requests"
      desc="The sales-focused nature of the company created a continuous stream of unique feature requests from clients like DELL EMC and Redbull. One of Dell's requests (shown below) was to create a new modular and embeddable experience linking live streams with Engage's social media integrations."
    />

    <MediaBlock
      id="ui-dellemc"
      class="pb5 b4"
      subline=""
      img-src="project/engage/engage-new_ui.jpg"
      img-alt="DELL EMC livestream UI"
    />


    <textblock
      id="caption-extras"
      class="pad2 b4"
      intro="Design System"
      desc="I collaborated with the Frontend development leads to introduce a Design-to-Dev process involving early technical consultations, design walkthroughs, living documentation in Confluence, and a standardized asset delivery process. We distributed pixel perfect designs from Sketch to Zeplin which were recreated as a shared library of React components. This fostered synergy between teams and led to a net reduction in development time, QA testing, and bugs produced each sprint."
    />

    <MediaBlock
      id="social-cards1"
      class="pb2 b4"
      subline=""
      img-src="project/engage/card_spec1.jpg"
      img-alt="Design system Social media components"
    />

    <MediaBlock
      id="social-cards2"
      class="pb2 b4"
      subline=""
      img-src="project/engage/card_spec2.jpg"
      img-alt="Design system Social media components"
    />

    <MediaBlock
      id="social-cards3"
      class=" b4"
      subline=""
      img-src="project/engage/card_spec3.jpg"
      img-alt="Design system Social media components"
    />

    <textblock
      id="caption-outcome"
      class="pad5 b4"
      intro="Outcome"
      desc="Implementing DesignOps led to a $96,000 USD reduction in Product Design stack & Engineering expenses across the organization. The inclusion of the Design System increased front-end development velocity by 20% and the redesign beta for Engage's mobile experience (Content Studio) led to an 11% increase in client contract renewals."
    />

    <Footer id="footer" class="b1" />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/navigation/Navigation.vue";
import NavMobile from "@/components/navigation/NavigationMobile.vue";
import ArticleHeader from "@/components/layouts/article_header.vue";
import ArticleDetails from "@/components/layouts/article_details.vue";
import ImageBlock from "@/components/layouts/image_block.vue";
import MediaBlock from "@/components/layouts/MediaBlock.vue";
import textblock from "@/components/layouts/article_text_block.vue";
import Footer from "@/components/navigation/Footer.vue";

export default {
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
    MediaBlock,
    textblock,
    Footer,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Phil Choi",
    // all titles will be injected into this template
    titleTemplate: "%s - Engage",
  },
  provide() {
    return {
      workInfo: {
        client: "Dell EMC, Redbull, USA Today, Agence France-Presse, MLB, NFL",
        year: "2018-2019",
        role: "User Experience, Prototyping, UI Design, Manager",
        result: [
          "$96,000 USD reduction in tech stack expenses.",
          "11% increase in client contract renewals.",
          "UX/UI overhaul of Engage's mobile and desktop experiences."
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
