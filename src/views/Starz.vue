<template>
  <div>
    <Nav id="navigation" />
    <IntroBlock
      id="headline"
      class="pad5 b4"
      headline="Starz Play/Encore"
      status="Redefining streaming experiences for <a href='https://starz.com' rel='noreferrer' target='_blank'>Starz.com</a>"
    />
    <MediaBlock
      id="process-img"
      class="pb5 b4"
      subline="1. Title Hero image"
      img-src="thumbs/blank2.png"
      img-alt="Development process diagram"
    />
    <ImageGrid
      id="projects"
      class="b4"
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
import ImageGrid from '@/components/layouts/ImageGrid.vue';
import Footer from '@/components/navigation/Footer.vue';

export default {
  name: 'Starz',
  components: {
    Nav,
    IntroBlock,
    MediaBlock,
    ImageGrid,
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
