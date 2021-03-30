<template>
  <div :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container-lg">
      <div class="flex-list">
        <div class="list-group">
          <div class="list-container">
            <ul>
              <li class="detail-heading">CLIENT</li>
              <li class="">{{ workInfo.client }}</li>
            </ul>
          </div>
          <div class="list-container">
            <ul>
              <li class="detail-heading">ROLE</li>
              <li class="">{{ workInfo.role }}</li>
            </ul>
          </div>
        </div>
        <div class="list-group">
          <div class="list-container-full">
            <ul>
              <li class="detail-heading">RESULTS</li>
              <li v-for="item in workInfo.result" :key="item" class="lilist">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleDetails",
  props: {
    sectionID: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      padding: "",
      bgColor: "",
    };
  },
  inject: ["workInfo"],
  created() {
    console.log(this.workInfo);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 30%;
  cursor: default;
}

.list-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  cursor: default;
}

.list-group {
  display: flex;
  flex-direction: column;
  gap: 0rem;
  width: 100%;
}

.flex-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2.5rem;
}

.list-container:nth-child(1) {
  padding-bottom: 2rem;
}

.list-group:nth-child(1) {
  padding-bottom: 2rem;
}

.lilist {
  padding-bottom: 1rem;
}

li {
  font-size: 1rem;
  line-height: 1.25rem;
}

li:nth-child(1) {
  padding-bottom: 0.25rem;
}

.detail-heading {
  font-weight: 700;
}

@media only screen and (max-width: 800px) {
  .flex-list {
    flex-direction: column;
    gap: 1.25rem;
  }

  .list-container {
    display: flex;
    width: 100%;
    cursor: default;
  }

  .list-container:nth-child(n) {
    padding-bottom: 2rem;
  }

  .list-container:last-child {
    padding-bottom: 0;
  }
}

@media only screen and (min-width: 641px) {
  .list-container:nth-child(odd) {
    padding-right: 0;
  }
}

@media only screen and (max-width: 640px) {
  .list-container {
    width: 100%;
  }
}
</style>
