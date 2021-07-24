<template>
  <section
    :class="{ fixed: isHome, green: isTop }"
    class="app-header main-layout"
  >
    <nav class="nav">
      <a @click="openSideNav"><i class="fas fa-bars side-menu-icon"></i></a>
      <div class="side-menu-container">
         <div id="mySidenav" class="sidenav" :class="{ 'is-open': isSidebarOpen }">
           <div class="sidebar-header">

           </div>
           <div class="sidebar-menu">
              <a href="javascript:void(0)" class="closebtn sidebar-link" @click="closeSidebar">&times;</a>
              <router-link class="hide-from-nav sidebar-link" to="/explore">Explore</router-link>
              <a class="hide-from-nav sidebar-link" @click="becomeSeller">Become a Seller</a>
              <a class="hide-from-nav sidebar-link" @click="signIn" v-if="!loggedInUser">Sign In</a>
           </div>
        </div>
      </div>
     
      <div class="logo-search-bar">
        <router-link class="logo" to="/">higherr<span>.</span></router-link>
        <div class="app-header-search-container">
        <form v-if="!isTop">
          <input
            v-model="filterBy.txt"
            type="text"
            placeholder="Find Services"
          />
          <button @click.prevent="searchGigs">Search</button>
          <i class="fas fa-search app-header-search-icon"></i>
        </form>
        </div>
      </div>
      <div class="menu-items">
        <router-link class="hide-from-nav" to="/explore">Explore</router-link>
        <a class="hide-from-nav" @click="becomeSeller">Become a Seller</a>
        <a class="hide-from-nav" @click="signIn" v-if="!loggedInUser">Sign In</a>
        <button
          :class="{ 'white-btn': isTop }"
          class="join-btn"
          @click="signUp"
          v-if="!loggedInUser"
        >
          Join
        </button>
        <div  v-else class="user-menu hide-from-nav">
          <div class="user-menu-icon">
            <div v-if="numOfNewOrders !== 0" class="num-of-new-orders-container">
              <div><span>{{numOfNewOrders}}</span></div>
            </div>
              
            <img
              class="user-menu-img"
              @click="onUserMenuClick"
              :src="loggedInImg"
            />
          </div>
          <div class="floating-menu" v-if="isFloatingMenuOpen">
            <ul class="floating-menu-items" @click="onUserMenuClick">
              <li>
                <router-link :to="`/user/` + loggedInUser._id"
                  >Profile</router-link
                >
              </li>
              <li><router-link to="/orders">Orders</router-link></li>
              <li><a @click="logout">Logout</a></li>
            </ul>
          </div>
        </div>
        <div
          v-if="isFloatingMenuOpen"
          @click="onUserMenuClick"
          class="backdrop"
        ></div>
         <div
            v-if="isSidebarOpen"
            @click="closeSidebar"
            class="backdrop with-black-opacity">
          </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isSign: false,
      isFloatingMenuOpen: false,
      isSidebarOpen: false,
      isTop: true,
      isHome: true,
      height: null,
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
  methods: {
    signIn() {
      this.$emit("signIn");
    },
    signUp() {
      this.$emit("signUp");
    },
    isSignModal() {
      this.isSign = false;
    },
    logout() {
      this.$store.dispatch({ type: "logout" });
      this.$store.commit({type: 'resetNumOfNewOrders'})
      this.$router.push("/");
    },
    onUserMenuClick() {
      this.isFloatingMenuOpen = !this.isFloatingMenuOpen;
    },
    checkTop() {
      if (
        window.pageYOffset === 0 &&
        this.$router.currentRoute.fullPath === "/"
      )
        this.isTop = true;
      else this.isTop = false;
    },
    searchGigs() {
      
      this.$store.commit({ type: "setFilter", filterBy: this.filterBy });
      if (this.$route.path !== "/explore") this.$router.push("/explore")

    },
    becomeSeller() {
      if (!this.loggedInUser) {
        this.$store.commit({type:'setMsg', msg: 'You must be logged in first.'})
        setTimeout(() => {
          this.signUp()
        },2000)
      }
      else this.$router.push(`/user/${this.loggedInUser._id}`);
    },
    openSideNav(){
      this.isSidebarOpen = true;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    loggedInImg() {
      return this.$store.getters.loggedinImg;
    },
    setFilterBy(){
      this.filterBy.txt = this.$store.getters.getFilterBy
    },
    numOfNewOrders(){
      return this.$store.getters.numOfNewOrders;
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        if (this.$router.currentRoute.fullPath === "/") {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
        this.checkTop();
      },
    },
    $el: {
      handler() {
        if (this.$el.offsetTop === 0) {
          this.isTop = true;
        } else {
          this.isTop = false;
        }
      },
    },
  },
  components: {},
  created() {
    addEventListener("scroll", this.checkTop);
  },
};
</script>

