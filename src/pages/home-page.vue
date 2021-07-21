<template>
  <div>
    <div class="hero" :style="{backgroundColor:heroChange}">
      <div class="hero-txt">
        <h1>
          Find the perfect <span>freelance</span> <br />service for your every
          need.
        </h1>
        <div class="home-page-search-container">
          <input
            v-model="filterBy.txt"
            class="hero-searchbar"
            type="text"
            placeholder='Try "web design"'
          />
        <i class="fas fa-search home-page-search-icon"></i>
        <button @click="searchGigs">Search</button>
        </div>
      </div>
      <img :src="require(`@/assets/hero${heroState}.png`)" />
    </div>
    <div class="top-gigs gig-list main-layout">
      <h2>Our Best Gigs</h2>
      <ul v-if="topGigs" class="ul">
        <li class="li" v-for="gig in topGigs" :key="gig._id">
          <gig-preview :gig="gig" />
        </li>
      </ul>
    </div>
    <div class="categories-container main-layout">
      <h2>Explore the marketplace</h2>
      <div class="categories-icons grid">
        <div
          class="category flex column justify-center align-center"
          @click="moveToCategory('music')"
        >
          <svg
            class="category-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="44px"
            viewBox="0 0 24 24"
            width="44px"
            fill="#6e6a6a"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 14v3c0 .55-.45 1-1 1h-1v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"
            />
          </svg>
          <p>Music</p>
        </div>
        <div
          class="category flex column align-center"
          @click="moveToCategory('web-develop')"
        >
          <svg
            class="category-icon"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="44px"
            viewBox="0 0 24 24"
            width="44px"
            fill="#6e6a6a"
          >
            <g><rect fill="none" height="24" width="24" x="0" /></g>
            <g>
              <g>
                <path
                  d="M20,18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z"
                />
              </g>
            </g>
          </svg>
          <p>Web Develop</p>
        </div>
        <div
          class="category flex column align-center"
          @click="moveToCategory('media')"
        >
          <svg
            class="category-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="44px"
            viewBox="0 0 24 24"
            width="44px"
            fill="#6e6a6a"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z"
            />
          </svg>
          <p>Media</p>
        </div>
        <div
          class="category flex column align-center"
          @click="moveToCategory('comunication')"
        >
          <svg
            class="category-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="44px"
            viewBox="0 0 24 24"
            width="44px"
            fill="#6e6a6a"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M20 6H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2zm0 2v3h-2V9h-2v2H4V8h16zM4 20v-7h16v7H4z"
            />
            <circle cx="8" cy="16.48" r="2.5" />
          </svg>
          <p>Comutication</p>
        </div>
        <div
          class="category flex column align-center"
          @click="moveToCategory('home-design')"
        >
          <svg
            class="category-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="44px"
            viewBox="0 0 24 24"
            width="44px"
            fill="#6e6a6a"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 15h2v2h-2zM17 11h2v2h-2zM17 7h2v2h-2zM13.74 7l1.26.84V7z"
            />
            <path d="M10 3v1.51l2 1.33V5h9v14h-4v2h6V3z" />
            <path
              d="M8.17 5.7L15 10.25V21H1V10.48L8.17 5.7zM10 19h3v-7.84L8.17 8.09 3 11.38V19h3v-6h4v6z"
            />
          </svg>
          <p>Home Design</p>
        </div>
        <div
          class="category graphic-category flex column align-center"
          @click="moveToCategory('graphic')"
        >
          <svg
            class="category-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="44px"
            viewBox="0 0 24 24"
            width="44px"
            fill="#6e6a6a"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M7 16c.55 0 1 .45 1 1 0 1.1-.9 2-2 2-.17 0-.33-.02-.5-.05.31-.55.5-1.21.5-1.95 0-.55.45-1 1-1M18.67 3c-.26 0-.51.1-.71.29L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41l-1.34-1.34c-.2-.2-.45-.29-.7-.29zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z"
            />
          </svg>
          <p>Grapic Design</p>
        </div>
        <div
          class="category flex column align-center"
          @click="moveToCategory('logo-design')"
        >
          <svg
            class="category-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="44px"
            viewBox="0 0 24 24"
            width="44px"
            fill="#6e6a6a"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z"
            />
          </svg>
          <p>Logo Design</p>
        </div>
      </div>
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
      interval: null,
      heroState: 1
    };
  },
  created() {
    this.$store.dispatch({ type: "loadGigs" });
    this.interval = setInterval(() => {
        this.heroState++
        if (this.heroState > 3) this.heroState = 1 
    }, 8000)
  },
  computed: {
    heroChange() {
      if (this.heroState === 1) return '#003B17'
      if (this.heroState === 2) return '#AC405B'
      if (this.heroState === 3) return '#942C0B'
    },
    heroImgChange() {
      if (this.heroState === 1) return '@/assets/hero1.png'
      if (this.heroState === 2) return '@/assets/hero2.png'
      if (this.heroState === 3) return '@/assets/hero3.png'

    },
    topGigs() {
      const gigs = this.$store.state.gigStore.gigs;
      const sellers = this.$store.state.userStore.users;
      const topSellers = sellers.filter((seller) => {
        if (!seller.reviews) return;
        return seller.reviews.length >= 2;
      });
      topSellers.forEach(seller => {
        const total = seller.reviews.reduce((acc, review) => {
        return acc + review.rate;
      }, 0);
      seller.avgRate = (total / seller.reviews.length)
      })
      const topGigs = gigs.filter(gig => {
         return topSellers.some(seller =>{
                gig.avgRate = seller.avgRate
           return seller._id === gig.seller._id 
        })
      })
      topGigs.sort((a, b) => {
        return b.avgRate - a.avgRate
      })
      
      return topGigs.slice(0,4)
    },
  },
  methods: {
    filter(category) {
      const filterBy = {
        txt: this.filterBy.txt,
        tags: category || this.filterBy.tags,
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
    moveToCategory(category) {
      this.filter(category);
      this.$router.push(`/explore?category=${category}`);
    },
  },
  destroyed() {
    clearInterval(this.interval)
  },
  components: {
    gigPreview,
  },
};
</script>

