<template>
  <section>
    <li v-for="review in reviews" :key="review._id">
      <review-preview :review="review" />
      <br>
    </li>
  </section>
</template>

<script>
import reviewPreview from './review-preview.vue'

export default {
  props: {
    reviews: Array,
  },
  components: {
      reviewPreview
  }
};
</script>