<template>

  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Get ready to be Healthy and Happy!
          </h1>
          
          <div class="control">

            <ul>

              <li>
                <router-link
                  to="/register"
                  class="btn button is-primary is-medium is-rounded"
                  >Register</router-link
                >
              </li>
              <br>
              <li>
                <router-link
                  to="/login"
                  class="btn button is-primary is-medium is-rounded"
                  >Already Registered?</router-link
                >
              </li>
              
            </ul>

          </div>
          <br>
          <h2 class="subtitle">
            register an acount to keep track of your hard work!
          </h2>
        </div>
      </div>
    </section>
    <Nav />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
.hero {
  text-align: center;
  background-image: url("../assets/exercisepic.jpg");
  background-size: cover;
  background-position: center;
  height: 600px;
 

}
.hero-body .title {
  text-shadow: 5px 5px 5px rgba(69, 4, 71, 0.6);
  padding: 40px 0 20px 0;
  font-size: 70px;
  
 
}
.subtitle {
  text-shadow: 4px 4px 4px rgba(114, 9, 114, 0.7);
  font-size: 30px;

}



</style>
