<template>
  <div>
    <Nav id="navigation" />
    <TwoColumn
      class="pad5"
      headline="Got a project in mind?"
      desc="Let's talk."
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/navigation/Navigation.vue';
import TwoColumn from '@/components/layouts/TwoColumn.vue';

export default {
  name: 'Contact',
  components: {
    Nav,
    TwoColumn,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Phil Choi',
    // all titles will be injected into this template
    titleTemplate: '%s - Contact'
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
