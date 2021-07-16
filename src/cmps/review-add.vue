<template>
  <div class="review-add">
    <h1 class="reviews-title">Add your review</h1>
    <button class="btn">Save review</button>
    <h3>Rate the gig:</h3>
    <div class="block">
  <span class="demonstration">Default</span>
  <el-rate v-model="value1"></el-rate>
</div>
    <!-- <img class="review-star-img" src="@/assets/star.jpg" />
    <img class="review-star-img" src="@/assets/star.jpg" />
    <img class="review-star-img" src="@/assets/empty-star.png" />
    <img class="review-star-img" src="@/assets/empty-star.png" />
    <img class="review-star-img" src="@/assets/empty-star.png" /> -->
    <h3>Tell us about it:</h3>
    <textarea cols="40" rows="10"></textarea>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value1:null
    }
  }
};
</script>