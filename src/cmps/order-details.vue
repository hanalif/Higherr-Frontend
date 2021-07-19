<template>
  <div class="order-details">
    <div class="order-card">
      <h1>Your order</h1>
      <div class="flex space-between">
        <h2>Standard</h2>
        <h2>${{ gig.price }}</h2>
      </div>
      <h4>{{ gig.summary }}</h4>
      <h3>{{ gig.delivery }} Days delivery</h3>
      <button class="btn">Purchase (${{ gig.price }})</button>
    </div>
    <div class="contact-btn-container">
    <button class="contact-seller-btn">Contact Seller</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gig: Object,
    seller: Object,
  },
};
</script>