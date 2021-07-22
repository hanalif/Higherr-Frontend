<template>
  <div class="modal">
    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
      msg() {
          console.log( this.$store.getters.userMsg);
          return this.$store.getters.userMsg
      } 
  }
};
</script>