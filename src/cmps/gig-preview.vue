<template>
    <section class="gig-card">
    <router-link :to="'/gig/'+gig._id">
        <img class="card-img" :src="gig.imgUrls"/>
    </router-link>
        <div class="card-details">
        <p>{{gig.seller.fullname}}</p>
    <router-link :to="'/gig/'+gig._id">
        <p>{{gig.title}}</p>
    </router-link>
        <p>🌟 5.0 (22)</p>
        <div class="actions flex space-between">
        <p>❤</p>
        <p>Price: {{gig.price}}$</p>
        </div>
        </div>
    </section>
</template>

<script>
export default {
props:{
    gig:Object
}
}
</script>

<style>

</style>