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
      desc="Upon joining as Design Lead, I made it a priority to establish a close relationship with Customer Support Managers and their clients. By taking the time to address outstanding issues and expected timelines, we were able to successfully create a buffer that allowed us to meet the business demands of simultaneously overhauling the frontend and backend user experiences."
    />


    <MediaBlock
      id="ui-mobile-apps"
      class="pb5 b4"
      subline="ABOVE: Original version of Engage's Content Studio web app which suffered from divergent design patterns and outdated technology. Since the source code of the Android and iOS apps had been lost, we opted to save time and costs by rebuilding the experience as a React Native Progressive Web App (PWA)."
      img-src="project/engage/engage-old_stream.png"
      img-alt="Lorem ipsum"
    />


    <textblock
      id="caption-challenge-one"
      class="pad2 b4"
      intro="Challenges"
      desc="Old design work was half-implemented features and no documentation. lots of tech debt. Source code to the Engage native apps had been lost. Tech lead decision was to create a PWA experience to leverage existing developer expertise in Web and have shared code base for both mobile platforms. Had to refactor feature level without impacting entire experience or breaking for clients."
    />

    <MediaBlock
      id="diagram-misc"
      class="pb5 b4"
      subline="X. Lorem ipsum dolor sit amet."
      img-src="project/engage/stream.jpg"
      img-alt="Venn Diagram of user demographics and wants"
    />

    <MediaBlock
      id="ui-mobile-apps-new"
      class="pb5 b4"
      subline="4b. Progressive Web App using React to replace outdated native applications."
      img-src="project/engage/post.jpg"
      img-alt="Lorem ipsum"
    />


    <textblock
      id="caption-analytics"
      class="pad2 b4"
      intro="Analytics & Measurement"
      desc="I worked with Product owners to introduce and configure Pendo.ai as our primary measurement tool so that we could accurately validate high traffic areas, pain points, track progress, and unused features to sunset."
    />

    <MediaBlock
      id="analytics-pendo"
      class="pb5 b4"
      subline="ABOVE: The reporting tools from Pendo allowed us to better understand user workflows and isolate painpoints within Engage's experience that we were previously unaware of. This new knowledge led to a reprioritization of the roadmap."
      img-src="project/engage/pendo.jpg"
      img-alt="Wireframe Show details"
    />


    <textblock
      id="caption-visual-design"
      class="pad2 b4"
      intro="Design Process"
      desc="A separate audit was performed to identify common elements between the SaaS platforms as well as documenting their usage. A series of sketches were produced and recreated as a set of mid-fidelity wireframes based upon Apple's Human Interface Guidelines, Google's Material Design, and 8pt Grid Systems. This was used to map out each Web App's primary experiences, add responsiveness, identify reusable patterns, and define subtle aspects such as element spacing, dimensions, and typographic scales."
    />

    <MediaBlock
      id="wireframe-roku"
      class="pb5 b4"
      subline="ABOVE: One of the challenges was to juggle the redesign of the whitelabel tools and any unique feature requests for clients like DELL EMC and Redbull. We were tasked with creating a new modular and embeddable experience containing multi-source live streams and Engage's social media integrations."
      img-src="project/engage/engage-new_ui.jpg"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="wireframe-samsung"
      class="pb5 b4"
      subline="X. Lorem ipsum dolor sit amet."
      img-src="project/engage/post.jpg"
      img-alt="Wireframe Show details"
    />


    <textblock
      id="caption-extras"
      class="pb2 b4"
      intro="Usability Testing"
      desc="To validate each user story, I created a series of user flows and interactive prototypes to document and test conditional logic, complex micro-interactions, and dynamic workflows. Validation was done in-house with clients and with remote tools like usertesting.com."
    />

    <MediaBlock
      id="ui-welcome-back"
      class="pb5 b4"
      subline="ABOVE: Usability testing session of the Progressive Web App (PWA) for Content Studio. We simulated the streamlined features and workflows with the goal of simplifying how clients moderated fan engagement across Social Media streams for live events."
      img-src="project/engage/prototype.jpg"
      img-alt="Usability Testing session"
    />

    <textblock
      id="caption-extras"
      class="pad2 b4"
      intro="Design System"
      desc="I collaborated with the Frontend development leads to introduce a Design-to-Dev process involving early technical consultations, design walkthroughs, living documentation in Confluence, and a standardized asset delivery process. We distributed pixel perfect designs from Sketch to Zeplin which were built into reusable, shared React components. This fostered synergy between teams and led to a net reduction in development time, QA testing, and bugs produced each sprint."
    />

    <MediaBlock
      id="social-cards-mockup"
      class="pb1 b4"
      subline=""
      img-src="project/engage/card_spec1.jpg"
      img-alt="Search Results interface"
    />

    <MediaBlock
      id="social-cards-mockup"
      class="pb1 b4"
      subline=""
      img-src="project/engage/card_spec2.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="social-cards-mockup"
      class="pb5 b4"
      subline="X. Social Media card specs."
      img-src="project/engage/card_spec3.jpg"
      img-alt="Development process diagram"
    />

    <textblock
      id="caption-outcome"
      class="pb5 b4"
      intro="Outcome"
      desc="$96,000 USD reduction in Product Design stack & Engineering expenses by auditing and consolidating licenses and tools. Design System increased front-end development velocity by 20%. The redesign beta for Engage's mobile experience led to an 11% increase in client contract renewals."
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
