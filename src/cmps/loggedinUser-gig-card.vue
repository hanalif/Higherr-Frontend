<template>
  <div>
    <div class="user-gig-card">
      <img
        :src="gig.imgUrls[0] || 'https://cdn.pixabay.com/photo/2016/03/21/20/05/image-1271454_960_720.png'"
        alt="gig-image"
      />
       <long-text :txt="gig.title"/>
      <i class="fas fa-pen-square user-edit-btn buttom-edit-btn"></i>
    </div>
    
  </div>
</template>

<script>
import longText from './long-text.vue'
export default {
    props: ['gig'],
    components:{
        longText
    }
    
    
};

</script>

<style lang="scss" scoped>
</style>