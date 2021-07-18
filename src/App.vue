

<template>
  <div id="app">
    <app-header @signIn="onSignIn" @signUp="onSignUp" />
    <router-view :key="$route.fullPath" />

    <login-modal v-if="showLoginModal" @close="onLoginModalClose"></login-modal>
    <register-modal
      v-if="showRegisterModal"
      @close="onRegisteModalClose"
    ></register-modal>
    <app-footer />
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import registerModal from "./cmps/register-modal.vue";
import loginModal from "./cmps/login-modal.vue";

export default {
  created() {
    this.$store.dispatch('loadUsers')
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
  components: {
    appHeader,
    appFooter,
    registerModal,
    loginModal,
  },
};
</script>


