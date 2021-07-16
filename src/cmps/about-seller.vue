<template>
  <div>
    <h1>About The Seller</h1>
    <div class="seller-info">
      <img class="user-img" :src="gig.seller.imgUrl" />
      <h5>{{ gig.seller.fullname }}</h5>
      <img class="star-img" src="@/assets/star.jpg" />
      <img class="star-img" src="@/assets/star.jpg" />
      <img class="star-img" src="@/assets/star.jpg" />
      <img class="star-img" src="@/assets/star.jpg" />
      <img class="star-img" src="@/assets/star.jpg" />
      (53)
      <button class="btn">Contact Me</button>
    </div>
    <div class="seller-desc">
      <div class="seller-data">
        <div class="from">
          <h3 class="seller-header">From</h3>
          <h3>{{ seller.from }}</h3>
        </div>
        <div class="since">
          <h3 class="seller-header">Member since</h3>
          <h3>{{ seller.memberSince }}</h3>
        </div>
      </div>
      <p>{{ seller.about }}</p>
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