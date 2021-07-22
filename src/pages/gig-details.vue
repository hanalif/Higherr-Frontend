

<template>
<section>
    <nav class="gig-nav">
      <a class="gig-nav-a" href="#gig-overview">Overview</a>
      <a class="gig-nav-a" href="#gig-description">Description</a>
      <a class="gig-nav-a" href="#about-seller">About the seller</a>
      <a class="gig-nav-a" href="#gig-review">Reviews</a>
    </nav>
  <!-- <div class=" gig-details"> -->
    <div class="gig-layout" v-if="seller">
      <div class="gig-info">
        <gig-overview id="gig-overview" :gig="gig" :seller="seller" />
        <gig-description id="gig-description" :gig="gig" />
        <about-seller id="about-seller" :gig="gig" :seller="seller" />
        <gig-review id="gig-review" :gig="gig" :seller="seller" />
      </div>
      <order-details class="order-details" :gig="gig" :seller="seller"/>
    </div>
  <!-- </div> -->
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
    const users = await this.$store.dispatch({
      type: 'loadUsers'
    })
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

