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
import modal from "./modal.vue";
export default {
  props: ["gigToEdit", "seller"],
  data() {
    return {
      gig: {
        title: "",
        imgUrls: [""],
        price: 0,
        delivery: 0,
        jobDescription: "",
        tags: [],
      },
      tagsList: [
        "Media",
        "Music",
        "Web-Develop",
        "Grafic",
        "Comunication",
        "Home Design",
      ],
    };
  },
  methods: {},
  computed: {
    title() {
      return this.gig?._id ? "EDIT GIG" : "CREATE GIG";
    },
  },
  methods: {
    close() {
      this.$emit("close");
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