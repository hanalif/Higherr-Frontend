

<template>
  <div id="app">
    <app-header @signIn="onSignIn" @signUp="onSignUp" />
    <router-view />
    <app-footer />

    <register-modal ref="registerModal"></register-modal>
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import registerModal from "./cmps/register-modal.vue";

export default {
  created() {},
  methods: {
    onSignIn() {
      console.log("onSignIn");
    },
    onSignUp() {
      this.$refs.registerModal.openModal();
    }
  },
  components: {
    appHeader,
    appFooter,
    registerModal
  },
};
</script>


