<template>
  <div>
    <h1>About The Seller</h1>
    <div class="seller-info">
      <img class="user-img" :src="gig.seller.imgUrl" />
      <h5>{{ gig.seller.fullname }}</h5>
      <el-rate v-model="value" disabled show-score text-color="#62646a">
      </el-rate>
      ({{seller.reviews.length}})
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
  data() {
    return {
      value: this.getAvgRating(),
    };
  },
  methods: {
    getAvgRating() {
      const total = this.seller.reviews.reduce((acc, review) => {
        return acc + review.rate;
      }, 0);
      return Math.round((total / this.seller.reviews.length) * 10) / 10;
    },
  },
};
</script>