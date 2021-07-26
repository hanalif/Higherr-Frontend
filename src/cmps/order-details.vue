<template>
  <div>
    <div class="order-card">
      <div class="btn-container">
        <button :class="{ 'active-btn': isBasic }" @click="basic">Basic</button>
        <button :class="{ 'active-btn': isStandard }" @click="standard">
          Standard
        </button>
        <button :class="{ 'active-btn': isPremium }" @click="premium">
          Premium
        </button>
      </div>
      <div class="order-txt space-between">
        <div class="flex space-between">
          <h4>{{ pkg.currPkg }}</h4>
          <h4>${{ pkg.price }}</h4>
        </div>
        <div class="flex space-between">
          <h5>⧗ {{ pkg.delivery }} Days delivery</h5>
          <h5>↻ {{ pkg.revisions }} Revisions</h5>
        </div>
        <h5><span class="marked">✔</span> &nbsp; Refund if delivery is late</h5>
        <h5><span class="marked">✔</span> &nbsp; Choose your prefrences</h5>
        <h5>
          <span :class="{ marked: isStandard || isPremium }">✔</span> &nbsp; Use
          without copyright restrictions
        </h5>
        <h5>
          <span :class="{ marked: isStandard || isPremium }">✔</span> &nbsp;
          Free cancellation within 24 hours
        </h5>
        <h5>
          <span :class="{ marked: isPremium }">✔</span> &nbsp; Maximum amount of
          revisions
        </h5>
        <h5>
          <span :class="{ marked: isPremium }">✔</span> &nbsp; Constant
          communication with seller
        </h5>
      </div>
      <button class="order-btn" @click="createOrder">
        Purchase (${{ pkg.price }})
      </button>
    </div>
    <div class="contact-btn-container">
      <button to="chat" class="contact-seller-btn">Contact Seller</button>
    </div>
    <order-confirm-modal
      v-if="showConfirmOrderModal"
      @close="onConfirmOrderClose"
      :gig="gig"
      :pkg="pkg"
    ></order-confirm-modal>
  </div>
</template>

<script>
import orderConfirmModal from "./order-confirm-modal.vue";
export default {
  props: {
    gig: Object,
    seller: Object,
  },
  data() {
    return {
      pkg: {
        currPkg: "Basic",
        revisions: 2,
        delivery: +this.gig.delivery,
        price: this.gig.price,
      },
      isBasic: true,
      isStandard: false,
      isPremium: false,
      isOrderModalOpen: false,
      showConfirmOrderModal: false,
    };
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    }
  },
  methods: {
    basic() {
      this.pkg.currPkg = "Basic";
      this.pkg.revisions = 2;
      this.pkg.delivery = +this.gig.delivery;
      this.pkg.price = this.gig.price;
      this.isBasic = true;
      this.isStandard = false;
      this.isPremium = false;
    },
    standard() {
      this.pkg.currPkg = "Standard";
      this.pkg.revisions = 4;
      this.pkg.delivery = +this.gig.delivery + 2;
      this.pkg.price = this.gig.price * 1.5;
      this.isBasic = false;
      this.isStandard = true;
      this.isPremium = false;
    },
    premium() {
      this.pkg.currPkg = "Premium";
      this.pkg.revisions = 7;
      this.pkg.delivery = +this.gig.delivery + 5;
      this.pkg.price = this.gig.price * 2;
      this.isBasic = false;
      this.isStandard = false;
      this.isPremium = true;
    },
    // onConfirmOrderClose() {
    //   this.showConfirmOrderModal = false;
    // },
    // createOrder() {
    //   this.showConfirmOrderModal = true;
    // },
     createOrder() {
      const dateObj = new Date();
      const month = dateObj.getUTCMonth() + 1;
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();  
      const orderToSave = {
        title: this.gig.title,
        status: "pending",
        createdAt: day + "/" + month + "/" + year,
        price: this.pkg.price,
        seller: this.gig.seller,
        buyer: {
          _id: this.loggedinUser._id,
          fullname: this.loggedinUser.fullname,
          imgUrl: this.loggedinUser.imgUrl,
        },
      };
      this.$store.dispatch({ type: "saveOrder", order: orderToSave });
      this.$router.push('/')
     }
  },
  
  components: {
    orderConfirmModal,
  },
  created() {},
};
</script>