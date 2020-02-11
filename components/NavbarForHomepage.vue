<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="navbar-inner">
    <b-navbar-brand to="/">iHotel</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->


      <b-navbar-nav class="ml-auto" v-if="LoggedIn">

        <b-navbar-nav>
          <b-nav-item to="/trip">Hotels</b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown text="Yong Wen Li" right>
          <b-dropdown-item to="/profile">Profile</b-dropdown-item>
          <b-dropdown-item href="/my-trips">My bookings</b-dropdown-item>
          <b-dropdown-item href="/login">Sign out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-else >

        <b-navbar-nav>
          <b-nav-item to="/trip">Hotels</b-nav-item>
          <b-nav-item to="/trip">Login</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default{
  props: {
    loggedIn: {
        type: Boolean
    }
  }
}
</script>

<style scoped>
  .navbar-inner {
    background: transparent;
  }
</style>

