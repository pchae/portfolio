<template>
  <div>
    <NavBar />
    <TwoColumn
      class="pad6"
      headline="Don’t be shy"
      desc="Say hello."
    />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/navigation/NavBar.vue';
import TwoColumn from '@/components/layouts/TwoColumn.vue';

export default {
  name: 'Contact',
  components: {
    NavBar,
    TwoColumn,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
