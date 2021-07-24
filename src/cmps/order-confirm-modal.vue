<template>
  <div class="order-confirm-modal">
    <modal @close="close" ref="modal">
      <template v-slot:header>
           
        <h1></h1>
      </template>
      <template v-slot:body>
        <div class="edit-modal-body">
          <div class="circle-check-icon"><i class="fas fa-check"></i></div>
         <div class="order-confirm-modal-content">
           <h1>Awesome!</h1>
          <p>Your order has been confirmed. Check your orders for detials.</p>
         </div>
        </div>
      </template>

      <template v-slot:footer>
        <div class="buttons-container">
          <!-- <button class="btn" @click="$refs.modal.closeModal()">Cancel</button> -->
          <button class="btn-primary btn" @click="registerSubmit">
            OK
          </button>
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
import { socketService } from '../services/socket.service';
import modal from './modal.vue';
export default {
  props: {
    gig: Object,
    pkg: Object

  },
  data() {
    return {};
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    registerSubmit() {
      let dateOfCreatedOrder = `${new Date().getMonth()+1}/${new Date().getFullYear()}`;
      const orderToSave = {
        title: this.gig.title,
        status: "pending",
        createdAt: dateOfCreatedOrder,
        price: this.pkg.price,
        seller: this.gig.seller,
        buyer: {
          _id: this.loggedinUser._id,
          fullname: this.loggedinUser.fullname,
          imgUrl: this.loggedinUser.imgUrl,
        },
      };
      this.$store.dispatch({ type: "saveOrder", order: orderToSave });
      this.$refs.modal.closeModal();
    },
  },
  created() {
    
  },
  components: {
    modal,
  },
};
</script>