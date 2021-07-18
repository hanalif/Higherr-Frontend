<template>
  <div>
    <div class="hero">
      <div class="hero-txt">
        <h1>Find the perfect <span>freelance</span></h1>
        <h1>service for your every need.</h1>
        <form>
          <input
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
    <div class="categories">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 14v3c0 .55-.45 1-1 1h-1v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><path d="M20,18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z"/></g></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z"/></svg>
    </div>
  </div>
</template>

<script>
import gigPreview from '../cmps/gig-preview.vue'

export default {

  created() {
    this.$store.dispatch({ type: "loadUsers" });
    this.$store.dispatch({ type: "loadGigs" });
  },
  computed: {
    topGigs() {
      return this.$store.getters.topGigs
    }
  },
  components: {
    gigPreview
  }
};
</script>

