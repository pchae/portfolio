<template>
  <div>
    <Nav id="navigation" />

    <ProjectTitle
      id="headline"
      class="pt5 b4"
      title="Starz Play"
      subhead="Redefining the way we watch TV"
    />

    <ProjectDetails
      id="detail"
      class="pad3 b4"
      client="Starz, Digiflare"
      role="Senior UX/UI Designer"
      year="2015"
    />

    <MediaBlock
      id="header-mockup"
      class="pb2 b4"
      img-src="project/starz/display.jpg"
      img-alt="Starz Play header image"
    />

    <text_block
      id="caption-intro"
      class="b4"
      intro="Redefining the way we watch TV"
      desc="Starz is an American premium cable TV network competing with Netflix, HBO and Showtime. In an attempt to keep up with their rivals, Starz had previously launched streaming apps but struggled with activations and growth. It was clear they needed a fresh perspective and business model, one that would resonate with consumers by catering to diverse lifestyles and needs."
    />

    <text_block
      id="caption-challenge-one"
      class="b4"
      intro="Challenge: Timeline"
      desc="The goals of the team were to design, build, and deploy 3 versions of the app in near simultaneous launch windows. The design time spanned 3 months for Roku, Amazong Fire TV and Samsung Smart TVs which were all new platforms for the Digiflare team.
      Design only had a short runway ahead of the Development which was performed almost simultaneously with quick iteration cycles."
    />

    <MediaBlock
      id="diagram-timeline"
      class="pb5 b4"
      subline="Project Timeline"
      img-src="project/starz/schedule.png"
      img-alt="Authentication flow diagram"
    />

    <MediaBlock
      id="diagram-process"
      class="pb5 b4"
      subline="Design process"
      img-src="project/starz/process.jpg"
      img-alt="Product Design process"
    />

    <text_block
      id="caption-challenge-two"
      class="b4"
      intro="Challenge: Authentication"
      desc="The client’s earlier attempts at online streaming utilized a TV Everywhere model. This meant that users had to authenticate themselves with account credentials from cable providers in order to access the service. This process was cumbersome and created a high barrier to entry which resulted in low completion rates."
    />

    <MediaBlock
      id="diagram-auth-flow"
      class="pb5 b4"
      subline="4a. New authentication flow"
      img-src="project/starz/authdiagram.png"
      img-alt="Authentication flow diagram"
    />

    <MediaBlock
      id="ui-authenticate"
      class="pb5 b4"
      subline="4b. Authentication Designs"
      img-src="project/starz/authenticate.png"
      img-alt="Lorem ipsum"
    />

  <text_block
      id="caption-wireframes"
      class="b4"
      intro="Wireframes x3"
      desc="To save time and minimize errors, I built a set of responsive grids and reusable components based on Starz's CDN and each platform’s SDK. This accounted for predefined asset dimensions, Action & Title Safe zones, and unique platform requirements."
    />

    <MediaBlock
      id="wireframe-roku"
      class="pb5 b4"
      subline="X. Show Details - Roku Gen 1"
      img-src="project/starz/wireframe-show-details-roku.jpg"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="wireframe-samsung"
      class="pb5 b4"
      subline="X. Show Details - Samsung Smart TV"
      img-src="project/starz/wireframe-show-details-samsung.jpg"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="wireframe-amazon"
      class="pb5 b4"
      subline="X. Show Details - Amazon Fire TV"
      img-src="project/starz/wireframe-show-details-firetv.jpg"
      img-alt="Wireframe Show details"
    />

    <MediaBlock
      id="ui-show-details"
      class="pb5 b4"
      subline="5. Show Details - Episode guide"
      img-src="project/starz/show.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="ui-show-details-resume"
      class="pb5 b4"
      subline="6. Series Details - Resume episode"
      img-src="project/starz/resume2.jpg"
      img-alt="Development process diagram"
    />

  <text_block
      id="caption-visualdesign"
      class="b4"
      intro="Visual Design"
      desc="We created a dark, minimalist user interface with high contrast ratios to place emphasis on the poster art and reduce eye strain. It was also essential that we tried to capture the essence of going to a movie theatre while incorporating Starz branding."
    />

    <MediaBlock
      id="ui-home-featured"
      class="pb5 b4"
      subline="1. Home screen - Featured tab"
      img-src="project/starz/home.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="ui-home-movies"
      class="pb5 b4"
      subline="2. Home screen - Movies tab"
      img-src="project/starz/movie.jpg"
      img-alt="Curated movies list"
    />

    <MediaBlock
      id="ui-home-playlist"
      class="pb5 b4"
      subline="3. Playlist - Recently Watched stream"
      img-src="project/starz/playlist.jpg"
      img-alt="Development process diagram"
    />


    <text_block
      id="caption-challenge-three"
      class="b4"
      intro="Challenge: Design Handoff"
      desc="Automating design to development hand-off was new at the time, but we took a calculated risk and added Zeplin.io to our stack. It freed up multiple sprints that would have been spent creating measurement specifications and removed a costly bottleneck for development. We reallocated this time to fine-tune the user interactions and draft a design system."
    />

    <MediaBlock
      id="design-system-type"
      class="pb5 b4"
      subline="X. Design System"
      img-src="project/starz/typography.jpg"
      img-alt="Development process diagram"
    />

    <text_block
      id="caption-extras"
      class="b4"
      intro="Extras"
      desc="We were able to use the remaining time to add quality of life features and flourishes throughout the applications to curate and personalize the experience."
    />

    <MediaBlock
      id="ui-welcome-back"
      class="pb5 b4"
      subline="7. Returning User interstitial"
      img-src="project/starz/resume.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="video-player-mockup"
      class="pb5 b4"
      subline="8. Video player mockup"
      img-src="project/starz/player.jpg"
      img-alt="Development process diagram"
    />

  <text_block
      id="caption-outcome"
      class="b4"
      intro="Outcome"
      desc="Successfully launched across 3 platforms in Q3 2016 with over 200,000 active subscriptions within the first 3 months. 2 Million active subscriptions after 12 months generating $25.7M in revenue for 2016."
    />

    <Footer
      id="footer"
      class="b4"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '@/components/navigation/Navigation.vue';
import ProjectTitle from '@/components/layouts/ProjectTitle.vue';
import ProjectDetails from '@/components/layouts/ProjectDetails.vue';
import MediaBlock from '@/components/layouts/MediaBlock.vue';
import text_block from '@/components/layouts/text_block.vue';
import Footer from '@/components/navigation/Footer.vue';

export default {
  name: 'Starz',
  components: {
    Nav,
    ProjectTitle,
    ProjectDetails,
    MediaBlock,
    text_block,
    Footer,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Phil Choi',
    // all titles will be injected into this template
    titleTemplate: '%s - Starz Play'
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
