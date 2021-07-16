<template>
  <section class="user-details-page main-layout">
    <div class="user-details" v-if="user">
      <div class="info-column card-size">
        <div class="user-details-card">
          <div class="top-details">
            <div class="online-tag"><i class="fas fa-circle"></i> online</div>
            <div class="user-profile-img">
              <img
                class="profile-img"
                :src="
                  user.imgUrl ||
                  'https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_960_720.png'
                "
                alt=""
              />
            </div>
            <h2 class="profile-name-title">{{ user.fullname }}</h2>
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
            <div class="user-stats">
              <h2 class="profile-title">Description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ipsam odit facilis. Doloremque ipsa mollitia, ipsum beatae
                ratione earum laboriosam, sequi temporibus atque consequuntur
                asperiores eius rem perferendis pariatur eaque?
              </p>
            </div>
            <div class="user-stats">
              <h2 class="profile-title">Skills</h2>
              <span>Video editor</span>
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
          <div class="user-gig-card">
            <img
              src="https://www.tatapravesh.com/wp-content/uploads/2019/04/Tata-Pravesh-Pearl-Shell-Door-Teak-2.jpg"
              alt="user-avatar"
            />
            <p class="user-gig-description">
              I will do the best I can to do it
            </p>
            <i class="fas fa-pen-square user-edit-btn buttom-edit-btn"></i>
          </div>

          <div class="user-gig-card add-new-gig">
            <div @click="openGigForm" class="circle-icon">
              <i class="fas fa-plus"></i>
            </div>
            <h2 class="add-new-gig-desc">Create new gig</h2>
          </div>
        </div>
      </div>
    </div>
    <gig-edit-form ref="gigEditForm"></gig-edit-form>
  </section>
</template>

<script>
import gigEditForm from "../cmps/gig-edit-form.vue";
export default {
  data() {
    return {
      user: null,
      userGigs: [],
      isLoggedinUser: false,
    };
  },
  methods: {
    openGigForm() {
      this.$refs.gigEditForm.openModal();
    },
  },

  computed: {},
  components: {
    gigEditForm,
  },
  created() {
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