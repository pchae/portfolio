<template>
  <section
    :id="[sectionID]"
    :class="[padding, bgColor]"
  >
    <div class="container-lg">
      <div class="grid">
        <div class="1col pt5">
          <div class="row1">
            <h2 class="title">
              {{ headline }}
            </h2>
          </div>
          <div class="row2 pb2">
            <h2 class="subtext">
              {{ desc }}
            </h2>
          </div>
          <div
            id="social"
            class="pb1"
          >
            <h5 class="social">
              Don't like forms? Send an <a href="mailto:hola@saturdays.io">email</a>.
            </h5>
          </div>
        </div>
        <div class="1col pt5">
          <Form
            class="b4"
            form-title="Get in touch"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Form from '@/components/contact/Form.vue';

export default {
  name: 'TwoColumn',
  props: {
    headline: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
  padding: {
    type: String,
    default: '',
  },
  bgColor: {
    type: String,
    default: '',
  },
  sectionID: {
    type: String,
    default: '',
  },

  components: {
    Form,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.25rem;
}

a {
  text-decoration: underline 2px;
}

@media only screen and (max-width: 880px) {

  .grid {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
  }

}
</style>
