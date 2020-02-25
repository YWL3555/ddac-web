<template>
  <div>
  <div id="home-img" class="view">
    <navbar />
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 text-left">
            <div class="card card-search">
              <h3>Login</h3>
              <b-form @submit.prevent="onSubmit">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="email" class="form-control" v-model="loginRequest.Email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" v-model="loginRequest.Password" id="exampleInputPassword1" placeholder="Enter your password">
                </div>
<div v-if="loginFailed" style="color: red">Incorrect email or password</div>
                <b-button type="submit" variant="btn btn-dark float-right">Login</b-button>
              </b-form>
              
              <n-link to="/signup" >Don't have an account? Sign up now!</n-link>
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

import qs from 'qs'

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  components: {
    Navbar
  },
  layout: "home-page",
  data() {
    return {
      loginRequest: {
        Email: null,
      Password: null
      },
      loginFailed: false,
    }
  },
  methods: {
    onSubmit() {
      this.$axios.post(`/api/customer/login`, {
        Email: this.loginRequest.Email,
        Password: this.loginRequest.Password,
      }
      ).then(res => {
        console.log(res.data.token+res.data.userName);
        const auth = {
          accessToken: res.data.token,
          userName: res.data.userName,
          role: "Customer",
        }
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/')
      }).catch(e => {
        if (e.response.status === 401){
          console.log("Incorrect password or email.");
          this.loginFailed = true;
        }
      });
    } 
  }
}
</script>

<style scoped>
  #home-img {
    height: 100%;
    background: url("../../assets/img/kualalumpurcityscape.jpg")no-repeat fixed;
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
