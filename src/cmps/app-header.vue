<template>
  <section class="app-header main-layout">
    <nav class="nav">
      <router-link class="logo" to="/">fiverr</router-link>
      <div class="menu-items">
        <router-link to="/explore">Explore</router-link>|
        <a @click="signIn" v-if="!loggedInUser">Sign In</a>
        <a @click="signUp" v-if="!loggedInUser">Join</a>
        <div v-else class="user-menu">
          <div class="user-menu-icon" @click="onUserMenuClick">
            <i class="fas fa-user"></i>
          </div>

          <div class="floating-menu" v-if="isFloatingMenuOpen">
            <ul class="floating-menu-items">
              <li><router-link to="/user/profile">Profile</router-link></li>
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
    },
    goToUser() {
      this.$router.push("/user/u101");
    },
    onUserMenuClick() {
      this.isFloatingMenuOpen = !this.isFloatingMenuOpen;
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  components: {},
  created() {},
};
</script>

