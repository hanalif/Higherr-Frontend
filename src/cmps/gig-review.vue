<template>
  <div>
    <div class="reviews-header">
      <section class="flex">
        <h2 class="reviews-title">{{ seller.reviews.length }} Reviews</h2>
        <div class="reviews-title-rating">
          <el-rate
            v-model="getAvgRating"
            disabled
            text-color="#ff9900"
            score-template="{value}"
          >
          </el-rate>
          <h3 v-if="seller.reviews.length" class="reviews-title review-rate">
            {{ getAvgRating }}
          </h3>
        </div>
      </section>
      <button class="btn" @click="toggleAdd">Add Review</button>
      <section class="sort-ratings">
        <h3>Sort by</h3>
        <select v-model="sortBy">
          <option value="recent">Most recent</option>
          <option value="high">High to low</option>
          <option value="low">Low to high</option>
        </select>
      </section>
    </div>
    <review-add v-if="isAddReview" @submitReview="submitReview" />
    <ul class="review-list">
      <review-list :reviews="sortedReviews" />
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
      sortBy: "recent",
    };
  },
  methods: {
    toggleAdd() {
      this.isAddReview = !this.isAddReview;
    },
    submitReview(review) {
      let user = this.$store.getters.loggedinUser;
      if (!user) user = {
        _id:  utilService.makeId(),
        fullname: 'guest'+utilService.getRandomInt(1000, 9999)
      }
      review._id = utilService.makeId();
      review.createdAt = Date.now();
      review.by = {
        _id: user._id,
        fullname: user.fullname,
        imgUrl:
          user.imgUrl ||
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      };
      this.seller.reviews.unshift(review);
      this.$store.dispatch({ type: "updateUser", user: this.seller });
      this.toggleAdd();
    },
  },
  computed: {
    getAvgRating() {
      const total = this.seller.reviews.reduce((acc, review) => {
        return acc + review.rate;
      }, 0);
      return Math.round((total / this.seller.reviews.length) * 10) / 10;
    },
    // getAvg() {
    //   return this.getAvgRating();
    // },
    getReviews() {
      let reviews = this.$store.getters.userReviews;
      if (!reviews || !reviews.length) reviews = this.seller.reviews;
      return reviews;
    },
    sortedReviews() {
      let reviews = JSON.parse(JSON.stringify(this.seller.reviews));
      if (this.sortBy === "low") {
        reviews = reviews.sort((a, b) => {
          return a.rate - b.rate;
        });
      } else if (this.sortBy === "high") {
        reviews = reviews.sort((a, b) => {
          return b.rate - a.rate;
        });
      }
      return reviews;
    },
  },
  components: {
    utilService,
    reviewList,
    reviewAdd,
  },
};
</script>