<template>
  <section
    :class="{ fixed: isHome, green: isTop }"
    class="app-header main-layout"
  >
    <nav class="nav">
      <button @click="openTryModal">Try modal</button>
      <router-link class="logo" to="/">higherr<span>.</span></router-link>
      <div class="menu-items">
        <router-link to="/explore">Explore</router-link>
        <a @click="signIn" v-if="!loggedInUser">Sign In</a>
        <a @click="signUp" v-if="!loggedInUser">Join</a>
        <div v-else class="user-menu">
          <div class="user-menu-icon">
              <img class="user-menu-img" @click="onUserMenuClick" :src="loggedInImg">
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
    <menu-content-use v-if="showTryModal" @close="closeTryModal"></menu-content-use>
  </section>
</template>

<script>
import menuContentUse from '../cmps/menu-content-use.vue'

export default {

  data() {
    return {
      isSign: false,
      isFloatingMenuOpen: false,
      isTop: true,
      isHome: true,
      height: null,
      showTryModal: false,
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
      if(window.pageYOffset === 0 && this.$router.currentRoute.fullPath === "/") this.isTop = true
      else this.isTop = false
    },
    openTryModal(){
      this.showTryModal = true;
    },
    closeTryModal(){
      this.showTryModal = false;
    }
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
      this.checkTop()
      },
    },
    $el: {
      handler() {
        if (this.$el.offsetTop === 0) {
          this.isTop = true;
        } else {
          this.isTop = false;
        }
        console.log();
      },
    },
  },
  components: {
    menuContentUse,
  },
  created() {
    addEventListener('scroll', this.checkTop)
  }
};
</script>

