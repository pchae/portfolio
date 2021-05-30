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
      title="Modernizing social content for Enterprise SaaS"
      subhead=""
    />

    <ArticleDetails
      id="detail"
      class="pad2 b2"
    />

    <ImageBlock
      id="header-mockup"
      class="pb5 b2"
      img-src="project/engage/landscape.jpg"
      img-alt="Starz header image"
    />

    <textblock
      id="caption-intro"
      class="pad2 b2"
      intro="Overview"
      desc="Engage is a multi-channel social media engagement tool used by news media, sports teams and brands to promote live dynamic content and drive audience participation."
    />

    <textblock
      id="caption-intro"
      class="pad2 b2"
      intro="Objective"
      desc="Upon joining as Design Lead, I made it a priority to establish a close relationship with Customer Support Managers and their clients. By taking the time to address outstanding issues and expected timelines, we were able to create a buffer that allowed us to meet the business demands of simultaneously overhauling the user experiences of multiple SaaS products while continuing to add value to their legacy versions."
    />

    <MediaBlock
      id="ui-mobile-apps"
      class="pb5 b2"
      subline="ABOVE: Original version of Engage's Content Studio web app."
      img-src="project/engage/engage-old_stream.png"
      img-alt="Lorem ipsum"
    />

    <textblock
      id="caption-tech-debt"
      class="pad2 b2"
      intro="Challenges"
      desc="Over the years, the web app went through several redesigns that had not been fully implemented and the source code to the native mobile apps had been lost. The Engineering team recommended building a Progressive Web App (PWA) to replace the mobile apps, leverage the team's expertise, and have a shared codebase for both mobile platforms. This would also allow us to refactor the web application at the feature level without negatively impacting the experience for clients."
    />

    <MediaBlock
      id="ui-pwa1"
      class="pb5 b2"
      subline=""
      img-src="project/engage/stream.jpg"
      img-alt="Engage Content Studio PWA screens"
    />

    <textblock
      id="caption-analytics"
      class="pad2 b2"
      intro="Analytics"
      desc="I worked with Product owners to introduce and configure Pendo.ai as our primary measurement tool across the organization. This allowed us to accurately validate high traffic features, identify pain points, and isolate unused features to sunset. Meanwhile, initiatives like client outreach with CSMs allowed us to uncover new issues which led to a reprioritization of the roadmap."
    />

    <MediaBlock
      id="analytics-pendo"
      class="pb5 b2"
      subline=""
      img-src="project/engage/pendo.jpg"
      img-alt="Pendo analytics dashboard"
    />


    <textblock
      id="caption-testing"
      class="pad2 b2"
      intro="Usability Testing"
      desc="To validate each user story, I created a series of user flows and interactive prototypes to document and test conditional logic, complex micro-interactions, and dynamic workflows. Validation was done in-house with clients and via remote tools like usertesting.com."
    />

    <MediaBlock
      id="ui-invision"
      class="pb5 b2"
      subline="ABOVE: Usability testing session of the Progressive Web App (PWA) for Content Studio. We simulated the streamlined features and workflows with the goal of simplifying how clients moderated fan engagement across Social Media streams for live events."
      img-src="project/engage/prototype.jpg"
      img-alt="Usability Testing session"
    />

    <textblock
      id="caption-client-requests"
      class="pad2 b2"
      intro="Client Requests"
      desc="The sales-focused nature of the company created a continuous stream of unique feature requests from clients like DELL EMC and Redbull. One of Dell's requests (shown below) was to create a new modular and embeddable experience linking live streams with Engage's social media integrations."
    />

    <MediaBlock
      id="ui-dellemc"
      class="pb5 b2"
      subline=""
      img-src="project/engage/engage-new_ui.jpg"
      img-alt="DELL EMC livestream UI"
    />

    <textblock
      id="caption-extras"
      class="pad2 b2"
      intro="Design System"
      desc="A separate audit was initiated to identify common elements between the SaaS platforms as well as document their usage patterns. We also established reusable patterns, common atomic elements, and where responsive design was needed. Once the core user flows were defined, sketches and mid-fidelity wireframes were produced which incorporated best practices from Apple's Human Interface Guidelines, Google's Material Design, and 8pt Grid Systems. The core components formed the foundation of the Design System that would be used to align the company's products."
    />

    <MediaBlock
      id="social-cards1"
      class="pb2 b2"
      subline=""
      img-src="project/engage/1c5c9f6ce8f9817ca1740cc44a1df199.png"
      img-alt="Design system Social media components"
    />

    <textblock
      id="caption-extras"
      class="pad2 b2"
      intro="Social Media modules"
      desc="One of Engage's core features is the ability to add, curate, and moderate multiple social media sources into a single feed known as a 'vertical'. The app achieved this by recreating the layouts and populating the content with cached copies of the original social media posts from platforms like Twitter, Instagram, Youtube, and Facebook. All of the modules needed to be updated and redesigned to add responsiveness, pass WCAG 2.1 accessibility guidelines, and match the latest UIs of the social media platforms. Custom modules for video and editorial content were also designed and developed to fulfill requests from the company's media clients."
    />

    <MediaBlock
      id="social-cards2"
      class="pb2 b2"
      subline=""
      img-src="project/engage/card_spec2.jpg"
      img-alt="Design system Social media components"
    />

    <MediaBlock
      id="social-cards3"
      class=" b2"
      subline=""
      img-src="project/engage/social_cards.jpg"
      img-alt="Design system Social media components"
    />


    <textblock
      id="caption-outcome"
      class="pad5 b2"
      intro="Outcome"
      desc="Implementing DesignOps led to a $96,000 USD reduction in Product Design stack & Engineering expenses across the organization. The inclusion of the Design System increased front-end development velocity by 20% and the redesign beta for Engage's mobile experience (Content Studio) led to an 11% increase in client contract renewals."
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
      title: `Phil Choi - Engage`,
      description: `Phil Choi - Engage project`,
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

  name: "Engage",
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
    titleTemplate: "%s - Engage",
  },
  provide() {
    return {
      workInfo: {
        client: "Dell EMC, Redbull, USA Today, Agence France-Presse, MLB, NFL",
        year: "2018-2019",
        role: "Product Design Lead",
        result: [
          "$96,000 USD reduction in tech stack expenses.",
          "11% increase in client contract renewals.",
        ],
      },
    };
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
