<template>
  <section>
    <nav class="main-layout">
      <router-link to="/">
          logo
      </router-link>
      <router-link to="/explore">Explore</router-link>|
      <button>Sign In</button>
      <button>Join</button>

      <div class="user-menu">
          loggedinUser
          <img src="" alt="">
      </div>
    </nav>


    <div class="register-modal" hidden>
      <form>
        <h2>Login</h2>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="Your full name" />
        <input type="password" placeholder="password" />
        <button>Signup</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  nethods: {
    goHome() {
      this.$router.push('/')
    }
  }

};
</script>

