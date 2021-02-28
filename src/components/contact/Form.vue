<template>
  <section :class="[padding, bgColor]">
    <div class="">
      <h3 class="title pt05">
        {{ formTitle }}
      </h3>

      <form
        name="contact"
        class="form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
        >

        <InputField
          label-name="Your Name"
          input-type="text"
          input-name="name"
          target-value="ev => form.name = ev.target.value"
        />

        <InputField
          label-name="Your Email"
          input-type="email"
          input-name="email"
          target-value="ev => form.email = ev.target.value"
        />

        <Textbox label-name="Your Message" />

        <div data-netlify-recaptcha="true" />

        <PrimaryButton
          button-name="Send message"
          class="submitButton"
          type="submit"
        />
      </form>
    </div>
  </section>
</template>

<script>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import InputField from '@/components/contact/InputField.vue';
import Textbox from '@/components/contact/Textbox.vue';

export default {
  name: 'Form',
  props: {
    formTitle: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      padding: '',
      bgColor: '',
    };
  },

  components: {
    PrimaryButton,
    InputField,
    Textbox,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form .field {
  position: relative;
  margin: 2rem 0;
}

.form .field textarea {
  padding-bottom: 2px;
  resize: none;
  line-height: 1.4rem;
}

.submitButton {
  text-align: center;
  color: #fff;
  background-color: #40b884;
}

/* Mobile Media Queries */

@media only screen and (max-width: 640px) {

.submitButton {
  width: 100%;
}

}
</style>
