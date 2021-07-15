<template>
  <div class="order-details">
    <div class="order-card">
      <h1>Your order</h1>
      <div class="flex space-between">
        <h2>Standard</h2>
        <h2>{{ gig.price }}$</h2>
      </div>
      <h4>{{ gig.jobDescription }}</h4>
      <h3>{{ gig.delivery }} Days delivery</h3>
      <button>Purchase ({{ gig.price }}$)</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gig: Object,
    user: Object,
  },
};
</script>