<template>
  <section class="user-details-page main-layout">
    <div class="user-details" v-if="user">
      <div class="info-column card-size">
        <div class="user-details-card">
          <div class="top-details">
            <i
              v-if="isLoggedinUser"
              class="fas fa-pen-square user-edit-btn top-edit-btn"
            ></i>
            <div class="user-profile-img">
              <img
                class="profile-img"
                :src="
                  user.imgUrl ||
                  'https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_960_720.png'
                "
                alt="user-avatar"
              />
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
      </div>

      <div class="gigs-column">
        <div class="user-details-card">
          <div class="user-details-bar">
            <h2 class="profile-title">User gigs</h2>
          </div>
        </div>

        <div class="gigs-container">
          <div class="loggedinUser-gig-contain" v-if="isLoggedinUser">
            <loggedinUser-gig-card
              v-for="(gig, index) in userGigs"
              :gig="gig"
              :key="index"
            ></loggedinUser-gig-card>
            <div class="user-gig-card add-new-gig">
              <div @click="openGigForm" class="circle-icon">
                <i class="fas fa-plus"></i>
              </div>
              <h2 class="profile-title">Create new gig</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <gig-edit-form ref="gigEditForm"></gig-edit-form>
  </section>
</template>

<script>
import gigEditForm from "../cmps/gig-edit-form.vue";
import loggedinUserGigCard from "../cmps/loggedinUser-gig-card.vue";
export default {
  data() {
    return {
      user: null,
      isLoggedinUser: false,
    };
  },
  methods: {
    openGigForm() {
      this.$refs.gigEditForm.openModal();
    },
  },

  computed: {
    gigs() {
      return this.$store.getters.getGigs;
    },
    userGigs() {
      return this.gigs.filter((gig) => gig.seller._id === this.user._id);
    },
  },
  components: {
    gigEditForm,
    loggedinUserGigCard,
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