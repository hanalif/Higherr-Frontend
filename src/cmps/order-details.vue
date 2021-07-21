<template>
  <div class="order-details">
    <div class="order-card">
      <div class="btn-container">
        <button :class="{'active-btn':isBasic}" @click="basic">Basic</button>
        <button :class="{'active-btn':isStandard}" @click="standard">Standard</button>
        <button :class="{'active-btn':isPremium}" @click="premium">Premium</button>
      </div>
      <div class="order-txt space-between">
        <div class="flex space-between">
          <h4>{{ currPkg }}</h4>
          <h4>${{ price }}</h4>
        </div>
        <div class="flex space-between">
          <h5>⧗ {{ delivery }} Days delivery</h5>
          <h5>↻ {{revisions}} Revisions</h5>
        </div>
        <h5> <span class="marked">✔</span> &nbsp; Refund if delivery is late</h5>
        <h5> <span class="marked">✔</span> &nbsp; Choose your prefrences</h5>
        <h5> <span :class="{marked:isStandard || isPremium}">✔</span> &nbsp; Use without copyright restrictions</h5>
        <h5> <span :class="{marked:isStandard || isPremium}">✔</span> &nbsp; Free cancellation within 24 hours</h5>
        <h5> <span :class="{marked:isPremium}">✔</span> &nbsp; Maximum amount of revisions</h5>
        <h5> <span :class="{marked:isPremium}">✔</span> &nbsp; Constant communication with seller</h5>
      </div>
      <button class="order-btn" @click="createOrder">Purchase (${{ price }})</button>
    </div>
    <div class="contact-btn-container">
      <router-link to="/chat"><button class="contact-seller-btn">Contact Seller</button></router-link>
    </div>
    <order-confirm-modal v-if="showConfirmOrderModal" @close="onConfirmOrderClose"  :gig="gig"></order-confirm-modal>
  </div>
</template>

<script>
import orderConfirmModal from './order-confirm-modal.vue'
export default {
  props: {
    gig: Object,
    seller: Object,
  },
  data() {
    return {
      currPkg: "Basic",
      revisions: 2,
      delivery: +this.gig.delivery,
      price: this.gig.price,
      isBasic: true,
      isStandard: false,
      isPremium: false,
      isOrderModalOpen: false,
      showConfirmOrderModal: false
    };
  },
  methods: {
    basic() {
      this.currPkg = 'Basic'
      this.revisions = 2
      this.delivery = +this.gig.delivery
      this.price = this.gig.price
      this.isBasic = true
      this.isStandard = false
      this.isPremium = false
    },
    standard() {
      this.currPkg = 'Standard'
      this.revisions = 4
      this.delivery = +this.gig.delivery + 2
      this.price = this.gig.price * 1.5
      this.isBasic = false
      this.isStandard = true
      this.isPremium = false
    },
    premium() {
      this.currPkg = 'Premium'
      this.revisions = 7
      this.delivery = +this.gig.delivery + 5
      this.price = this.gig.price * 2
      this.isBasic = false
      this.isStandard = false
      this.isPremium = true
    },
   onConfirmOrderClose() {
      this.showConfirmOrderModal = false;
    },
    createOrder(){
       this.showConfirmOrderModal = true;
      console.log('create order')
    }
  },
   components: {
      orderConfirmModal,
    },
    created () {
      console.log('gig to send order modal',this.gig);
    },
  
};
</script>