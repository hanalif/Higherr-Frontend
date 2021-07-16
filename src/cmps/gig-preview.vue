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
            <p>{{gig.seller.fullname}}</p>
            <router-link :to="'/gig/'+gig._id">
            <long-text :txt="gig.title"/>
            </router-link>
            <p>🌟 <span class="rate-score"> 5.0</span> <span class="rate-count">(22)</span></p>
        </div>
        <div class="actions flex space-between">
            <p class="heart-icon" :class="{red:isRed}" @click="isRed=!isRed">❤</p>
            <p>Price: {{gig.price}}$</p>
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
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>