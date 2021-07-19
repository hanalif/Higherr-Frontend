<template>
  <section class="main-layout">
    <gig-filter/>
    <gig-list :gigs="gigs"/>
    <div class="pagging-btns flex space-between">
    <button @click="movePage(-1)">⪻ Prev</button>
    <button @click="movePage(1)">Next ⪼</button>
    </div>
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
    console.log(this.$store.getters.paggingSize);
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