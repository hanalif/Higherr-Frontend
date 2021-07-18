<template>
  <div class="edit-user-form-modal">
    <modal @close="close" ref="modal">
      <template v-slot:header>
        <h1></h1>
      </template>
      <template v-slot:body>
        <div class="form-body edit-modal-body">
          <h1 class="edit-user-title">Edit User Details</h1>
          <div class="user-profile-img">
             <label>
               
            <input @change="onUploadImg" type="file" hidden>
            <i class="fas fa-camera img-upload"></i>
            <div class="circle-shape-around-camera-icon"></div>
            <div class="circle-shape-around-camera-icon"></div>  
            <img v-if="isImgLoading" class="profile-img" src="https://thumbs.gfycat.com/ArtisticShoddyKudu-small.gif" alt="">
            <img v-else class="profile-img" :src="user.imgUrl" alt="">
          </label>
          </div>
          <div class="edit-container">
            <div class="edit-label-container">
                  <label>User Description:</label>
            </div>
          <div class="edit-textarea-container">
              <textarea 
            v-model="user.description"
            placeholder="Tell us about your self"
          ></textarea>
          </div>
        </div>

         <div class="edit-container">
           <div class="edit-label-container">
             <label>Skills:</label>
           </div>
          <div class="edit-textarea-container">
            <textarea
            v-model="user.skills"
            placeholder="Write your main skills"
          ></textarea>
          </div>
        </div>

        <div class="edit-container">
          <div class="edit-label-container">
               <label>From:</label>
          </div>
         <div class="edit-textarea-container">
            <input type="text" v-model="user.from" placeholder="Country">
         </div>  
        </div>
        </div>
      </template>

      <template v-slot:footer>
        <button class="btn" @click="close">Cancel</button>
        <button class="btn-primary btn" @click="formSubmit">Save</button>
      </template>
    </modal>
  </div>
</template>

<script>
import modal from "./modal.vue";
import {uploadImg} from '../services/img-upload.service.js'
export default {
  data() {
    return {
      isImgLoading: false,
      user: {
        from: "",
        description: "",
        skills: "",
        imgUrl:""
      },
    };
  },
  methods: {
    formSubmit() {},
    close() {
      this.$emit("close");
    },
    async onUploadImg(ev){
      this.isImgLoading= true;
      const res = await uploadImg(ev);
      this.user.imgUrl = res.url
      this.isImgLoading= false;
    },
    formSubmit(){
       console.log(this.user) 
       this.$emit('updateUserProfile', this.user)
       

       this.$refs.modal.closeModal();
    }
  },
  created() {
    this.user = {...this.$store.getters.loggedinUser}
  },
  components: {
    modal,
  },
};
</script>