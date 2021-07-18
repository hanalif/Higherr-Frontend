<template>
  <div class="register-modal">
    <modal ref="modal" @close="close">
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
        username: "",
        password: "",
      },
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    registerSubmit() {
      let date = new Date;
      this.user.memberSince = date.getFullYear();
      this.user.imgUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
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