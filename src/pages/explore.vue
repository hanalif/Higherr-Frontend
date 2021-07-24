<template>
  <section class="main-layout">
    <gig-filter @filter="filter"/>
    <h1 v-if="filterBy.txt">Results For: "{{filterTxt}}"</h1>
    <h1 v-else-if="filterBy.tags !== 'all'">Results For: "{{filterBy.tags}}"</h1>
    <h1 v-else></h1>
    <gig-list v-if="gigs" :gigs="gigs"/>
    <img v-else src="https://thumbs.gfycat.com/ArtisticShoddyKudu-small.gif" alt="">
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
      filterBy:{
                txt:'',
                tags:'all',
                delivery: 'all',
                price:{
                    min:0,
                    max:Infinity
                    }
            },
            sortBy:'all'
    }
  },
  created(){
    this.filterBy.txt = this.$store.getters.getFilter.txt
    this.$store.dispatch('loadGigs')
    .then(()=>{
      this.$store.commit({type:'setSort', sortBy:this.sortBy})
    }).then(()=>{
      if(this.$route.query.category){
        this.filterBy.tags = this.$route.query.category
      }
      this.$store.commit({type:'setFilter', filterBy:this.filterBy})
    })
  },
  methods:{
    movePage(diff){
      this.$store.commit({type:'movePage', diff:diff})
    },
    jumpToPage(num){
      this.$store.commit({type:'jumpToPage', num:num})
    },
    filter(filterBy){
      if(!this.filterBy.txt !== ''){
        this.filterBy = filterBy
      }
    }
  },
  computed:{
    filterTxt(){
      this.filterBy.txt = this.$store.getters.getFilter.txt  
      console.log(this.$store.getters.getFilter.txt);
      return this.$store.getters.getFilter.txt
    },
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