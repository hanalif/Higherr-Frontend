<template>
  <div>
    <h1>About The Seller</h1>
    <div class="seller-info">
      <img class="about-seller-img" :src="gig.seller.imgUrl" />
      <div class="about-user-details">
        <router-link :to="'/user/' + gig.seller._id">
        <h4 class="about-name">{{ gig.seller.fullname }}</h4>
        </router-link>
        <div v-if="seller.reviews.length" class="about-rate">
          <el-rate v-model="value" disabled show-score text-color="#ffbe5b">
          </el-rate>
          <span>({{ seller.reviews.length }})</span
          >
        </div>
        <button class="about-seller-contact">Contact Me</button>
      </div>
    </div>
    <div class="seller-desc">
      <div class="seller-data">
        <div class="from">
          <h4 class="seller-header">From</h4>
          <h3>{{ seller.from }}</h3>
        </div>
        <div class="since">
          <h4 class="seller-header">Member since</h4>
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