<template>
  <button>
    <a :href="url">
      <h5>{{ buttonName }}</h5>
    </a>
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    buttonName: {
      type: String,
      default: '',
      required: true,
    },
    url: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  display: block;
  margin: 0;
  padding: 0.75rem 2rem;
  font-family: inherit;
  outline: none;
  border: 0;
  border-radius: 0.25rem;
  text-decoration: none;
  cursor: pointer;
}

a {
  color: #0CCCFF;
}
</style>
