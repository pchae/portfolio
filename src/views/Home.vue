<template>
  <div>
    <NavBar />
    <QuoteBlock
      id="who-we-are"
      class="pad6 b4"
      headline="I am a product designer who creates impactful and compelling business solutions that delight, surprise, and inspire."
      desc="Currently at Saturdays.io"
    />
    <ImageGrid
      class="b4"
      headline=""
    />
    <Footer
      class="pad4 b4"
      legal="© 2014-2021 Phil Choi v2"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from '@/components/navigation/NavBar.vue';
import QuoteBlock from '@/components/layouts/QuoteBlock.vue';
import ImageGrid from '@/components/layouts/ImageGrid.vue';
import Footer from '@/components/navigation/Footer.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    QuoteBlock,
    ImageGrid,
    Footer,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Phil Choi',
    // all titles will be injected into this template
    titleTemplate: '%s | Product Design'
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
