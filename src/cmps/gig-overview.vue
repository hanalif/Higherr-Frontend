<template>
  <div>
    <h1>{{ gig.title }}</h1>
    <div class="seller-details">
      <img :src="gig.seller.imgUrl" />
      <router-link :to="'/user/' + gig.seller._id">{{
        gig.seller.fullname
      }}</router-link>
      |
      <div class="overview-rate">
        <el-rate v-model="value" disabled show-score text-color="#ffbe5b">
        </el-rate>
        <span>({{ seller.reviews.length }})</span>
      </div>
    </div>
    <div class="gig-imgs-container">
      <div class="main-img-container">
      <img class="gig-main-img" :src="imgToShow" />
      </div>
      <div class="img-thumbnails">
        <img v-for="img in gig.imgUrls" :key="img" :src="img" @click="setImg" />
      
      </div>
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
      value: this.getAvgRate(),
      imgToShow: this.gig.imgUrls[0],
    };
  },
  methods: {
    getAvgRate() {
      const total = this.seller.reviews.reduce((acc, review) => {
        return acc + review.rate;
      }, 0);
      return Math.round((total / this.seller.reviews.length) * 10) / 10;
    },
    setImg(ev) {
      this.imgToShow = ev.path[0].currentSrc
    }
  },
  computed: {
    isShowImg() {
      return  
    }
  }
};
</script>