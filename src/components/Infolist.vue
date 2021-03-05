<template>
  <section :id="[sectionID]" :class="[padding, bgColor]">

    <Job
        org="Guestlogix"
        role="Product Design Lead"
        date="Feb 2019 - Dec 2019"
        desc="Product Design Lead on White Label apps and SaaS solutions with a strong focus on passenger safety while also helping the airline industry adapt and overcome the challenges presented by Covid-19."
        desc2="Clients include: Southwest Airlines, LATAM, Avianca, American Airlines, British Airways, Qantas"
        detail="Platforms: Android, iOS, Responsive Web"
    />

    <Job
        org="Checkout 51"
        role="Product Design Lead"
        date="Feb 2019 - Dec 2019"
        desc="Overhauled and delivered a new in-app feature which led to a 10% increase in user redemption and 5% lift in monthly revenue."
        desc2="UX/UI Design Lead responsible for maintaining the current c51 mobile apps, while also designing a new, modern app experience in accordance with Apple Human Interface Guidelines and WCAG 2.1 accessibility guidelines."
        detail="Platforms: Android, iOS, Responsive Web"
    />

    <Job
        org="Scribblelive"
        role="Product Design Lead / Head of Design"
        date="May 2017 - Nov 2018"
        desc="Managed a team of local and remote User experience and Visual designers across Toronto, Chicago, Mumbai, and New Delhi."
        desc2="Design Lead on two major responsive redesign projects for BMO’s Digital channels. Conducted workshops on Consumer Insights and HCD to stakeholders and directors."
        detail="Platforms: Responsive Web"
    />

    <Job
        org="Bank of Montreal"
        role="Senior UX/UI Designer / Product Design Lead"
        date="Nov 2016 - Apr 2017"
        desc="Managed a team of local and remote User experience and Visual designers across Toronto, Chicago, Mumbai, and New Delhi."
        desc2="Design Lead on two major responsive redesign projects for BMO’s Digital channels. Conducted workshops on Consumer Insights and HCD to stakeholders and directors."
        detail="Platforms: Responsive Web"
    />

    <Job
        org="Royal Bank of Canada"
        role="Senior UX/UI Designer / Product Design Lead"
        date="Feb 2016 - Nov 2016"
        desc="Product Design Lead and Creative Lead for RBC Wallet apps and RBC Rewards website. Work ranged from feature enhancements to redesigning the Rewards website to be a mobile-optimized, responsive experience."
        desc2="Led Product development workshops for stakeholders, VPs and CXOs of digital channels. Technical Lead and vendor stakeholder to Plastic Havas and Huge Inc."
        detail="Platforms: iOS, Android, and Responsive Web"
    />

    <Job
        org="Bnotions"
        role="Product Designer/Design Lead"
        date="2015 - 2016"
        desc="Design lead on a women’s Health and Wellness mobile app and a redesign pilot for TD Bank’s insurance apps. Work ranged from UX research, ideation, wireframes, interactive prototyping, and animatics to client presentations, brand identity, and Design systems."
        desc2=""
        detail="Clients: Standard Innovation, TD Bank"
    />

    <Job
        org="Digiflare"
        role="Senior UX/UI Designer"
        date="2015 - 2016"
        desc="Co-design lead on the Starz streaming apps which gained 200k active subscriptions in the first 3 months and grew to 2 million active subscriptions in the first year. Generated $25.7 Million USD in revenue for Starz in 2016."
        desc2="Design lead on streaming apps for PBS, DHX Media, CNN Go, and contributed work to Digiflare's Videa SaaS platform. Created end-to-end designs, established style guides, and Design-to-Dev handoff."
        detail="Clients: Starz, CNN, PBS, DHX Media, Family Channel, Videa"
    />

    <Job
        org="Plastic Mobile"
        role="Digital Designer"
        date="2014 - 2015"
        desc="Design lead on the Pizza Pizza mobile app redesign project which set a record $80 million in transactions processed annually and accounts for 50% of all digital sales."
        desc2="Also Design lead for innovation lab projects utilizing GPS, beacon, and spatial recognition. Duties included user experience mapping, user interface design for Air Miles, Pizza Pizza, Royal LePage, Shoppers Drug Mart & Student Price Card apps. Work involved information architecture, user flows, wireframes, mood boards, style guides, and interactive prototypes."
        detail="Clients: Air Miles, Canadian Real Estate Association, Pizza Pizza, Royal LePage, Shoppers Drug Mart and Student Price Card."
    />
  </section>
</template>

<script>
import Job from '@/components/cards/Job.vue';

export default {
  name: "Infolist",
  components: {
    Job
  },
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-headline {
  color: #000;
  margin-bottom: 0.5rem;
}

.frow {
  justify-content: flex-start;
}

.subtext {
  color: #000;
  font-weight: 400;
}

.subtext {
  font-size: 1.125rem;
}

</style>
