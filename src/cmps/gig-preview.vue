<template>
    <section class="gig-card">
        <div class="block" >
            <el-carousel height="150px" :interval="null" :trigger="'click'">
                <el-carousel-item v-for="(img, index) in  gig.imgUrls" :key="index">
                    <router-link :to="'/gig/'+gig._id">
                        <img class="card-img img-fit" :src="img"/>
                    </router-link>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="card-details">
            <div class="user-card-title flex">
            <img class="user-img" :src="gig.seller.imgUrl" alt="">
            <router-link :to="'user/'+gig.seller._id">
            <p>{{gig.seller.fullname}}</p>
            </router-link>
                </div>
            <router-link :to="'/gig/'+gig._id">
            <long-text :txt="gig.title"/>
            </router-link>
            <p><img class="star-img" src="@/assets/star.jpg" /> <span class="rate-score">{{getAvgRating}}</span> <span class="rate-count">({{rateCount}})</span></p>
        </div>
        <div class="actions flex space-between">
            <p class="heart-icon" :class="{red:isRed}" @click="isRed=!isRed">❤</p>
            <p class="gig-card-price">Price: {{gig.price}}$</p>
        </div>
    </section>
</template>

<script>
import longText from './long-text.vue'
export default {
    props:{
        gig:Object,
    },
    created(){
    },
    data(){
        return{
            isRed: false,
            users: this.$store.getters.users,
        }
    },
    computed:{
        rateCount(){
            const user = this.users.find(user=>user._id === this.gig.seller._id)
            return user.reviews.length
        },
        getAvgRating() {
            const user = this.users.find(user=>user._id === this.gig.seller._id)
            const total = user.reviews.reduce((acc, review) => {
            return acc + review.rate;
        }, 0);
        return Math.round((total / user.reviews.length) * 10) / 10;
    },
    },
    metods:{
    },
    components:{
        longText
    }
}
</script>
