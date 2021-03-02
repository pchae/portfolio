<template>
  <div class="card">
    <h3 class="card-title" v-for="services in services" :key="services.id">
      {{ services.title }}
    </h3>
    <ul class="desc">
      <li>{{ services.list }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ServiceList",
  computed: {
    services() {
      return this.$store.state.services;
    },
    ...mapGetters(["services"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin-bottom: 2rem;
}

.card > * {
  margin-bottom: 0.5rem;
}

.card-title {
  font-weight: 700;
  line-height: 1.5;
  color: #fff;
}

.desc {
  font-weight: 400;
  color: #d0d0d0;
}
</style>
