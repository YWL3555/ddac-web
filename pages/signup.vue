<template>
  <div>
  <div id="home-img" class="view">
    <navbar />
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 text-left">
            <div class="card card-search">
              <h3>Sign up</h3>
              <b-form @submit.prevent="onSubmit">
                <div class="form-group">
                  <label for="exampleInputEmail1">Username</label>
                  <input type="text" class="form-control" id="exampleInputName" v-model="username" aria-describedby="emailHelp" placeholder="Enter your username">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp" placeholder="Enter your email address">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="Enter your password">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input type="password" class="form-control" id="exampleInputConfirmPassword1" v-model="confirmPassword" placeholder="Enter your password again">
                </div>

                <b-button type="submit" variant="btn btn-dark float-right">Sign up</b-button>
              </b-form>
              <n-link to="/login" >Have an account? Login now!</n-link>
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
  layout: "home-page",
  data() {
    return {
      username: null,
      email: null,
      password: null,
      confirmPassword: null,
    }
  },
  methods: {
    onSubmit() {
      if (this.password !== this.confirmPassword){
        return;
      }
      this.$axios.post(`/api/customer/signup`, {
        Email: this.email,
        Password: this.password,
        Username: this.username,
      }
      ).then(res => {
        this.$router.push('/signup-confirmation')
      })
      .catch(e => {console.log(e)});
    }
  }
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
