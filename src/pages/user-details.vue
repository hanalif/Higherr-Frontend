<template>
  <section class="user-details-page main-layout">
    <div class="user-details">
    <div class="info-column user-details-card">
       <div class="online-tag">online</div>
      <div class="top-details">
        <div class="user-profile-img">
          <img class="profile-img" src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png" alt="">
          </div> 
      <h2 class="profile-name-title">hana</h2>
      <div class="user-stats">
        <div class="user-stat-line">
          <span> <i class="fas fa-map-marker-alt"></i> from</span>
          <span>Israel</span>
        </div>
        <div class="user-stat-line">
          <span> <i class="fas fa-user"></i> Member since</span>
          <span>2020</span>
        </div>
      </div>
      </div>
      <div class="buttom-details">

      </div>
    </div>
    <div class="gigs-column user-details-card">
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