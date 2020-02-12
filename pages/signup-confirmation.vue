<template>
  <div>
  <div id="home-img" class="view">
    <navbar />
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 text-left">
            <div class="card card-search">
              <h3>Sign up completed</h3>
              <h6>Your account has been registered successfully!</h6>
              <n-link to="/login" >Login now!</n-link>
            </div>
          </div>
          <div class="col-lg-6">
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navbar from '~/components/NavbarForLogin'

export default {
  components: {
    Navbar
  },
  layout: "home-page"
}
</script>

<style scoped>
  #home-img {
    height: 100%;
    background: url("../assets/img/kualalumpurcityscape.jpg")no-repeat fixed;
    background-size: cover;
    min-height: 800px;
  }
  .card-search {
    border: 0;
    border-radius: 0.3rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
    margin-top: 100px;
    padding: 30px;
  }
</style>
