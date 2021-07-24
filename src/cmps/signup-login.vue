<template>
    <div>
        <form @submit.prevent="login">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username"
          v-model="credentials.username"
        />
        <input
          type="password"
          placeholder="password"
          v-model="credentials.password"
        />
        <button>Login</button>

      </form>
        <h2>Signup</h2>
        <form @submit.prevent="signup">
          <input
            type="text"
            placeholder="Username"
            v-model="signUpCredentials.username"
          />
          <input
            type="text"
            placeholder="Your full name"
            v-model="signUpCredentials.fullname"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="signUpCredentials.password"
          />
          <button>Signup</button>
        </form>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      credentials: { username: "", password: "" },
      signUpCredentials: {
        username: "",
        password: "",
        confirmPass: "",
        fullname: "",
        imgUrl: "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_960_720.png"
      },
      loggedInUser: this.$store.getters.loggedinUser,
    }
  },
   methods: {
    login() {
      this.$store
        .dispatch({ type: "login", userCred: this.credentials })
        .then((user) => {
          this.loggedInUser = user;
          this.credentials = { username: "", password: "" };
          this.isSignModal()
          this.$router.push(`/user/${this.loggedInUser._id}`);
          
        });
    },
    isSignModal(){
        this.$emit('isSignModal')
    },
    signup() {
      this.$store
        .dispatch({ type: "signup", userCred: this.signUpCredentials })
        .then((user) => {
          console.log(user)
          this.loggedInUser = user;
          this.signUpCredentials = {
            username: "",
            password: "",
            fullname: ""
          };

            this.isSignModal()
         this.loggedInUser = this.$store.getters.loggedinUser;
        }).then(()=>{
             this.$router.push(`/user/${this.loggedInUser._id}`);
        })
    },
  },
};
</script>

<style lang="scss" scoped>
</style>