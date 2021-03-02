<template>
  <section :id="[sectionID]" :class="[padding, bgColor]">
    <div class="container-lg content-wrapper">
      <div class="split-two-col">
        <div class="left-side">
          <hr class="divider-class" />
          <h4 class="section-title">Select clients.</h4>
        </div>
        <div class="client-partners">
          <!-- Row 1 -->
          <div class="item-container">
            <Logo
              :index="1"
              img-src="cbc.svg"
              img-alt="Canadian Broadcasting Company logo"
            />
          </div>
          <div class="item-container">
            <Logo :index="2" img-src="usatoday.svg" img-alt="USA Today logo" />
          </div>
          <div class="item-container">
            <Logo :index="3" img-src="reuters.svg" img-alt="Reuters logo" />
          </div>
          <div class="item-container">
            <Logo
              :index="4"
              img-src="rbc.svg"
              img-alt="Royal Bank of Canada logo"
            />
          </div>
          <!-- Row 2 -->
          <div class="item-container">
            <Logo :index="5" img-src="mashable.svg" img-alt="Mashable logo" />
          </div>
          <div class="item-container">
            <Logo :index="6" img-src="starz.svg" img-alt="Starz logo" />
          </div>
          <div class="item-container">
            <Logo
              :index="7"
              img-src="pbs.svg"
              img-alt="Public Broadcasting Service logo"
            />
          </div>
          <div class="item-container">
            <Logo :index="8" img-src="vice.svg" img-alt="Vice Media logo" />
          </div>

          <!-- Row 3 -->
          <div class="item-container">
            <Logo
              :index="9"
              img-src="ufc.svg"
              img-alt="Ultimate Fighting Championship logo"
            />
          </div>
          <div class="item-container">
            <Logo :index="10" img-src="redbull.svg" img-alt="Redbull logo" />
          </div>
          <div class="item-container">
            <Logo
              :index="11"
              img-src="latam.svg"
              img-alt="LATAM Airlines logo"
            />
          </div>
          <div class="item-container">
            <Logo
              :index="12"
              img-src="avianca.svg"
              img-alt="Avianca Airlines logo"
            />
          </div>

          <!-- Row 4 -->
          <div class="item-container">
            <Logo :index="13" img-src="twitch.svg" img-alt="Twitch logo" />
          </div>
          <div class="item-container">
            <Logo :index="14" img-src="dell.svg" img-alt="Dell EMC logo" />
          </div>
          <div class="item-container">
            <Logo
              :index="15"
              img-src="microsoft.svg"
              img-alt="Microsoft Corporation logo"
            />
          </div>
          <div class="item-container">
            <Logo
              :index="16"
              img-src="samsung.svg"
              img-alt="Samsung Electronics logo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "@/components/clients/Logo.vue";

export default {
  name: "Clientlist",
  props: {
    index: {
      type: Number,
      default: 1,
    },
    imgSrc: {
      type: String,
      default: "",
    },
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

  components: {
    Logo,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.split-two-col {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.left-side {
  width: calc(32% - 0.5rem);
}

hr {
  color: #fff;
  width: 12rem;
}

.section-title {
  color: #fff;
}

.client-partners {
  display: flex;
  flex-wrap: wrap;
  width: calc(64% - 0.5rem);
}

.item-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 25%;
  flex-shrink: 0;
  padding-right: 1.25rem;
  margin-bottom: 5rem;
  cursor: default;
}

@media screen and (min-width: 960px) {
  .client-partners {
    margin-top: 0rem;
  }
}

@media only screen and (max-width: 800px) {
  .split-two-col {
    display: flex;
    flex-direction: column;
  }

  .left-side {
    width: 100%;
  }

  .client-partners {
    width: 100%;
    margin-top: 5rem;
  }

  hr {
    color: #fff;
    width: 10rem;
  }

  .item-container {
    width: 33.33%;
  }
}

@media only screen and (max-width: 640px) {
  .item-container {
    width: 50%;
    padding-right: 1rem;
  }
}
</style>
