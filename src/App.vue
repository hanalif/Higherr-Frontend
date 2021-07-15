

<template>
  <div id="app">
    <app-header @signIn="onSignIn" @signUp="onSignUp" />
    <router-view />
    <app-footer />

    <login-modal ref="loginModal"></login-modal>
    <register-modal ref="registerModal"></register-modal>
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import registerModal from "./cmps/register-modal.vue";
import loginModal from "./cmps/login-modal.vue";

export default {
  created() {},
  methods: {
    onSignIn() {
      this.$refs.loginModal.openModal();
    },
    onSignUp() {
      this.$refs.registerModal.openModal();
    }
  },
  components: {
    appHeader,
    appFooter,
    registerModal,
    loginModal
  },
};
</script>


