<template>
  <div class="register-modal">
    <modal ref="modal">
      <template v-slot:header>
        <h1>Sign Up</h1>
      </template>

      <template v-slot:body>
        <div class="form-body">
          <input type="text" v-model="user.fullname" placeholder="Full Name" />
          <input type="text" v-model="user.username" placeholder="Username" />
          <input type="password" v-model="user.password" placeholder="Password" />
        </div>
      </template>

      <template v-slot:footer>
        <button class="btn" @click="closeModal">Cancel</button>
        <button class="btn-primary btn" @click="registerSubmit">Save</button>
      </template>
    </modal>
  </div>
</template>

<script>
import modal from "./modal.vue";
export default {
  data() {
    return {
      user: Object,
    };
  },
  methods: {
    closeModal() {
      this.$refs.modal.closeModal();
      this.$emit('close');
      this.initUserData();
    },
    openModal() {
      this.$refs.modal.openModal();
    },
    registerSubmit() {
      this.$store.dispatch({ type: "signup", userCred: this.user });
      this.closeModal();
    },
    initUserData() {
      this.user = {
        fullname: "",
        username: "",
        password: "",
      }
    }
  },
  created () {
    this.initUserData();
  },
  components: {
    modal,
  },
};
</script>