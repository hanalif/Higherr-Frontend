<template>
  <section
    :class="{ fixed: isHome, green: isTop }"
    class="app-header main-layout"
  >
    <nav class="nav">
      <div class="logo-search-bar">
        <router-link class="logo" to="/">higherr<span>.</span></router-link>
        <form v-if="!isTop">
          <input
            v-model="filterBy.txt"
            type="text"
            placeholder="🔎︎  Find Services"
          />
          <button @click.prevent="searchGigs">Search</button>
        </form>
      </div>
      <div class="menu-items">
        <router-link to="/explore">Explore</router-link>
        <a @click="becomeSeller">Become a Seller</a>
        <a @click="signIn" v-if="!loggedInUser">Sign In</a>
        <button
          :class="{ 'white-btn': isTop }"
          class="join-btn"
          @click="signUp"
          v-if="!loggedInUser"
        >
          Join
        </button>
        <div v-else class="user-menu">
          <div class="user-menu-icon">
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
      if (this.$route.path !== "/explore") this.$router.push("/explore");
    },
    becomeSeller() {
      if (!this.loggedInUser) return;
      else this.$router.push(`/user/${this.loggedInUser._id}`);
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    loggedInImg() {
      return this.$store.getters.loggedinImg;
    },
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

