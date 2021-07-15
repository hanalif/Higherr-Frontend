<template>
  <div class="review-li">
      <div class="review-header">
          <img class="user-img" :src=review.by.imgUrl>
          <h3>{{review.by.fullname}}</h3>
          <img class="review-star-img" src="@/assets/star.jpg" />
          <h2 class="review-rate">{{review.rate}}</h2>
      </div>
      <p>{{review.txt}}</p>
  </div>
</template>

<script>
export default {
  props: {
    review: Object,
  },
};
</script>