<template>
  <div>
    <Nav
      id="navigation"
      tColor="bk"
      bgColor="b4"
    />

    <ImageGrid
      id="projects"
      class="pt120 b4"
    />

    <Footer
      id="footer"
      class="b1"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from '@/components/navigation/Navigation.vue';
import ImageGrid from '@/components/layouts/ImageGrid.vue';
import Footer from '@/components/navigation/Footer.vue';

export default {
  name: 'Home',
  components: {
    Nav,
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
