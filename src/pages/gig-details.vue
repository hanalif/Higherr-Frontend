

<template>
  <div>
    <nav class="gig-nav">
      <a href="#gig-overview">Overview</a>
      <a href="#gig-description">Description</a>
      <a href="#about-seller">About the seller</a>
      <a href="#gig-eview">Reviews</a>
    </nav>
    <div class="gig-overview-contanier" v-if="gig">
      <div class="gig-info">
        <gig-overview id="gig-overview" :gig="gig" />
        <gig-description id="gig-description" :gig="gig" />
        <about-seller id="about-seller" :gig="gig" />
        <gig-review id="gig-review" />
      </div>
      <!-- <order-details /> -->
    </div>
  </div>
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
            gig: null
        }
    },
  created() {
       this.$store.dispatch({ type: "getGigById", id: this.$route.params.gigId})
       .then(gig => this.gig = gig)

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

