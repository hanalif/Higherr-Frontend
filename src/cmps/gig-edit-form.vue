<template>
  <div class="gig-edit-form">
    <modal @close="close" ref="modal">
      <template v-slot:header>
        <h1>{{title}}</h1>
      </template>

      <template v-slot:body>
        <input type="text" v-model="gigToEdit.title" placeholder="Gig title" />
        <input type="text" v-model="gigToEdit.jobDescription" placeholder="Job description" />
        <input type="file" @change="onUploadImg">
        
        

      </template>

      <template v-slot:footer>
        <div>
          <button class="btn" @click="$refs.modal.closeModal()">Cancel</button>
          <button class="btn" @click="registerSubmit">Save</button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import modal from "./modal.vue";
import {uploadImg} from "../services/img-upload.service"
export default {
  props:['gigToEdit', 'seller'],
  data() {
    return {
      gig: {
        title: "",
        imgUrls: [''],
        price: 0,
        delivery: 0,
        jobDescription:'',
        tags: []
      },
    };
  },
  methods: {
    
  },
  computed: {
      title() {
          return 'edit or create'
      },
  },
  methods: {
    close() {
      this.$emit('close');
    },
      async onUploadImg(ev) {
      const res = await uploadImg(ev)
    },
    addImgUrl(){
        
    },
    registerSubmit() {
      this.gig.seller = this.seller
      this.$store.dispatch({ type: "saveGig", gig: this.gig });
      this.$refs.modal.closeModal();
    },
  },
  created () {
    if(this.gigToEdit?._id){
        this.gig = {...this.gigToEdit};
    }
    
  },
  components: {
    modal,
  },
};
</script>