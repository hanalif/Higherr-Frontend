<template>
  <section class="user-details-page main-layout">
    <div class="user-details" v-if="user">
      <div class="info-column card-size">
        <div class="user-details-card card">
           <i  v-if="isLoggedinUser" class="fas fa-pen-square user-edit-btn top-edit-btn"></i>
          <div class="top-details">
            <div class="user-profile-img">
              <img
                  class="profile-img"
                  :src="user.imgUrl || 'https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_960_720.png'"
                  alt="user-avatar"
                />
            </div>
            <div class="online-tag"><i class="fas fa-circle"></i> online</div>
          </div>
          <h2 class="profile-name-title">{{ user.fullname }}</h2>
          <div class="user-stats">
            <div class="user-stat-line">
              <span> <i class="fas fa-map-marker-alt"></i>from</span>
              <span>{{ user.from || "Unknown yet" }}</span>
            </div>
            <div class="user-stat-line">
              <span> <i class="fas fa-user"></i> Member since</span>
              <span>{{ user.memberSince || "unknown" }}</span>
            </div>
          </div>
          <div class="user-stats">
            <h2 class="profile-title">Description</h2>
            <p>
              {{ user.description }}
            </p>
          </div>
          <div class="user-stats">
            <h2 class="profile-title">Skills</h2>
            <span>{{ user.skills || "unknown yet" }}</span>
          </div>
        </div>
      </div>

      <div class="gigs-column">
        <div class="card">
          <div class="user-details-bar">
            <h2 class="profile-title">User gigs</h2>
          </div>
        </div>

        <div class="gigs-container">
          <template v-if="isLoggedinUser">
            <loggedinUser-gig-card
              v-for="(gig, index) in userGigs"
              :gig="gig"
              :key="index"
              @editGig="editGig"
            ></loggedinUser-gig-card >
            <div class="user-gig-card add-new-gig">
              <div @click="openGigForm" class="circle-icon">
                <i class="fas fa-plus"></i>
              </div>
              <h2 class="add-new-gig-desc">Create new gig</h2>
            </div>
          </template>
          <template v-else>
              <gig-preview  
              v-for="(gig, index) in userGigs"
              :gig="gig"
              :key="index"
            ></gig-preview>
          </template>
        </div>
      </div>
    </div>
    <gig-edit-form v-if="showEditGigModal"  @close="onEditGigClose" :seller="seller" :gigToEdit="gigToEdit"></gig-edit-form>
  </section>
</template>

<script>
import gigEditForm from "../cmps/gig-edit-form.vue";
import loggedinUserGigCard from "../cmps/loggedinUser-gig-card.vue";
import gigPreview from '../cmps/gig-preview.vue'
export default {
  data() {
    return {
      user: null,
      isLoggedinUser: false,
      gigToEdit: null,
      showEditGigModal: false
    };
  },
  methods: {
    openGigForm() {
      this.showEditGigModal = true;
    },
    async editGig(gigId){
        const gig = await this.$store.dispatch({type: 'getGigById', id: gigId})
        this.gigToEdit = gig
        this.showEditGigModal = true; 
    },
    onEditGigClose(){
      this.showEditGigModal = false
    }
    
  },

  computed: {
    gigs() {
      return this.$store.getters.getGigs;
    },
    userGigs() {
      return this.gigs.filter((gig) => gig.seller._id === this.user._id);
    },
    seller(){
      const seller = {_id : this.user._id, fullname: this.user.fullname, imgUrl: this.user.imgUrl || 'https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_960_720.png' }
      return seller
    }
  },
  components: {
    gigEditForm,
    loggedinUserGigCard,
    gigPreview
  },
  created() {
    this.$store.dispatch("loadGigs");
    let userId = this.$route.params.userId;
    this.$store.dispatch({ type: "getUserById", id: userId }).then((user) => {
      this.user = user;
      if (user._id === this.$store.getters.loggedinUser._id) {
        this.isLoggedinUser = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
</style>