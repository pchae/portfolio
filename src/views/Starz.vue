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
      title="Redefining the way we watch TV"
      subhead="Starz is an American premium cable TV network known for shows such as Outlander, Black Sails, Power, and American Gods."
    />

    <ImageBlock
      id="header-mockup"
      class=" b4"
      img-src="project/starz/movie.jpg"
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
      desc="Starz is an American premium cable TV network competing with Netflix, HBO and Showtime. In an attempt to keep up with their rivals, Starz had previously launched streaming apps but struggled with activations and growth. It was clear they needed a fresh perspective and business model, one that would resonate with consumers by catering to diverse lifestyles and needs."
    />

    <MediaBlock
      id="diagram-misc"
      class="pb5 b4"
      subline="Diagram of demographics and user needs"
      img-src="project/starz/mock-display.jpg"
      img-alt="Venn Diagram of user demographics and wants"
    />

    <textblock
      id="caption-challenge-one"
      class="pt2 b4"
      intro="Objectives"
      desc="The goals of the team were to design, build, and deploy 3 versions of the app in near simultaneous launch windows. The design time spanned 3 months for Roku, Amazong Fire TV and Samsung Smart TVs which were all new platforms for the Digiflare team.
      Design only had a short runway ahead of the Development which was performed almost simultaneously with quick iteration cycles."
    />

    <textblock
      id="solution-challenge-two"
      class="pad2 b4"
      intro=""
      desc="Started with Roku project. Created high fidelity specs based off SDKs to quickly vet code templates into proof of concept. Allowed team to stagger approach of user interface design across platforms. Prototyping allowed the team to identify any pain points in the experience and fill in additional screens or smooth out user flows. ** REWRITE **"
    />

    <MediaBlock
      id="diagram-process"
      class="pb5 b4"
      subline="Design process (optional maybe remove)"
      img-src="project/starz/process.jpg"
      img-alt="Product Design process"
    />

    <textblock
      id="caption-challenge-two"
      class="pt2 b4"
      intro="Authentication"
      desc="The client’s earlier attempts at online streaming utilized a TV Everywhere model. This meant that users had to authenticate themselves with account credentials from cable providers in order to access the service. This process was cumbersome and created a high barrier to entry which resulted in low completion rates."
    />

    <textblock
      id="solution-challenge-two"
      class="pad2 b4"
      intro=""
      desc="We proposed an open model that welcomed non-cable subscribers, simplified user flows, and offered complete access to the Starz catalog. This was supported by our team's market research and focus groups which indicated that linear cable TV experiences were falling out of favour with audiences due to busy, unpredictable schedules and inflexible program packages."
    />

    <ImageBlock
      id="diagram-auth-flow"
      class="pb5 b4"
      img-src="project/starz/authdiagram.jpg"
      img-alt="Authentication flow diagram"
    />

    <MediaBlock
      id="ui-authenticate"
      class="pad5 b4"
      subline="4b. Authentication Designs - Rather than require usernames, email addresses and long passwords, the new authentication allowed signup to be done in the browser while only requiring a 4 digit access code."
      img-src="project/starz/wire-welcome.jpg"
      img-alt="Lorem ipsum"
    />

    <MediaBlock
      id="ui-authenticate"
      class="pad5 b4"
      subline="4b. Authentication Designs - Rather than require usernames, email addresses and long passwords, the new authentication allowed signup to be done in the browser while only requiring a 4 digit access code."
      img-src="project/starz/wire-activate.jpg"
      img-alt="Lorem ipsum"
    />

    <textblock
      id="caption-wireframes"
      class="pt2 b4"
      intro="High fidelity wireframes"
      desc="To save time and minimize errors, I built a set of responsive grids and reusable components based on Starz's CDN and each platform’s SDK. This accounted for predefined asset dimensions, Action & Title Safe zones, and unique platform requirements."
    />

    <textblock
      id="caption-wireframes"
      class="pad2 b4"
      intro=""
      desc="The components allowed us to work at a high fidelity and sped up the production of consistent, accurate layouts. Since measurements were baked in, it also facilitated a quick turn-around time for creating production-ready UI elements."
    />

    <MediaBlock
      id="wireframe-roku"
      class="pb5 b4"
      subline="X. Feature - Roku Gen 1. Modest hardware capabilities and 10mb buffer limit didn't allow for expected features like carousels, fullscreen animated backgrounds. Each screen and subsequent sections required precaching to decrease slideshow style navigation."
      img-src="project/starz/wire-feature-roku.jpg"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="wireframe-samsung"
      class="pad5 b4"
      subline="X. Feature - Samsung Smart TV"
      img-src="project/starz/wire-feature-samsung.jpg"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="wireframe-amazon"
      class="pad5 b4"
      subline="X. Feature - Amazon Fire TV"
      img-src="project/starz/wire-feature-firetv.jpg"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="wireframe-roku"
      class="pad5 b4"
      subline="X. Show Details - Roku Gen 1"
      img-src="project/starz/wire-show-roku.jpg"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="wireframe-samsung"
      class="pad5 b4"
      subline="X. Show Details - Samsung Smart TV"
      img-src="project/starz/wire-show-samsung.jpg"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="wireframe-amazon"
      class="pad5 b4"
      subline="X. Show Details - Amazon Fire TV"
      img-src="project/starz/wire-show-firetv.jpg"
      img-alt="Wireframe Show details"
    />

    <textblock
      id="caption-visual-design"
      class="pt2 b4"
      intro="Visual Design"
      desc="We created a dark, minimalist user interface with high contrast ratios to place emphasis on the poster art and reduce eye strain. It was also essential that we tried to capture the essence of going to a movie theatre while incorporating Starz branding."
    />

    <textblock
      id="caption-visual-design2"
      class="pad2 b4"
      intro=""
      desc="An often overlooked detail was our inclusion of developer input during the early design solutioning sessions. We created a feedback loop that enabled us to quickly iterate on design patterns and build a MVP ahead of schedule. This also meant our team could make informed technical decisions from the start and avoid creating experiences that could negatively affect performance."
    />

    <MediaBlock
      id="ui-feature-roku"
      class="pb5 b4"
      subline="1. Roku - Feature Home"
      img-src="project/starz/ui-feature-roku.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="ui-feature-samsung"
      class="pad5 b4"
      subline="1. Samsung SmartTV - Feature Home"
      img-src="project/starz/ui-feature-samsung.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="ui-feature-firetv"
      class="pad5 b4"
      subline="2. Amazon FireTV - Feature Home"
      img-src="project/starz/ui-feature-firetv.jpg"
      img-alt="Curated movies list"
    />

    <MediaBlock
      id="ui-movie_details-resume"
      class="pad5 b4"
      subline="4. Roku - Movie Details **Note** Most basic hardware with 10MB buffer. Approach had to scale down the experience in favour of usability and performance. Could not do fullscreen background images or motion."
      img-src="project/starz/ui-movie-roku.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="ui-home-playlist"
      class="pad5 b4"
      subline="5. Samsung - Movie Details **Note** Middleground platform locked at 720p, software based on basic web technologies: HTML5, CSS3, JavaScript."
      img-src="project/starz/ui-movie-samsung.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="ui-show-details"
      class="pad5 b4"
      subline="6. FireTV - Show Details: Episodes **Note** Best hardware specs of all 3 platforms, able to create immersive pages with fullscreen motion backgrounds and previews."
      img-src="project/starz/ui-movie-firetv.jpg"
      img-alt="Development process diagram"
    />

    <textblock
      id="caption-challenge-three"
      class="pt2 b4"
      intro="Design to Dev Handoff"
      desc="Automating design to development hand-off was a new concept at the time, but we took a calculated risk to get ahead of the deadlines by adding Zeplin.io to our design stack. Multiple sprints worth of time were saved on creating measurement specifications and removed a costly bottleneck for development. The reallocated time was used to polish interactions, work on Starz Blue layouts, and draft a design system."
    />


    <textblock
      id="caption-extras"
      class="pad2 b4"
      intro="Extras"
      desc="We were able to use the remaining time to add quality of life features and flourishes throughout the applications to curate and personalize the experience."
    />

    <MediaBlock
      id="ui-welcome-back"
      class="pb5 b4"
      subline="X. Returning User interstitial. Added personalization aspects to enhance the experience. Lorem ipsum dolor sit amet."
      img-src="project/starz/ui-welcome_back-samsung.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="ui-video_player"
      class="pb5 b4"
      subline="X. Video Player - FireTV timeline scrubbing feature with PiP (Picture in Picture) thumbnail."
      img-src="project/starz/ui-video_player.jpg"
      img-alt="Search Results interface"
    />

    <MediaBlock
      id="ui-search-results"
      class="pb5 b4"
      subline="X. Samsung SmartTV Are you still there? feature set to 2.5 episode length based on user inactivity. We spent a lot of time fine-tuning this feature to strike a balance between being unintrusive and helpful."
      img-src="project/starz/ui-still_watch-samsung.jpg"
      img-alt="Search Results interface"
    />


    <textblock
      id="caption-outcome"
      class="pad5 b4"
      intro="Outcome"
      desc="Successfully launched across 3 platforms in Q3 2016 with over 200,000 active subscriptions within the first 3 months. 2 Million active subscriptions after 12 months generating $25.7M in revenue for 2016."
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

  name: "Starz",
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
