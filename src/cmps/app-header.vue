<template>
  <section
    :class="{ fixed: isHome, green: isTop }"
    class="app-header main-layout">
    <nav class="nav">
      <a @click="openSideNav" class="hamburger-menu">
          <i class="fas fa-bars side-menu-icon"></i>
          <div class="position-of-orders-notifications-hamburger-menu">
          <div v-if="numOfNewOrders !== 0" class="num-of-new-orders-container">
              <div class="orders-notifications"><span class="order-notifications-span">{{numOfNewOrders}}</span></div>
          </div>
          </div>
      </a>
      
      <div class="side-menu-container">
         <div id="mySidenav" class="sidenav" :class="{ 'is-open': isSidebarOpen }">
           <div class="sidebar-header">
                <button
          class="btn btn-primary" @click="signUpOnSideNav" v-if="!loggedInUser"> Join Higherr </button>
           <div v-else class="user-menu-icon">
            <img
              class="user-menu-img user-img-side-nav"
              @click="onUserMenuClick"
              :src="loggedInImg"
            />
            <h2 class="side-nav-fullname-title">{{loggedInUser.fullname}}</h2>
          </div>
           </div>
           
           <div class="sidebar-menu">
              <!-- <a href="javascript:void(0)" class="closebtn sidebar-link" @click="closeSidebar">&times;</a> -->
               <a class="hide-from-nav sidebar-link" @click="signInOnSideNav" v-if="!loggedInUser">Sign In</a>
                 <router-link class="hide-from-nav sidebar-link" to="/" @click.native="closeSidebar">Home</router-link>
              <router-link class="hide-from-nav sidebar-link" to="/explore" @click.native="closeSidebar">Explore</router-link>
              <a class="hide-from-nav sidebar-link" v-if="!loggedInUser" @click="signUpOnSideNav">Become a Seller</a>
              <!-- <div class="browse-categories-container">
                <a class="sidebar-link">Browse Categories</a>
                <span><i class="fas fa-chevron-down"></i></span>
              </div> -->
               
                <template v-if="loggedInUser">
                <router-link :to="`/user/` + loggedInUser._id" class="sidebar-link" @click.native="closeSidebar">Profile</router-link>
              <router-link to="/orders" class="sidebar-link" @click.native="closeSidebar">Orders
                <div class="position-orders-notifications-user-menu">
            <div v-if="numOfNewOrders !== 0" class="num-of-new-orders-container">
              <div class="orders-notifications"><span class="order-notifications-span">{{numOfNewOrders}}</span></div>
            </div>
             </div>
              </router-link>
              <a @click="logoutFromSideBar" class="sidebar-link">Logout</a>
                </template>
             
           </div>
        </div>
      </div>
     
      <div class="logo-search-bar">
        <router-link class="logo" to="/">higherr<span>•</span></router-link>
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
      <div class="menu-items" :class="{ 'logged': loggedInUser != null }">
        <router-link class="hide-from-nav explore-link" to="/explore">Explore</router-link>
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
            <div class="position-orders-notifications-main-user-nav">
            <div v-if="numOfNewOrders !== 0" class="num-of-new-orders-container">
              <div class="orders-notifications"><span class="order-notifications-span">{{numOfNewOrders}}</span></div>
            </div>

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
      filterBy: this.$store.getters.getFilter
    };
  },
  methods: {
    signIn() {
      this.$emit("signIn");
    },
    signUp() {
      this.$emit("signUp");
    },
    signUpOnSideNav(){
      this.$emit("signUp");
       this.isSidebarOpen = false;
    },
    logoutFromSideBar(){
      this.$store.dispatch({ type: "logout" });
      this.$store.commit({type: 'resetNumOfNewOrders'})
      this.$router.push("/");
      this.isSidebarOpen = false;

    },
    signInOnSideNav(){
      this.$emit("signIn");
      this.isSidebarOpen = false;
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
      this.filterBy = this.$store.getters.getFilterBy
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

