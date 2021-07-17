<template>
  <div class="user-edit-modal">
    <modal @close="close">
      <template v-slot:header>
        <h1>Edit User Details</h1>
      </template>

      <template v-slot:body>
        <div class="form-body">
          <input type="text" v-model="user.from" placeholder="Username" />
        </div>
      </template>

      <template v-slot:footer>
        <button class="btn" @click="close">Cancel</button>
        <button class="btn-primary btn" @click="formSubmit">Save</button>
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
        skills: "",
      },
    };
  },
  methods: {
    formSubmit() {},
    close() {
      this.$emit("close");
    },
  },
  created() {},
  components: {
    modal,
  },
};
</script>