

<template>
  <div id="app">
    <app-header @signIn="onSignIn" @signUp="onSignUp" />
    <router-view :key="$route.fullPath" />
    <user-msg v-if="isUserMsg" />
    <login-modal v-if="showLoginModal" @close="onLoginModalClose"></login-modal>
    <register-modal v-if="showRegisterModal" @close="onRegisteModalClose">
    </register-modal>
    <app-footer />
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import registerModal from "./cmps/register-modal.vue";
import loginModal from "./cmps/login-modal.vue";
import userMsg from "./cmps/user-msg.vue";
import { socketService } from './services/socket.service';

export default {
  created() {
    this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadOrders");
    socketService.on('new-order', (order) => {
      if(this.$route.name !== 'orders'){
          this.$store.commit({ type: "incrementNumOfNewOrders"})
      }
      this.$store.commit({ type: "addOrder", order })
      console.log("new order!!", order);
    });
  },
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
    };
  },
  methods: {
    onSignIn() {
      this.showLoginModal = true;
    },
    onSignUp() {
      this.showRegisterModal = true;
    },
    onLoginModalClose() {
      this.showLoginModal = false;
    },
    onRegisteModalClose() {
      this.showRegisterModal = false;
    },
  },
  computed: {
    isUserMsg() {
      const msg = this.$store.getters.userMsg;
      if (!msg) return false;
      else return true;
    },
  },
  components: {
    appHeader,
    appFooter,
    registerModal,
    loginModal,
    userMsg,
  },
};
</script>


