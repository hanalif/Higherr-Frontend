<template>
  <div class="gig-edit-form">
    <modal @close="close" ref="modal">
      <template v-slot:header>
        <h1>{{ title }}</h1>
      </template>

      <template v-slot:body>
        <div class="gig-edit-container">
          <label>Gig Title:</label>
          <textarea
            v-model="gig.title"
            placeholder="Gig title"
          ></textarea>
        </div>
        <div class="gig-edit-container">
          <label>Gig Description:</label>
          <textarea
            v-model="gig.jobDescription"
            placeholder="Job description"
          ></textarea>
        </div>
        <div class="gig-edit-container">
          <label for="delivery"
            >Delivery time:
            <input
              name="delivery"
              type="number"
              v-model="gig.delivery"
            />days</label
          >
        </div>
        <div class="gig-edit-container">
          <label >
            Add new imgae:
              <input @change="onUploadImg" type="file" hidden>
              <i class="fas fa-camera img-upload"></i>
          </label>
          
          <div v-for="(gigImgUrl, index) in gig.imgUrls" :key="index" class="imgs-list">
            <img :src="gigImgUrl" alt="img">
            <i @click="onRemoveImgFromGig(gigImgUrl)" class="fas fa-trash"></i>
          </div>
        </div>
        <div class="gig-edit-container">
          <label for="price"
            >Price:
            <input
              name="price"
              type="number"
              v-model="gig.price"
            />$</label
          >
        </div>
        <div class="gig-edit-container">
          <label>Tags:</label>
          <span v-for="(tag, index) in tagsList" :key="index">
            <input type="checkbox" :id="tag" :name="tag" :value="tag" v-model="gig.tags" />
            <label :for="tag">{{tag}}</label>
          </span>
        </div>
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
import {uploadImg} from '../services/img-upload.service.js'
import modal from "./modal.vue";
export default {
  props: ["gigToEdit", "seller"],
  data() {
    return {
      gig: {
        title: "",
        imgUrls: ["https://cdn.pixabay.com/photo/2017/11/10/05/04/camera-2935403_960_720.png"],
        price: 0,
        delivery: 0,
        jobDescription: "",
        tags: [],
      },
      tagsList: [
        "media",
        "music",
        "web-develop",
        "grafic",
        "comunication",
        "home-Design",
      ],
    };
  },
  computed: {
    title() {
      return this.gig?._id ? "EDIT GIG" : "CREATE GIG";
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async onUploadImg(ev){
      console.log('img ev', ev.target.files[0])
      const res = await uploadImg(ev);
      this.gig.imgUrls.unshift(res.url)
    },
    onRemoveImgFromGig(gigImgUrl){
      let imgIndex = this.gig.imgUrls.findIndex(url => url === gigImgUrl)
      this.gig.imgUrls.splice(imgIndex, 1)
    },

    registerSubmit() {
      this.gig.seller = this.seller;
      this.$store.dispatch({ type: "saveGig", gig: this.gig });

      this.$refs.modal.closeModal();
    },
  },
  created() {
    if (this.gigToEdit?._id) {
      this.gig = { ...this.gigToEdit };
    }
  },
  components: {
    modal,
  },
};
</script>