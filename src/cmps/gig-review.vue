<template>
  <div>
    <div class="reviews-header">
      <section>
      <h2 class="reviews-title">{{ seller.reviews.length }} Reviews</h2>
      <img class="review-star-img" src="@/assets/star.jpg" />
      <img class="review-star-img" src="@/assets/star.jpg" />
      <img class="review-star-img" src="@/assets/star.jpg" />
      <img class="review-star-img" src="@/assets/star.jpg" />
      <img class="review-star-img" src="@/assets/star.jpg" />
      <h3 class="reviews-title review-rate">4.8</h3>
      </section>
      <section>
      <select>
        <option value="recent">Most recent</option>
        <option value="high">High to low</option>
        <option value="low">Low to high</option>
      </select>
      </section>
      <button class="btn" @click="toggleAdd">Add Review</button>
    </div>
    <review-add v-if="isAddReview" />
    <ul class="review-list">
    <review-list :reviews="seller.reviews" />
    </ul>
  </div>
</template>

<script>
import reviewList from './review-list.vue'
import reviewAdd from './review-add.vue'

export default {
  props: {
    gig: Object,
    seller: Object,
  },
  data() {
    return {
      isAddReview: false
    }
  },
  methods: {
    toggleAdd() {
      this.isAddReview = !this.isAddReview
    }
  },
  components: {
    reviewList,
    reviewAdd
  }
};
</script>