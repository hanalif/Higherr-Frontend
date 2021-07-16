<template>
  <div class="login-modal">
    <modal ref="modal">
      <template v-slot:header>
        <h1>Sign In</h1>
      </template>

      <template v-slot:body>
        <div class="form-body">
          <input type="text" v-model="userCred.username" placeholder="Username" />
          <input type="password" v-model="userCred.password" placeholder="Password" />
        </div>
      </template>

      <template v-slot:footer>
        <button class="btn" @click="closeModal">Cancel</button>
        <button class="btn-primary btn" @click="loginSubmit">Save</button>
      </template>
    </modal>
  </div>
</template>

<script>
import modal from "./modal.vue";
export default {
  data() {
    return {
      userCred: {
        username: "",
        password: ""
      },
    };
  },
  methods: {
    closeModal() {
      this.$refs.modal.closeModal();
      this.initUserCred();
    },
    openModal() {
      this.$refs.modal.openModal();
    },
    loginSubmit() {
      this.$store.dispatch({ type: "login", userCred: this.userCred });
      this.closeModal();
    },
    initUserCred() {
      this.userCred ={
        username: "",
        password: ""
      }
    }
  },
  create () {
    
  },
  components: {
    modal,
  },
};
</script>