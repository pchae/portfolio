<template>
  <section
    :id="[sectionID]"
    :class="[padding, bgColor]"
  >
    <div class="text-container">
      <div class="fcol">
        <h3 class="section-headline">
          My focus is on art, design, and technology as well as when, where, and how they affect everyday life.
        </h3>
        <div class="frow">
          <p class="subtext">
            As an 80s kid, I hold a unique perspective due to maturing in parallel with the shift from analog to digital technologies.
      The result is that I'm able to bridge the cultural and ideological gaps between older generations and today's youth.
          </p>
        </div>
        <div class="frow">
          <p class="subtext">Over the past decade I've designed and built solutions for North American digital agencies, brands, startups, FinTech and Software as a Service platforms. My Design process incorporates <a href='https://www.ted.com/talks/david_kelley_human_centered_design' rel='noreferrer' target='_blank'>Human-centered design principles</a>, the <a href='https://agilemanifesto.org/' rel='noreferrer' target='_blank'>Agile Manifesto</a>, scalable Design systems, and <a href='https://www.forbes.com/sites/victorlipman/2014/10/15/phil-jackson-brings-ny-knicks-mindful-management/' rel='noreferrer' target='_blank'>Mindful management</a>.
          </p>
        </div>
        <div class="frow">
          <p class="subtext">
            Platforms I've designed for include: Android, iOS, Roku, Amazon Fire TV, Smart TVs, Playstation, Windows Devices, and enterprise SaaS.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    headline: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    para: {
      type: String,
      default: '',
    },
    platform: {
      type: String,
      default: '',
    },
    sectionID: {
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-headline {
  margin-bottom: 2rem;
  color: #000;
}

.frow {
  justify-content: flex-end;
}

.subtext {
  color: #000;
  font-weight: 400;
  width: 100%;
}

.frow:nth-child(1n) {
  margin-bottom: 2rem;
}

.frow:last-child {
  margin-bottom: 0rem;
}

.subtext {
  font-size: 1.125rem;
}

@media only screen and (max-width: 980px) {
  .subtext {
    width: 100%;
  }
}

</style>
