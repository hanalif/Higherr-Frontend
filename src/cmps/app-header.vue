<template>
  <section>
    <nav class="main-layout">
      <router-link to="/"> logo </router-link>
      <router-link to="/explore">Explore</router-link>|
      <div v-if="!loggedInUser" class="sign-btns-container">
        <button @click="signIn">Sign In</button>
        <button @click="signUp">Join</button>
      </div>
      <div v-else class="user-menu">
        <img src="" alt="" />
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isSign: false,
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
    goToUser(){
      this.$router.push('/user/u101')
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

