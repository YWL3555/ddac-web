<template>
  <div>
  <div id="home-img" class="view">
    <div>
      <b-navbar toggleable="lg" type="dark" class="navbar-inner">
        <b-navbar-brand to="/">iHotel</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>


          <!-- Right aligned nav items -->


          <b-navbar-nav class="ml-auto" v-if="LoggedIn">

            <b-navbar-nav>
              <b-nav-item to="/hotel">Hotels</b-nav-item>
            </b-navbar-nav>
            <b-nav-item-dropdown text="Yong Wen Li" right>
              <b-dropdown-item to="/profile">Profile</b-dropdown-item>
              <b-dropdown-item href="/my-bookings">My bookings</b-dropdown-item>
              <b-dropdown-item href="/login">Sign out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto" v-else >

            <b-navbar-nav>
              <b-nav-item to="/hotel">Hotels</b-nav-item>
              <b-nav-item to="/trip">Login</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 text-left">
            <div class="card card-search">
              <h3>Find and book your ideal place in Malaysia to stay!</h3>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Where</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Anywhere in Malaysia">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Start date</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="DD/MM/YYYY">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">End date</label>
                  <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="DD/MM/YYYY">
                </div>

                <button type="submit" class="btn btn-dark float-right">Search</button>
              </form>
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

export default {
  components: {
  },
  layout: "home-page",
  data () {
    return {
      LoggedIn: true
    }
  },
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
