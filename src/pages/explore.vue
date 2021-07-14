<template>
  <section>
    <h1>explore</h1>
    <gig-list :gigs="gigs"/>
  </section>
</template>

<script>
import gigList from '../cmps/gig-list.vue'
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
    gigList
  }
};
</script>