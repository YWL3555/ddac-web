<template>
  <div>
  <b-navbar toggleable="lg" type="light" variant="white" class="nav">
    <b-navbar-brand to="/">iHotel</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-nav-form>
        <b-form-input class="mr-md-2" placeholder="Search"></b-form-input>
        <b-button class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" v-if="this.loggedIn">

        <b-navbar-nav>
          <b-nav-item to="/hotel">Hotels</b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown :text="this.userName ? this.userName : 'Customer' " right>
          <b-dropdown-item to="/profile">Profile</b-dropdown-item>
          <b-dropdown-item to="/my-bookings">My bookings</b-dropdown-item>
          <b-dropdown-item @click="logout">Log out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-else >

        <b-navbar-nav>
          <b-nav-item to="/hotel">Hotels</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

  export default {
    props: {
      loggedIn: Boolean,
      userName: String,
    },
    methods: {
      logout () {
        Cookie.remove('auth');
        this.$store.commit('setAuth', null);
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
  .nav {
    border-bottom: 1px solid silver;
  }
</style>

