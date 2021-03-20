<template>
  <div :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container">
      <div class="flex-name1">
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
        <div class="list-container">
          <ul>
            <li class="detail-heading">YEAR</li>
            <li class="">{{ workInfo.year }}</li>
          </ul>
        </div>
        <div class="results">
          <div class="list-container-long">
            <ul>
              <li class="detail-heading">RESULTS</li>
              <li v-for="item in workInfo.result" :key="item" class="resultlist">{{ item }}</li>
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
  inject: ['workInfo'],
  created () {
    console.log(this.workInfo)
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

.flex-name1 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
}

.results {
  padding-top: 2rem;
}

.resultlist {
  padding-bottom: 0.5rem;
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
  .list-container {
    display: flex;
    width: 100%;
    cursor: default;
  }

  .list-container:nth-child(n) {
    padding-bottom: 1.5rem;
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
