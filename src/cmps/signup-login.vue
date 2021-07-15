<template>
    <div>
        <form @submit.prevent="login">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username"
          v-model="credencials.username"
        />
        <input
          type="password"
          placeholder="password"
          v-model="credencials.password"
        />
        <button>Login</button>

      </form>
        <h2>Signup</h2>
        <form @submit.prevent="signup">
          <input
            type="text"
            placeholder="username"
            v-model="signUpCredencials.username"
          />
          <input
            type="text"
            placeholder="Your full name"
            v-model="signUpCredencials.fullname"
          />
          <input
            type="password"
            placeholder="password"
            v-model="signUpCredencials.password"
          />
          <button>Signup</button>
        </form>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      credencials: { username: "", password: "" },
      signUpCredencials: {
        username: "",
        password: "",
        fullname: "",
      },
      loggedInUser: this.$store.getters.loggedinUser,
    }
  },
   methods: {
    login() {
      this.$store
        .dispatch({ type: "login", userCred: this.credencials })
        .then((user) => {
          this.loggedInUser = user;
          this.credencials = { username: "", password: "" };
          this.isSignModal()
          this.$router.push(`/user/${this.loggedInUser.id}`);
          
        });
    },
    isSignModal(){
        this.$emit('isSignModal')
    },
    signup() {
      this.$store
        .dispatch({ type: "signup", userCred: this.signUpCredencials })
        .then((user) => {
          console.log(user)
          this.loggedInUser = user;
          this.signUpCredencials = {
            username: "",
            password: "",
            fullname: ""
          };

            this.isSignModal()
         this.loggedInUser = this.$store.getters.loggedinUser;
        }).then(()=>{
             this.$router.push(`/user/${this.loggedInUser.id}`);
        })
    },
  },
};
</script>

<style lang="scss" scoped>
</style>