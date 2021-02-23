<template>
  <section :class="[padding, bgColor]">
    <div class="container-lg">
      <div class="typebox">
        <vue-typed-js
          :loop="true"
          :back-speed="20"
          :back-delay="1200"
          :smart-backspace="true"
          :strings="['Human-centric Design', 'Design Systems', 'People over Process',
                     'Cloud Computing', 'Agile Development', 'Data-Driven Design',
                     'Sustainable Software', 'Native Applications', 'Product Development',
                     'Progressive Web Apps']"
        >
          <h2 class="pb2">
            {{ headline }}
            <span class="typing" />
          </h2>
        </vue-typed-js>
      </div>
      <RouterButton
        button-name="Let's talk"
        url="contact"
        class="ctaButton"
      />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import RouterButton from '@/components/buttons/routerButton.vue';

export default {
  name: 'AnimatypeBlock',
  props: {
    headline: {
      type: String,
      default: '',
    },
  },
  components: {
    RouterButton,
  },
  data() {
    return {
      padding: '',
      bgColor: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .ctaButton {
    background-color: #564090;
    border-radius: 0.25rem;
  }

</style>
