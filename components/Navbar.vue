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
        <b-nav-item-dropdown text="Yong Wen Li" right>
          <b-dropdown-item to="/profile">Profile</b-dropdown-item>
          <b-dropdown-item href="/my-bookings">My bookings</b-dropdown-item>
          <b-dropdown-item href="/login">Sign out</b-dropdown-item>
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
  export default {
    props: {
      loggedIn: Boolean
    }
  }
</script>

<style scoped>
  .nav {
    border-bottom: 1px solid silver;
  }
</style>

