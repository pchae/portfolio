<template>
  <div class="field">
    <label>
      <p>{{ labelName }}</p>
      <textarea
        name="message"
        required="true"
        data-msg-required="This field is required."
        @input="ev => form.message = ev.target.value"
      />
    </label>
  </div>
</template>

<script>

export default {
  name: 'Textbox',
  props: {
    labelName: {
      type: String,
      default: '',
      required: true,
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  label, p {
    padding-bottom: 0.5rem;
  }

  select, textarea {
    display: block;
    width: 100%;
    height: 6rem;
    padding: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0;
    color: #000;
    background: #eaeaea;

    border: none;
    border-radius: 2px;
    border-bottom: 1px solid #404040;
    border-bottom-color: currentcolor;
    border-bottom-style: none;
    border-bottom-width: medium;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-attachment: scroll;
    background-image: none;
    background-size: auto;
    outline: none;
  }

</style>
