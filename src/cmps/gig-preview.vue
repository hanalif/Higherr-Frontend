<template>
    <section class="gig-card">
    <router-link :to="'/gig/'+gig._id">
        <img class="card-img" :src="gig.imgUrls"/>
    </router-link>
        <div class="card-details">
        <p>{{gig.seller.fullname}}</p>
    <router-link :to="'/gig/'+gig._id">
        <p class="card-title">{{gig.title}}</p>
    </router-link>
        <p>🌟 5.0 <span class="rate-count">(22)</span></p>
        </div>
        <div class="actions flex space-between">
        <p class="heart-icon" :class="{red:isRed}" @click="isRed=!isRed">❤</p>
        <p>Price: {{gig.price}}$</p>
        </div>
    </section>
</template>

<script>
export default {
props:{
    gig:Object
},
data(){
    return{
        isRed: false
    }
}
}
</script>

<style>

</style>