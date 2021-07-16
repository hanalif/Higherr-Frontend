<template>
  <div class="register-modal">
    <modal ref="modal" @close="close">
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
        <button class="btn" @click="close">Cancel</button>
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
      user: {
        fullname: "",
        nickname: "",
        password: "",
      },
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    registerSubmit() {
      this.$store.dispatch({ type: "signup", userCred: this.user });
      this.close();
    },
  },
  created () {
    
  },
  components: {
    modal,
  },
};
</script>