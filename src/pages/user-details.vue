<template>
  <section class="main-layout">
    <div class="user-details">
    <div class="profile-details">
       <div class="online-tag">online</div>
      <div class="top-details"> 
      <img class="profile-img" src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png" alt="">
      <h2 class="profile-name-title">hana</h2>
      </div>
      <div class="buttom-details">

      </div>
    </div>
    <div class="gigs-container">
      <div class="user-details-bar">
        <button>create new gig</button>
      </div>
      <div class="gigs-container">
        <div class="user-gig-card">
          <img src="" alt="">
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    
  },
  computed: {
  
  },
  components: {
   
  },
  created () {
      this.user = this.$store.getters.loggedinUser
  },
};
</script>

<style lang="scss" scoped>
</style>