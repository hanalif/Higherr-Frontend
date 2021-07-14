<template>
  <section v-if="user" class="user-details">
    <div>
    <div class="profile-details">
      <h2>hana</h2>
      
      <img src="" alt="">
    </div>
    <div class="gigs-container">
      <div class="user-details-bar">
        
      </div>
      <div class="gigs-container">

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