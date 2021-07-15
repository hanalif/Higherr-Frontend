

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
<<<<<<< HEAD
        <!-- <gig-overview id="gig-overview" :gig="gig" /> -->
        {{gig}}
        <!-- <gig-description id="gig-description" />
        <about-seller id="about-seller" />
        <gig-review id="gig-review" /> -->
=======
        <gig-overview id="gig-overview" :gig="gig" />
        <gig-description id="gig-description" :gig="gig" />
        <about-seller id="about-seller" :gig="gig" />
        <gig-review id="gig-review" />
>>>>>>> b043cdb5d111b4443e334ba6e0695f729598ea29
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
<<<<<<< HEAD
  computed: {
    gig() {
      return this.$store.getters.gigToShow
      },
  },
  created(){
    this.$store.dispatch({ type: "getGigById", id: this.$route.params.gigId,})
=======
    data() {
        return {
            gig: null
        }
    },
  created() {
       this.$store.dispatch({ type: "getGigById", id: this.$route.params.gigId})
       .then(gig => this.gig = gig)

>>>>>>> b043cdb5d111b4443e334ba6e0695f729598ea29
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

