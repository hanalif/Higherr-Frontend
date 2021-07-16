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
            <p>{{gig.seller.fullname}}</p>
                </div>
            <router-link :to="'/gig/'+gig._id">
            <long-text :txt="gig.title"/>
            </router-link>
            <p>🌟 <span class="rate-score"> 5.0</span> <span class="rate-count">(22)</span></p>
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
        gig:Object
    },
    data(){
        return{
            isRed: false,
        }
    },
    components:{
        longText
    }
}
</script>
