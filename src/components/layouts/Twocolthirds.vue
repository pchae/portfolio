<template>
  <section :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container-lg content-wrapper">
      <div class="frow two-col">
        <div class="col-third">
          <!-- Left col -->
          <hr class="divlite" />
          <h4 :class="sectiontitle">{{title}}</h4>
        </div>
        <div class="col-twothird">
          <!-- Right col -->
          <component :is="DynamicComponent"></component>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Intro from '@/components/layouts/Intro.vue';
import Infolist from '@/components/Infolist.vue';
import Clientgrid from '@/components/clients/Clientlist.vue';

export default {
  name: "Twocolthirds",
  components: {
    Intro,
    Infolist,
    Clientgrid,
  },
  props: {
    sectionID: {
      type: String,
      default: "",
    },
    sectiontitle: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    headline: {
      type: String,
      default: "",
    },
    subline: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    para: {
      type: String,
      default: "",
    },
    DynamicComponent: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      padding: "",
      bgColor: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.two-col {
  justify-content: space-between;
}

.col-third {
  width: calc(32% - 0.5rem);
}

.col-twothird {
  width: calc(64% - 0.5rem);
  display: flex;
  margin-top: 0rem;
}

.divlite {
  color: #fff;
  width: 50%;
}

.section-title-lt {
  color: #fff;
}

.section-title-dk {
  color: #000;
}

@media only screen and (max-width: 800px) {
  .two-col {
    display: flex;
    flex-direction: column;
  }

  .col-third {
    width: 100%;
  }

  .col-twothird  {
    width: 100%;
    margin-top: 5rem;
  }

  .divlite {
    width: 25%;
  }
}

</style>
