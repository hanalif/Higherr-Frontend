<template>
  <section class="main-layout">
    <gig-filter/>
    <gig-list :gigs="gigs"/>
    <div class="pagging-btns flex space-between">
    <button :class="{removeBtn:isFirst}" class="prev-btn" @click="movePage(-1)">Prev</button>
      <div class="nums-btns flex">
        <div v-for="page in pageIdx+1" :key="page">
          <button class="page" :class="isMain(page)" @click="jumpToPage(page)">{{page}}</button>
        </div>
      </div>
    <button :class="{removeBtn:isLast}" class="next-btn" @click="movePage(1)">Next</button>
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
  },
  methods:{
    movePage(diff){
      this.$store.commit({type:'movePage', diff:diff})
    },
    jumpToPage(num){
      this.$store.commit({type:'jumpToPage', num:num})
    },
  },
  computed:{
    gigs(){
      return this.$store.getters.gigsToShow
    },
    pageIdx(){
      return this.$store.getters.paggingSize
    },
    isFirst(){
      return this.$store.getters.getPageIdx === 0
    },
    isLast(){
      return this.$store.getters.getPageIdx >= this.$store.getters.paggingSize
    },
    isMain() {
      return ((page) => {
        if (page === this.$store.getters.getPageIdx +1) 
        return 'main-page'
      })
    }
  },
  components:{
    gigList,
    gigFilter
  },
  destroyed(){
  }
};
</script>