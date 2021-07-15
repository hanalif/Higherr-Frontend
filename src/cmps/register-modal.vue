<template>
  <div class="register-modal">
    <modal ref="modal">
      <template v-slot:header>
        <h1>Sign Up</h1>
      </template>

      <template v-slot:body>
        <div class="form-body">
          <input type="text" v-model="user.fullname" placeholder="Full Name" />
          <input type="text" v-model="user.nickname" placeholder="Nickname" />
          <input type="password" v-model="user.password" placeholder="Password" />
        </div>
      </template>

      <template v-slot:footer>
        <button @click="$refs.modal.closeModal()">Cancel</button>
        <button class="btn-primary" @click="registerSubmit">Save</button>
      </template>
    </modal>
  </div>
</template>

<script>
import modal from "./modal.vue";
export default {
  data() {
    return {
      user: {
        fullname: "",
        nickname: "",
        password: "",
      },
    };
  },
  methods: {
    closeModal() {
      this.$refs.modal.closeModal();
    },
    openModal() {
      this.$refs.modal.openModal();
    },
    registerSubmit() {
      this.$store.dispatch({ type: "signup", userCred: this.user });
      this.$refs.modal.closeModal();
    },
  },
  components: {
    modal,
  },
};
</script>