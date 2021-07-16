<template>
  <div>
    <div class="reviews-header">
      <section>
        <h2 class="reviews-title">{{ seller.reviews.length }} Reviews</h2>
        <el-rate
  v-model="value"
  disabled
  text-color="#ff9900"
  score-template="{value}">
</el-rate>
        <h3 class="reviews-title review-rate">{{ getAvg }}</h3>
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
    <review-add v-if="isAddReview" @submitReview="submitReview" />
    <ul class="review-list">
      <review-list :reviews="seller.reviews" />
    </ul>
  </div>
</template>

<script>
import { utilService } from "@/services/util-service.js";
import reviewList from "./review-list.vue";
import reviewAdd from "./review-add.vue";

export default {
  props: {
    gig: Object,
    seller: Object,
  },
  data() {
    return {
      isAddReview: false,
      value: this.getAvgRating()
    };
  },
  methods: {
    toggleAdd() {
      this.isAddReview = !this.isAddReview;
    },
    submitReview(review) {
      const user = this.$store.getters.loggedinUser;
      review._id = utilService.makeId();
      review.by = {
        _id: user._id,
        fullname: user.fullname,
        imgUrl:
          user.imgUrl ||
          "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_960_720.png",
      };
      this.seller.reviews.unshift(review);
      this.$store.dispatch({ type: "updateUser", user: this.seller });
      this.toggleAdd();
    },
    getAvgRating() {
      const total = this.seller.reviews.reduce((acc, review) => {
        return acc + review.rate;
      }, 0);
      return Math.round((total / this.seller.reviews.length) * 10) / 10;
    },
  },
  computed: {
    getStars() {
      const rate = this.getAvgRating()
      console.log(rate);
    },
    getAvg() {
      return this.getAvgRating()
    }
  },
  components: {
    utilService,
    reviewList,
    reviewAdd,
  },
};
</script>