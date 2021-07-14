<template>
  <section>
    <div class="app-header main-layout">
      
    <nav class="header-nav">
      <router-link to="/explore">Explore</router-link>|
      <div class="sign-btns-container">
        <button @click="join">Signup</button>
        <button @click="join">Join</button>
      </div>
      <div class="user-menu">
        loggedinUser
        <img src="" alt="" />
      </div>
    </nav>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isSign: false,
      loggedInUser: this.$store.getters.loggedinUser,
    };
  },
  methods: {
    join() {
      this.isSign = true;
    },
    isSignModal() {
      this.isSign = false;
    },
    logout() {
      this.$store
        .dispatch({ type: "logout" })
        .then(() => (this.loggedInUser = this.$store.getters.loggedinUser ));
    },
  },
  components: {
    
  },
  created () {

  },
};
</script>

