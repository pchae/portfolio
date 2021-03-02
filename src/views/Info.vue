<template>
  <div>
    <Nav id="navigation" />
    <TextBlock
      id="about"
      class="pad5 b4"
      headline="My focus is on art, design, and technology as well as when, where, and how they affect everyday life."
      desc="As an 80s kid, I hold a unique perspective due to maturing in parallel with the shift from analog to digital technologies.
      The result is that I'm able to bridge the cultural and ideological gaps between older generations and today's youth."
      para="Over the past decade I've designed and built solutions for North American digital agencies, brands, startups, FinTech and Software as a Service platforms. My Design process incorporates <a href='https://www.ted.com/talks/david_kelley_human_centered_design' rel='noreferrer' target='_blank'>Human-centered design principles</a>, the <a href='https://agilemanifesto.org/' rel='noreferrer' target='_blank'>Agile Manifesto</a>, scalable Design systems, and <a href='https://www.forbes.com/sites/victorlipman/2014/10/15/phil-jackson-brings-ny-knicks-mindful-management/' rel='noreferrer' target='_blank'>Mindful management</a>."
      platform="Platforms I've designed for include: Android, iOS, Roku, Amazon Fire TV, Smart TVs, Playstation, Windows Devices, and enterprise SaaS."
    />

    <SectionTitle
      id="section-skills"
      class="pad1 b4"
      title="Skillset"
    />
    <MediaBlock
      id="process-img"
      class="pb5 b4"
      subline=""
      img-src="thumbs/blank2.png"
      img-alt="Development process diagram"
    />

    <SectionTitle
      id="section-process"
      class="pt1 b4"
      title="Process"
    />
    <MediaBlock
      id="process-img"
      class="pb5 b4"
      subline="1. End to End Design & Development process diagram"
      img-src="thumbs/blank2.png"
      img-alt="Development process diagram"
    />

    <SectionTitle
      id="section-experience"
      class="pad1 b4"
      title="Experience"
    />
    <ServiceList />

    <SectionTitle
      id="section-reading"
      class="pad1 b4"
      title="Reading list"
    />
    <BookGrid
      id="books"
      class="pb5 b4"
    />

    <Clientlist
      id="clientlist"
      class="pt5 b1"
    />

    <Footer
      id="footer"
      class="b4"
      legal="© 2014-2021"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/navigation/Navigation.vue';
import TextBlock from '@/components/layouts/TextBlock.vue';
import MediaBlock from '@/components/layouts/MediaBlock.vue';
import BookGrid from '@/components/layouts/BookGrid.vue';
import ServiceList from '@/components/cards/Service.vue';
import Clientlist from '@/components/clients/Clientlist.vue';
import SectionTitle from '@/components/layouts/SectionTitle.vue';
import Footer from '@/components/navigation/Footer.vue';

export default {
  name: 'Info',
  components: {
    Nav,
    TextBlock,
    MediaBlock,
    BookGrid,
    Clientlist,
    ServiceList,
    SectionTitle,
    Footer,
  },
  computed: {
    service() {
      return this.$store.getters.services;
    }
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Phil Choi',
    // all titles will be injected into this template
    titleTemplate: '%s - Info'
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
