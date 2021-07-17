<template>
  <div class="user-edit-modal">
    <modal @close="close" ref="modal">
      <template v-slot:header>
        <h1>Edit User Details</h1>
      </template>
      <template v-slot:body>
        <div class="form-body">
          <div class="user-profile-img">
             <label >
            Add new imgae:
              <input @change="onUploadImg" type="file" hidden>
              <i class="fas fa-camera img-upload"></i>
          </label>
              <img class="profile-img" :src="user.imgUrl" alt="">
          </div>
          <div class="user-edit-container">
          <label>User Description:</label>
          <textarea
            v-model="user.description"
            placeholder="Tell us about your self"
          ></textarea>
        </div>
         <div class="user-edit-container">
          <label>Skills:</label>
          <textarea
            v-model="user.skills"
            placeholder="Write your main skills"
          ></textarea>
        </div>
        <div class="user-edit-container">
          <label>From:</label>
          <input type="text" v-model="user.from" placeholder="Country">
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
      const res = await uploadImg(ev);
      this.user.imgUrl = res.url
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