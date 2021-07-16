<template>
  <div class="review-add">
    <h1 class="reviews-title">Add your review</h1>
    <button class="btn" @click="submitReview">Save review</button>
    <h3>Rate the gig:</h3>
    <div class="block">
  <span class="demonstration">Default</span>
  <el-rate v-model="review.rate"></el-rate>
</div>
    <h3>Tell us about it:</h3>
    <textarea class="review-txt"  v-model="review.txt"></textarea>
  </div>
</template>

<script>
export default {
  data(){
    return{
      review: {
        rate: null,
        txt: ''

      }
    }
  },
  methods: {
     submitReview() {
      this.$emit('submitReview', this.review)
    }
  }
};
</script>