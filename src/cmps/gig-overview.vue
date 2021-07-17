<template>
  <div>
    <h1>{{ gig.title }}</h1>
    <div class="seller-details">
    <img :src="gig.seller.imgUrl" />
    <router-link :to="'/user/' + gig.seller._id">{{
      gig.seller.fullname
    }}</router-link> |
    <div class="overview-rate">
          <el-rate v-model="value" disabled show-score text-color="#ffbe5b">
          </el-rate>
          <span>({{ seller.reviews.length }})</span
          >
        </div>
    </div>
    <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="img in gig.imgUrls" :key="img">
      <img class="img-fit" :src="img" >
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    gig: Object,
    seller: Object
  },
  data() {
    return {
      value: 3
    }
  }
};
</script>