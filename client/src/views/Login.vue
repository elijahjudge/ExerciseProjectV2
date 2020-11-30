/* eslint-disable */
<template>
  <form>
    <div class="hero-body">

      <h1 class="title" align="center" style ="font-size:65px ; color:rgb(83, 50, 180) "  > Log In </h1>

      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box" @submit.prevent="login">
              <div class="field">
                <label for="" class="label">Username</label>
                <div class="control has-icons-left">
                  <input
                    type="username"
                    id="Username"
                    placeholder="username goes here"
                    class="input"
                    v-model="username"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    id="loginPassword"
                    placeholder="*******"
                    class="input"
                    v-model="password"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox" />
                  Remember Me
                </label>
              </div>
              <div class="field is-grouped is-grouped-multiline">
                <div class="control">
                  <button
                    class="button is-primary is-small is-rounded"
                    @click="login"
                    style="width:150px"
                  >
                    submit
                  </button>
                </div>
                
                
                <div class="control">
                  <router-link
                    to="/Register"
                    class="button is-primary is-small is-rounded"
                    style="background-color:rgb(125,150,150)"
                    >Register</router-link
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { context } from "../models/context";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (context.login(this.username, this.password)) {
        this.$buefy.toast.open({
          message: "Successfully logged in",
          type: "is-success"
        });
        this.$router.push("schedule");
      } else {
        this.$buefy.toast.open({
          message: "Login failed",
          type: "is-danger"
        });
      }
    }
  }
};
</script>

<style scoped>

</style>