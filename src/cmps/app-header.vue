<template>
  <section>
    <nav class="main-layout">
      <router-link to="/">
          logo
      </router-link>
      <router-link to="/explore">Explore</router-link>|
      <div class="sign-btns-container">
        <button @click="join">Signup</button>
        <button @click="join">Join</button>
      </div>
      <div class="user-menu">
       <button @click="goToUser">user-details</button> 
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
    goToUser(){
      this.$router.push('/user/u101')
    }
  },
  components: {
    
  },
  created () {

  },
  
};
</script>

