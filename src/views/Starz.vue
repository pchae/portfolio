<template>
  <div>
    <Nav id="navigation" />
    <IntroBlock
      id="headline"
      class="pad5 b4"
      headline="Redefining the way we watch TV"
      status="Starz is an American premium cable TV network competing with Netflix, HBO and Showtime. In an attempt to keep up with their rivals, Starz had previously launched streaming apps but struggled with activations and growth. It was clear they needed a fresh perspective and business model, one that would resonate with consumers by catering to diverse lifestyles and needs."
    />
    <MediaBlock
      id="process-img"
      class="pb5 b4"
      img-src="project/starz/display.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="process-img"
      class="pb5 b4"
      subline="1. Title Hero image"
      img-src="project/starz/home.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="process-img"
      class="pb5 b4"
      subline="1. Title Hero image"
      img-src="project/starz/movie.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="process-img"
      class="pb5 b4"
      subline="6. Recently Watched"
      img-src="project/starz/playlist.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="process-img"
      class="pb5 b4"
      subline="4. Show Details"
      img-src="project/starz/show.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="process-img"
      class="pb5 b4"
      subline="7. Return Welcome Message"
      img-src="project/starz/resume.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="process-img"
      class="pb5 b4"
      subline="5. Resume Episode"
      img-src="project/starz/resume2.jpg"
      img-alt="Development process diagram"
    />

    <MediaBlock
      id="process-img"
      class="pb5 b4"
      subline="7. Return Welcome Message"
      img-src="project/starz/player.jpg"
      img-alt="Development process diagram"
    />

    <Footer
      id="footer"
      class="b4"
      legal="© 2014-2021 v2"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '@/components/navigation/Navigation.vue';
import IntroBlock from '@/components/layouts/IntroBlock.vue';
import MediaBlock from '@/components/layouts/MediaBlock.vue';
import Footer from '@/components/navigation/Footer.vue';

export default {
  name: 'Starz',
  components: {
    Nav,
    IntroBlock,
    MediaBlock,
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
