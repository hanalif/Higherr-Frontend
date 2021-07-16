<template>
  <div>
    <div class="user-gig-card">
      <img
        :src="gig.imgUrls[0] || 'https://cdn.pixabay.com/photo/2016/03/21/20/05/image-1271454_960_720.png'"
        alt="gig-image"
      />
       <long-text class="user-gig-description" :txt="gig.title"/>
      <i @click="onEditGig" class="fas fa-pen-square user-edit-btn buttom-edit-btn"></i>
      <i @click="onRemoveGig" class="fas fa-trash user-edit-btn buttom-edit-btn"></i>
    </div>
    
  </div>
</template>

<script>
import longText from './long-text.vue'
export default {
    props: ['gig'],
    components:{
        longText
    },
    methods:{
      onEditGig(){
        this.$emit('editGig', this.gig._id)
      },
      onRemoveGig(){
        this.$emit('removeGig', this.gig._id)
      }
    }
    
    
};

</script>

<style lang="scss" scoped>
</style>