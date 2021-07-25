

<template>
<section class="gig-dtails-page">
    <nav class="gig-nav">
      <a @click="scrollToElement($event, 'gig-overview')">Overview</a>
      <a @click="scrollToElement($event, 'gig-description')">Description</a>
      <a @click="scrollToElement($event, 'about-seller')">About the seller</a>
      <a @click="scrollToElement($event, 'gig-review')">Reviews</a>
    </nav>
    <div class="gig-layout" v-if="seller">
      <div class="gig-info">
        <gig-overview ref="gig-overview" :gig="gig" :seller="seller" />
        <gig-description ref="gig-description" :gig="gig" />
        <about-seller ref="about-seller" :gig="gig" :seller="seller" />
        <gig-review ref="gig-review" :gig="gig" :seller="seller" />
      </div>
      <order-details class="order-details" :gig="gig" :seller="seller"/>
    </div>
</section>
</template>

<script>
import gigOverview from "../cmps/gig-overview.vue";
import gigDescription from "../cmps/gig-description.vue";
import aboutSeller from "../cmps/about-seller.vue";
import gigReview from "../cmps/gig-review.vue";
import orderDetails from "../cmps/order-details.vue";
export default {
  data() {
    return {
      gig: null,
      seller: null,
    };
  },
  async created() {
    const gig = await this.$store.dispatch({
      type: "getGigById",
      id: this.$route.params.gigId,
    });
    this.gig = gig;
    const user = await this.$store.dispatch({
      type: "getUserById",
      id: gig.seller._id,
    });
    this.seller = user;
    this.$store.commit({type:'setCurrGig', gig:this.gig})
  },
  methods: {
    scrollToElement(ev, ref) {
    const offset = this.$refs[ref].$el.offsetTop
    window.scrollTo(0, offset-60)
    }
  },
  components: {
    gigOverview,
    aboutSeller,
    gigDescription,
    gigReview,
    orderDetails,
  },
};
</script>

