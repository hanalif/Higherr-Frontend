

<template>
  <div>
    <nav>
      <a href="#gig-overview">Overview</a>
      <a href="#gig-description">Description</a>
      <a href="#about-seller">About the seller</a>
      <a href="#gig-eview">Reviews</a>
    </nav>
    <div class="gig-overview-contanier">
      <div class="gig-info">
        <!-- <gig-overview id="gig-overview" :gig="gig" /> -->
        {{gig}}
        <!-- <gig-description id="gig-description" />
        <about-seller id="about-seller" />
        <gig-review id="gig-review" /> -->
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
  computed: {
    gig() {
      return this.$store.getters.gigToShow
      },
  },
  created(){
    this.$store.dispatch({ type: "getGigById", id: this.$route.params.gigId,})
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

