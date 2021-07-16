<template>
  <section class="main-layout">
    <h1>explore</h1>
    <gig-filter/>
    <gig-list :gigs="gigs"/>
    <button @click="movePage(-1)">Prev</button>
    <button @click="movePage(1)">Next</button>
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
  methods:{
    movePage(diff){
      this.$store.commit({type:'movePage', diff:diff})
    }
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