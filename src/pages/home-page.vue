<template>
  <div>
    <div class="hero">
      <div class="hero-txt">
        <h1>Find the perfect <span>freelance</span></h1>
        <h1>service for your every need.</h1>
        <form @submit.prevent="searchGigs">
          <input
            v-model="filterBy.txt"
            class="hero-searchbar"
            type="text"
            placeholder="Search anything..."
          />
          <button>Search</button>
        </form>
      </div>
      <img src="@/assets/hero1.png" />
    </div>
    <div class="top-gigs gig-list main-layout">
      <h1>Top Gigs</h1>
      <ul v-if="topGigs" class="ul">
        <li class="li" v-for="gig in topGigs" :key="gig._id">
          <gig-preview :gig="gig" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gigPreview from "../cmps/gig-preview.vue";

export default {
  data() {
    return {
      filterBy: {
        txt: "",
        tags: "all",
        delivery: "all",
        price: {
          min: 0,
          max: Infinity,
        },
      },
    };
  },
  created() {
    this.$store.dispatch({ type: "loadUsers" });
    this.$store.dispatch({ type: "loadGigs" });
  },
  computed: {
    topGigs() {
      return this.$store.getters.topGigs;
    },
  },
  methods: {
    filter() {
      const filterBy = {
        txt: this.filterBy.txt,
        tags: this.filterBy.tags,
        delivery: this.filterBy.delivery,
        price: {
          min: this.filterBy.price.min,
          max: this.filterBy.price.max,
        },
      };
      this.$store.commit({ type: "setFilter", filterBy });
    },
    searchGigs() {
      this.filter();
      this.$router.push("/explore");
    },
  },
  components: {
    gigPreview,
  },
};
</script>

