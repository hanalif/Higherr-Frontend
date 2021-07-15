<template>
  <section class="user-details-page main-layout">
    <div class="user-details">
      <div class="info-column card-size">
        <div class="user-details-card">
          <div class="online-tag">online</div>
          <div class="top-details">
             <i class="fas fa-pen-square user-edit-btn top-edit-btn"></i>
            <div class="user-profile-img">
              <img
                class="profile-img"
                src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
                alt=""
              />
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

      <div class="gigs-column card-size">
        <div class="user-details-card">
          <div class="user-details-bar">
            <button>create new gig</button>
          </div>
        </div>

        <div class="gigs-container">
          <div class="user-gig-card">
            <img
              src="https://www.tatapravesh.com/wp-content/uploads/2019/04/Tata-Pravesh-Pearl-Shell-Door-Teak-2.jpg"
              alt=""
            />
            <p class="user-gig-description">
              I will do the best I can to do it
            </p>
            <i class="fas fa-pen-square user-edit-btn"></i>
          </div>

           <div class="user-gig-card">
            <img
              src="https://www.tatapravesh.com/wp-content/uploads/2019/04/Tata-Pravesh-Pearl-Shell-Door-Teak-2.jpg"
              alt=""
            />
            <p class="user-gig-description">
              I will do the best I can to do it
            </p>
            <i class="fas fa-pen-square user-edit-btn"></i>
          </div>

           <div class="user-gig-card">
            <img
              src="https://www.tatapravesh.com/wp-content/uploads/2019/04/Tata-Pravesh-Pearl-Shell-Door-Teak-2.jpg"
              alt=""
            />
            <p class="user-gig-description">
              I will do the best I can to do it
            </p>
            <i class="fas fa-pen-square user-edit-btn"></i>
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
  methods: {},
  computed: {},
  components: {},
  created() {
    this.user = this.$store.getters.loggedinUser;
  },
};
</script>

<style lang="scss" scoped>
</style>