<template>
  <button>
    <router-link :to="url">
      <h4>{{ buttonName }}</h4>
    </router-link>
  </button>
</template>

<script>
export default {
  name: 'RouterButton',
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
  data() {
    return {
      to: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  button {
    display: block;
    margin: 0;
    padding: 1rem 2rem;
    font-family: inherit;
    outline: none;
    border: 0;
    border-radius: 0.25rem;
    text-decoration: none;
    cursor: pointer;
  }

  a {
    color: #fff;
  }

</style>
