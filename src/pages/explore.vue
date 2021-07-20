<template>
  <section class="main-layout">
    <gig-filter/>
    <gig-list :gigs="gigs"/>
    <div class="pagging-btns flex space-between">
    <button :class="{removeBtn:isFirst}" class="prev-btn" @click="movePage(-1)">⪻ Prev</button>
      <div class="nums-btns flex">
        <div v-for="page in pageIdx+1" :key="page">
          <button class="page" :class="'page'+page" @click="jumpToPage(page),pageNumColor(page)" @load="pageNumColor(page)">{{page}}</button>
        </div>
      </div>
    <button :class="{removeBtn:isLast}" class="next-btn" @click="movePage(1)">Next ⪼</button>
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
    this.pageNumColor(1)
  },
  methods:{
    movePage(diff){
      this.$store.commit({type:'movePage', diff:diff})
    },
    jumpToPage(num){
      this.$store.commit({type:'jumpToPage', num:num})
    },
    pageNumColor(num){
      setInterval(()=>{
        if(num === this.$store.getters.getPageIdx+1) {
          document.querySelector(`.page${num}`).classList.add('currPage')
        }
        else document.querySelector(`.page${num}`).classList.remove('currPage')
      },100)
    }
  },
  computed:{
    gigs(){
      return this.$store.getters.gigsToShow
    },
    pageIdx(){
      return Math.ceil(this.gigs.length /12)
    },
    isFirst(){
      return this.$store.getters.getPageIdx === 0
    },
    isLast(){
      return this.$store.getters.getPageIdx >= Math.ceil(this.gigs.length /12)
    },
  },
  components:{
    gigList,
    gigFilter
  },
  destroyed(){
    clearInterval(this.pageNumColor)
  }
};
</script>