<template>
  <div>
    <NavBar />
    <Cover
      id="hero"
      class="pb1 b3"
      statement="Bridging the gap between design and technology"
      img-landscape="nyc.jpg"
      img-portrait="portrait-nyc.jpg"
    />
    <QuoteBlock
      id="quote"
      class="pad5 b3"
      headline=""
      desc="As an 80s kid, I hold a unique perspective due to maturing in parallel with the shift from analog to digital technologies. The result is that I'm able to bridge the cultural and ideological gaps between older generations and today's youth."
    />
    <MediaBlock
      class="pad5 b3"
      headline="The Process"
      subline=""
      img-src="process.svg"
      img-alt="Development process diagram"
    />
    <Clientlist
      class="pad5 b3"
      headline="We partner with brands brave enough to do things differently."
    />
    <ResultGrid
      class="pad5 b3"
      headline="We get big results."
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
import MediaBlock from '@/components/layouts/MediaBlock.vue';
import ResultGrid from '@/components/layouts/ResultGrid.vue';
import Clientlist from '@/components/clients/Clientlist.vue';
import FooterFull from '@/components/navigation/FooterFull.vue';

export default {
  name: 'Info',
  components: {
    NavBar,
    Cover,
    QuoteBlock,
    MediaBlock,
    ResultGrid,
    Clientlist,
    FooterFull,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
