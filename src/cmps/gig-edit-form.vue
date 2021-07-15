<template>
  <div class="gig-edit-form">
    <modal ref="modal">
      <template v-slot:header>
        <h1>{{title}}</h1>
      </template>

      <template v-slot:body>
        <input type="text" v-model="gig.title" placeholder="Gig title" />
        <input type="text" v-model="gig.jobDescription" placeholder="Job description" />
        
        

      </template>

      <template v-slot:footer>
        <div>
          <button @click="$refs.modal.closeModal()">Cancel</button>
          <button @click="registerSubmit">Save</button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import modal from "./modal.vue";
export default {
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
  computed: {
      title() {
          return 'edit or create'
      }
  },
  methods: {
    closeModal() {
      this.$refs.modal.closeModal();
    },
    addImgUrl(){
        
    },
    openModal() {
      this.$refs.modal.openModal();
    },
    registerSubmit() {
      this.$store.dispatch({ type: "saveGig", gig: this.gig });
      this.$refs.modal.closeModal();
    },
  },
  components: {
    modal,
  },
};
</script>