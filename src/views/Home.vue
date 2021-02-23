<template>
  <div>
    <NavBar />
    <Cover
      id="hero"
      class="pb3 b3"
      statement="Canadian Product Designer based in Toronto."
      img-landscape="nyc.jpg"
      img-portrait="portrait-nyc.jpg"
    />
    <QuoteBlock
      id="who-we-are"
      class="pad5 b3"
      headline=""
      desc="My focus is on art, design, and technology as well as when, where, and how they affect everyday life."
    />
    <ImageGrid
      class="pad5 b3"
      headline="Past Projects"
    />
    <Clientlist
      class="pad5 b3"
      headline="We partner with brands brave enough to do things differently."
    />
    <FooterFull
      class="pad2 b3"
      legal="© 2014-2021 Phil Choi v2"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from '@/components/navigation/NavBar.vue';
import Cover from '@/components/Cover.vue';
import QuoteBlock from '@/components/layouts/QuoteBlock.vue';
import ImageGrid from '@/components/layouts/ImageGrid.vue';
import Clientlist from '@/components/clients/Clientlist.vue';
import FooterFull from '@/components/navigation/FooterFull.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    Cover,
    QuoteBlock,
    ImageGrid,
    Clientlist,
    FooterFull,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
