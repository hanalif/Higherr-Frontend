<template>
<div>
  <h1>About The Seller</h1>
  <div class="seller-info">
    <img class="user-img" :src="gig.seller.imgUrl">   
    <h5>{{gig.seller.fullname}}</h5>
    <img class="star-img" src="@/assets/star.jpg" />
    <img class="star-img" src="@/assets/star.jpg" />
    <img class="star-img" src="@/assets/star.jpg" />
    <img class="star-img" src="@/assets/star.jpg" />
    <img class="star-img" src="@/assets/star.jpg" />
    (53)
    <button>Contact Me</button>   
  </div>

</div>
</template>

<script>
export default {
    props: {
        gig: Object
    },


}
</script>