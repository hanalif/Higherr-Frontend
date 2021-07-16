<template>
  <div>
    <h1>{{ gig.title }}</h1>
    <div class="seller-details">
    <img class="user-img" :src="gig.seller.imgUrl" />
    <router-link :to="'user/' + gig.seller._id">{{
      gig.seller.fullname
    }}</router-link> |
    <img class="star-img" src="@/assets/star.jpg" />
    <img class="star-img" src="@/assets/star.jpg" />
    <img class="star-img" src="@/assets/star.jpg" />
    <img class="star-img" src="@/assets/star.jpg" />
    <img class="star-img" src="@/assets/star.jpg" />
    (53)
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
  },
};
</script>