<template>
  <section class="app-header main-layout">
    <nav class="nav">
      <router-link to="/"> logo </router-link>
      <div class="menu-items">
        <router-link to="/explore">Explore</router-link>|
        <div v-if="!loggedInUser" class="sign-btns-container">
          <button @click="signIn">Sign In</button>
          <button @click="signUp">Join</button>
        </div>
        <div v-else class="user-menu">
          <i class="fas fa-user" @click="onUserMenuClick"></i>

          <div class="floating-menu" v-if="isFloatingMenuOpen">
            <ul class="floating-menu-items">
              <li>Profile</li>
              <li>Logout</li>
            </ul>
          </div>
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
      isFloatingMenuOpen: false
    };
  },
  methods: {
    signIn() {
      this.$emit('signIn');
    },
    signUp() {
      this.$emit('signUp');
    },
    isSignModal() {
      this.isSign = false;
    },
    logout() {
      this.$store
        .dispatch({ type: "logout" })
        .then(() => (this.loggedInUser = this.$store.getters.loggedinUser));
    },
    onUserMenuClick(){
      this.isFloatingMenuOpen = !this.isFloatingMenuOpen;
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser; 
    }
  },
  components: {},
  created() {},
};
</script>

