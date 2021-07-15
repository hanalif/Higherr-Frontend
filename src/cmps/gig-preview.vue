<template>
    <section class="gig-card">
    <swiper class="swiper" :options="swiperOption">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div class="swiper-pagination" ></div>
    <div class="swiper-button-prev" ></div>
    <div class="swiper-button-next" ></div>
  </swiper>
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
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
    props:{
        gig:Object
    },
    components:{
        Swiper,
        SwiperSlide
    },
    data(){
        return{
            isRed: false,
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    }
}
</script>
