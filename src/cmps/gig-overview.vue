<template>
  <div>
    <h1>{{ gig.title }}</h1>
    <div class="seller-details">
    <img class="user-img" :src="gig.seller.imgUrl" />
    <router-link to="'user/' + gig.seller._id">{{
      gig.seller.fullname
    }}</router-link> |
    <img class="star-img" src="@/assets/star.jpg" />
    <img class="star-img" src="@/assets/star.jpg" />
    <img class="star-img" src="@/assets/star.jpg" />
    <img class="star-img" src="@/assets/star.jpg" />
    <img class="star-img" src="@/assets/star.jpg" />
    (53)
    </div>
    <img :src="gig.imgUrls[0]">
  </div>
</template>

<script>
export default {
  props: {
    gig: Object,
  },
};
</script>