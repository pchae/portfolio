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
      title="Redefining the way we watch TV"
      subhead=""
    />


    <ArticleDetails
      id="detail"
      class="pad2 b2"
    />


    <ImageBlock
      id="header-mockup"
      class="pb5 b2"
      img-src="project/starz/movie.jpg"
      img-alt="Starz header image"
    />


    <textblock
      id="caption-intro"
      class="pad2 b2"
      intro="Overview"
      desc="Starz is an American premium cable TV network competing with Netflix, HBO and Showtime. In an attempt to keep up with their rivals, Starz had previously launched streaming apps but struggled with activations and growth. It was clear they needed a fresh perspective and business model, one that would resonate with consumers by catering to diverse lifestyles and needs."
    />

    <ImageBlock
      id="ui-promo-image"
      class="pb5 b2"
      img-src="project/starz/mock-display.jpg"
      img-alt="Starz TV product mockup"
    />

    <textblock
      id="caption-challenge-one"
      class="pad2 b2"
      intro="Objectives"
      desc="The goals of the team were to design, build, and deploy 3 versions of the app in near simultaneous launch windows. The end to end design was alloted 3 months to produce Roku, Amazon FireTV and Samsung SmartTVs experiences which were all new platforms for the Digiflare team."
    />


    <textblock
      id="caption-auth1"
      class="pt2 b2"
      intro="Authentication"
      desc="The client’s earlier attempts at online streaming utilized a TV Everywhere model. This meant that users had to authenticate themselves with account credentials from cable providers in order to access the service. This process was cumbersome and created a high barrier to entry which resulted in low completion rates."
    />

    <textblock
      id="caption-auth2"
      class="pad2 b2"
      intro=""
      desc="We proposed an open model that welcomed non-cable subscribers, simplified user flows, and offered complete access to the Starz catalog. This was supported by our team's market research and focus groups which indicated that linear cable TV experiences were falling out of favour with audiences due to busy, unpredictable schedules and inflexible program packages."
    />

    <ImageBlock
      id="diagram-authenticate"
      class=" b2"
      img-src="project/starz/auth.jpg"
      img-alt="User authentication flow diagram"
    />

    <ImageBlock
      id="ui-authenticate"
      class="pad2 b2"
      img-src="project/starz/wire-welcome.jpg"
      img-alt="Lorem ipsum"
    />

    <MediaBlock
      id="ui-authenticate"
      class="pb5 b2"
      subline="Our solution removed the need for usernames, email addresses, and cable provider account info by allowing signups to be done in the browser while only requiring a 6 digit access code to pair the device."
      img-src="project/starz/wire-activate.jpg"
      img-alt="Lorem ipsum"
    />

    <textblock
      id="caption-wf1"
      class="pt2 b2"
      intro="High fidelity wireframes"
      desc="To save time and minimize errors, I built a set of responsive grids and reusable components based on Starz's CDN and each platform’s SDK. This accounted for predefined asset dimensions, Action & Title Safe zones, and unique platform requirements."
    />

    <textblock
      id="caption-wf2"
      class="pad2 b2"
      intro=""
      desc="The components allowed us to work at a high fidelity and sped up the production of consistent, accurate layouts. Since measurements were baked in, it also facilitated a quick turn-around time for creating production-ready UI elements."
    />

    <MediaBlock
      id="wf-home-roku"
      class="pb5 b2"
      subline="Roku - Home Hub wireframe"
      img-src="project/starz/wire-feature-roku.jpg"
      img-alt="Roku - Home user interface wireframe"
    />

    <MediaBlock
      id="wf-home-samsung"
      class="pb5 b2"
      subline="Samsung SmartTV - Home Hub wireframe"
      img-src="project/starz/wire-feature-samsung.jpg"
      img-alt="SmartTV - Home user interface wireframe"
    />

    <MediaBlock
      id="wf-home-amazon"
      class="pb5 b2"
      subline="Amazon FireTV - Home Hub wireframe"
      img-src="project/starz/wire-feature-firetv.jpg"
      img-alt="FireTV - Home user interface wireframe"
    />


    <textblock
      id="caption-show-detail"
      class="pad2 b2"
      intro="Show Details"
      desc=""
    />

    <MediaBlock
      id="wf-show-roku"
      class="pb5 b2"
      subline="Roku - Show Details wireframe"
      img-src="project/starz/wire-show-roku.jpg"
      img-alt="Roku - Show Details UI wireframe"
    />

    <MediaBlock
      id="wf-show-samsung"
      class="pb5 b2"
      subline="Samsung SmartTV - Show Details wireframe"
      img-src="project/starz/wire-show-samsung.jpg"
      img-alt="Samsung SmartTV - Show Details UI wireframe"
    />

    <MediaBlock
      id="wf-show-amazon"
      class="pb5 b2"
      subline="Amazon FireTV - Show Details wireframe"
      img-src="project/starz/wire-show-firetv.jpg"
      img-alt="Amazon FireTV - Show Details UI wireframe"
    />

    <textblock
      id="caption-visual-design"
      class="pt2 b2"
      intro="Visual Design"
      desc="We created a dark, minimalist user interface with high contrast ratios to place emphasis on the poster art and reduce eye strain. It was also essential that we tried to capture the essence of going to a movie theatre while incorporating Starz branding."
    />

    <textblock
      id="caption-visual-design2"
      class="pad2 b2"
      intro=""
      desc="An often overlooked detail was our inclusion of developer input during the early design solutioning sessions. We created a feedback loop that enabled us to quickly iterate on design patterns and build a MVP ahead of schedule. This also meant our team could make informed technical decisions from the start and avoid creating experiences that could negatively affect performance."
    />

    <MediaBlock
      id="ui-feature-roku"
      class="pb5 b2"
      subline="Roku - Home Hub"
      img-src="project/starz/ui-feature-roku.jpg"
      img-alt="Roku - Feature Home UI mockup"
    />

    <MediaBlock
      id="ui-feature-samsung"
      class="pb5 b2"
      subline="Samsung SmartTV - Home Hub"
      img-src="project/starz/ui-feature-samsung.jpg"
      img-alt="Samsung SmartTV - Feature Home UI mockup"
    />

    <MediaBlock
      id="ui-feature-amazon"
      class="pb5 b2"
      subline="Amazon FireTV - Home Hub"
      img-src="project/starz/ui-feature-firetv.jpg"
      img-alt="Amazon FireTV - Feature Home UI mockup"
    />

    <textblock
      id="caption-movie-detail"
      class="pad2 b2"
      intro="Movie Details"
      desc="The Movie Details layouts had similar bandwidth requirements for the Show Details. It was also essential that we tried to capture the essence of going to a movie theatre."
    />

    <MediaBlock
      id="ui-movie-roku"
      class="pb5 b2"
      subline="Roku - Movie Details UI. The 1st gen. hardware was relatively weak and provided us with a 10MB buffer to work with. Fullscreen images and animated backgrounds were out of the question, so our approach was to scale down the experience in favour of usability and performance."
      img-src="project/starz/ui-movie-roku.jpg"
      img-alt="Roku - Movie Details UI mockup"
    />

    <MediaBlock
      id="ui-movie-samsung"
      class="pb5 b2"
      subline="Samsung SmartTV - Movie Details UI. The SmartTV had an upscaled 720p (1280x720) resolution and its software comprised of web applications primarily built with HTML5, CSS, and JavaScript."
      img-src="project/starz/ui-movie-samsung.jpg"
      img-alt="Samsung SmartTV - Movie Details UI mockup"
    />

    <MediaBlock
      id="ui-movie-amazon"
      class="pb5 b2"
      subline="Amazon FireTV - Movie Details UI. The FireTV had the best hardware out of the 3 platforms, allowing us to create immersive pages with fullscreen animated backgrounds and previews."
      img-src="project/starz/ui-movie-firetv.jpg"
      img-alt="Amazon FireTV - Movie Details UI mockup"
    />

    <textblock
      id="caption-design-handoff"
      class="pad2 b2"
      intro="Design Handoff & Extras"
      desc="Automating design to development hand-off was a new concept at the time, but we took a calculated risk to get ahead of the deadlines by adding Zeplin.io to our design stack. This saved multiple sprints worth of time by automating measurement specifications and removed what would have been a costly bottleneck for development. The remaining time was used to create reusable components, add quality of life enhancements and personalization elements."
    />

    <MediaBlock
      id="ui-welcome-back"
      class="pb5 b2"
      subline="Amazon FireTV - Returning user interstitial screen which doubled as a hub to highlight new content on Starz."
      img-src="project/starz/ui-welcome_back-samsung.jpg"
      img-alt="Returning user interstitional UI mockup"
    />

    <MediaBlock
      id="ui-video_player"
      class="pb5 b2"
      subline="Amazon FireTV - video player UI and timeline scrubbing with animated Picture-in-Picture (PiP) previews."
      img-src="project/starz/ui-video_player.jpg"
      img-alt="Video player UI mockup"
    />

    <MediaBlock
      id="ui-search-results"
      class=" b2"
      subline="Samsung SmartTV - 'Are you still there?' feature. We spent a lot of time fine-tuning and usability testing the underlying mechanics and initiation time (2.5 hours) in order to create a balance of being useful while remaining unintrusive."
      img-src="project/starz/ui-still_watch-samsung.jpg"
      img-alt="Are you still watching? interstitial mockup"
    />


    <textblock
      id="caption-outcome"
      class="pad5 b2"
      intro="Outcome"
      desc="Successfully launched across 3 platforms in Q3 2016 with over 200,000 active subscriptions within the first 3 months. Active subscriptions increased to 2 Million in 12 months and generated $25.7 Million ARR."
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
      title: `Phil Choi - Starz Play`,
      description: `Phil Choi - Starz Play project`,
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

  name: "Starz",
  
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
    titleTemplate: "%s - Starz Play",
  },
  provide() {
    return {
      workInfo: {
        client: "STARZ, Digiflare",
        year: "2015",
        role: "Sr. UX/UI Designer",
        result: [
          "Generated $25.7 Million USD revenue in 2016.",
          "200 thousand active subscribers in the first 3 months.",
          "2 million active subscribers after 12 months.",
          "Developed new apps for Amazon FireTV, Samsung SmartTV, and Roku."
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
