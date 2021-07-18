<template>
  <div class="gig-edit-form">
    <modal @close="close" ref="modal">
      <template v-slot:header>
        <h1></h1>
      </template>
      <template v-slot:body>
        <div class="edit-modal-body">
          <h1>{{ title }}</h1>

          <div class="edit-container">
            <div class="edit-label-container">
              <label>Gig Title:</label>
            </div>
            <div class="edit-textarea-container">
              <textarea v-model="gig.title" placeholder="Gig title"></textarea>
            </div>
          </div>

          <div class="edit-container">
            <div class="edit-label-container">
              <label>Gig Description:</label>
            </div>
            <div class="edit-textarea-container">
              <textarea
                v-model="gig.jobDescription"
                placeholder="Job description"
              ></textarea>
            </div>
          </div>

          <div class="edit-container">
            <div class="edit-label-container">
              <label>Delivery time:</label>
            </div>
            <div class="edit-textarea-container info-container">
              <input name="delivery" type="number" v-model="gig.delivery" />
              <label for="delivery">days</label>
            </div>
          </div>

          <div class="edit-container">
            <div class="edit-label-container">
              <label>Price:</label>
            </div>
            <div class="edit-textarea-container info-container">
              <input name="price" type="number" v-model="gig.price" />
              <label>$</label>
            </div>
          </div>
          <div class="edit-container">
            <div class="edit-label-container">
              <label>Tags:</label>
            </div>
            <div class="edit-textarea-container tags-labels-container">
              <span v-for="(tag, index) in tagsList" :key="index">
                <div class="tag-checkbox-label">
                  <input
                    type="checkbox"
                    :id="tag"
                    :name="tag"
                    :value="tag"
                    v-model="gig.tags"
                  />
                  <label :for="tag">{{ tag }}</label>
                </div>
              </span>
            </div>
          </div>

          <div class="gig-images-edit-container">
            <div class="gig-images-edit-title">
              <label>Images</label>
              <small
                >Get noticed by the right buyers with visual examples of your
                services.</small
              >
            </div>
            <div class="gig-edit-imgs-list">
              <div class="gig-edit-img-card">
                <label >
                  <input @change="onUploadImg" type="file" hidden />
                <img v-if="isImgLoading" class="gig-edit-img-upload" src="https://thumbs.gfycat.com/ArtisticShoddyKudu-small.gif" alt="">
                <i v-else class="fas fa-camera gig-edit-img-upload"></i>
                </label>
                
              </div>
              <div
                v-for="(gigImgUrl, index) in gig.imgUrls"
                :key="index"
                class="gig-edit-img-card">
                     <img :src="gigImgUrl" alt="img" />
                <i  @click="onRemoveImgFromGig(gigImgUrl)" class="fas fa-trash gig-edit-img-trash-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:footer>
        <div class="buttons-container">
          <button class="btn"  @click="$refs.modal.closeModal()">Cancel</button>
          <button class="btn-primary btn" @click="registerSubmit">Save</button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import { uploadImg } from "../services/img-upload.service.js";
import modal from "./modal.vue";
export default {
  props: ["gigToEdit", "seller"],
  data() {
    return {
      isImgLoading: false,
      gig: {
        title: "",
        imgUrls: [
          "https://cdn.pixabay.com/photo/2017/11/10/05/04/camera-2935403_960_720.png",
        ],
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
        "home-design",
        "logo-design",
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
    async onUploadImg(ev) {
      this.isImgLoading = true;
      const res = await uploadImg(ev);
      this.gig.imgUrls.unshift(res.url);
      this.isImgLoading = false;
    },
    onRemoveImgFromGig(gigImgUrl) {
      let imgIndex = this.gig.imgUrls.findIndex((url) => url === gigImgUrl);
      this.gig.imgUrls.splice(imgIndex, 1);
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