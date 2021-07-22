<template>
  <div class="user-msg">
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
          setTimeout(() => {
              this.$store.commit({type:'setMsg', msg: ''})
          },2000)
          return this.$store.getters.userMsg
      } 
  }
};
</script>