<template>
  <div>
    <h1>home</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch({ type: "loadUsers" });
  },
};
</script>

