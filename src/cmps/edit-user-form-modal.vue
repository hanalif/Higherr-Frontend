<template>
  <div class="user-edit-modal">
    <modal @close="close" ref="modal">
      <template v-slot:header>
        <h1>Edit User Details</h1>
      </template>

      <template v-slot:body>
        <div class="form-body">
          <input
            type="text"
            v-model="userCred.username"
            placeholder="Username"
          />
          <input
            type="password"
            v-model="userCred.password"
            placeholder="Password"
          />
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
      user: {
        from: "",
        description: "",
        skills: ""
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    loginSubmit() {
      this.$store.dispatch({ type: "login", userCred: this.userCred });
      this.close();
    },
  },
  created() {},
  components: {
    modal,
  },
};
</script>