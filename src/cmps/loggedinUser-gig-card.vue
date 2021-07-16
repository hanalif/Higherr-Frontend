<template>
  <div>
    <div v-if="isLoggedinUser" class="user-gig-card">
      <img
        src="https://www.tatapravesh.com/wp-content/uploads/2019/04/Tata-Pravesh-Pearl-Shell-Door-Teak-2.jpg"
        alt="user-avatar"
      />
      <p class="user-gig-description">I will do the best I can to do it</p>
      <i class="fas fa-pen-square user-edit-btn buttom-edit-btn"></i>
    </div>
  </div>
</template>

<script>
export default {
    props: ['user']
    
};
</script>

<style lang="scss" scoped>
</style>