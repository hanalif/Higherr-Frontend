<template>
  <section class="main-layout">
    <h1>explore</h1>
    <gig-filter/>
    <gig-list :gigs="gigs"/>
  </section>
</template>

<script>
import gigList from '../cmps/gig-list.vue'
import gigFilter from '../cmps/gig-filter.vue'
export default {
  data(){
    return{
    }
  },
  created(){
    this.$store.dispatch('loadGigs')
  },
  computed:{
    gigs(){
      return this.$store.getters.gigsToShow
    }
  },
  components:{
    gigList,
    gigFilter
  }
};
</script>