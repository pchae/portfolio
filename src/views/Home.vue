<template>
  <div>
    <Nav
      id="navigation"
      tColor="bk"
    />

    <IntroBlock
      id="headline"
      class="pad5 b4"
      headline="I'm a product designer who creates impactful digital solutions that delight, surprise, and inspire."
      status="Founder and principle designer at <a href='https://saturdays.io' rel='noreferrer' target='_blank'>Saturdays.io</a>"
    />

    <ImageGrid
      id="projects"
      class="pb5 b4"
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
import IntroBlock from '@/components/layouts/IntroBlock.vue';
import ImageGrid from '@/components/layouts/ImageGrid.vue';
import Footer from '@/components/navigation/Footer.vue';

export default {
  name: 'Home',
  components: {
    Nav,
    IntroBlock,
    ImageGrid,
    Footer,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Phil Choi',
    // all titles will be injected into this template
    titleTemplate: '%s - Product Design'
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
