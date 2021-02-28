<template>
  <div>
    <Navbar id="navigation" />
    <TwoColumn
      class="pad5"
      headline="Lorem ipsum dolor sit"
      desc="Say hello."
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navigation/Navbar.vue';
import TwoColumn from '@/components/layouts/TwoColumn.vue';

export default {
  name: 'Contact',
  components: {
    Navbar,
    TwoColumn,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Phil Choi',
    // all titles will be injected into this template
    titleTemplate: '%s | Contact'
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
