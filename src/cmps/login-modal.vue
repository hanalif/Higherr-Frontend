<template>
  <div class="login-modal">
    <modal ref="modal" @close="close">
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
        <button class="btn" @click="close">Cancel</button>
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
    loginSubmit() {
      this.$store.dispatch({ type: "login", userCred: this.userCred });
      this.close();
    },
    close() {
      this.$emit('close');
    }
  },
  created () {
  },
  components: {
    modal,
  },
};
</script>