<template>
  <form>
    <div id="app">
      <div class="section">
        <div class="container">
          <div class="media is-pulled-right">
            <div class="media-content">
              
            </div>
          </div>
      <h1 class="title" align="center" style ="font-size:65px ; color:rgb(83, 50, 180) "  > Registration </h1>

          <form id="register-form">
            <div class="field">
              <label class="label" for="username">Username</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Username"
                  name="username"
                  v-model="username"
                /><span class="icon is-left"><i class="fa">user</i></span>
              </div>
              <label class="label" for="email">Email</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  v-model="email"
                /><span class="icon is-left"
                  ><i class="fa">envelope-square</i></span
                >
              </div>
              <div class="columns row-one">
                <div class="column">
                  <label class="label" for="firstName">First Name</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      v-model="first_name"
                    />
                  </div>
                </div>
                <div class="column">
                  <label class="label" for="lastName">Last Name</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      v-model="last_name"
                    />
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <label class="label" for="password">Password</label>
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="Password"
                      name="password"
                      v-model="password"
                    /><span class="icon is-left"><i class="fa">key</i></span>
                  </div>
                </div>
                <div class="column">
                  <label class="label" for="retypePassword"
                    >Re-Type Password</label
                  >
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="Confirm Password"
                      name="retypePassword"
                      v-model="cpassword"
                    /><span class="icon is-left"><i class="fa">lock</i></span>
                  </div>
                </div>
              </div>
              <div class="field is-grouped">
                
                <div class="control">
                  <button
                    class="button is-primary is-medium is-rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>

                <div class="control" >
                  <button 
                     class="button is-secondary is-medium is-rounded"
                    @click="undo"
                    style="background-color:rgb(125,150,150) ; color:white"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </form>
</template>

<script>

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        cpassword: ""
      },
      showError: false
    };
  },
  methods: {

    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/schedule");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  
     undo() {


      this.$refs["username"].value = "macaroni";

    }
}

}
</script>