<template>
  <section class="app-header main-layout">
    <nav class="nav">
      <router-link class="logo" to="/">higherr<span>.</span></router-link>
      <div class="menu-items">
        <router-link to="/explore">Explore</router-link>|
        <a @click="signIn" v-if="!loggedInUser">Sign In</a>
        <a @click="signUp" v-if="!loggedInUser">Join</a>
        <div v-else class="user-menu">
          <div class="user-menu-icon">
              <img class="user-menu-img" @click="onUserMenuClick" :src="loggedInImg">
          </div>

          <div class="floating-menu" v-if="isFloatingMenuOpen">
            <ul class="floating-menu-items" @click="onUserMenuClick">
              <li><router-link :to="`/user/`+loggedInUser._id">Profile</router-link></li>
              <li><a @click="logout">Logout</a></li>
            </ul>
          </div>
        </div>
        <div v-if="isFloatingMenuOpen" @click="onUserMenuClick" class="backdrop"></div>
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
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    loggedInImg() {
      return this.$store.getters.loggedinImg;
    }
  },
  components: {},
  created() {},
};
</script>

