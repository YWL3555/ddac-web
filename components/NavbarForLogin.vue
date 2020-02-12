<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="navbar-inner">
    <b-navbar-brand to="/">iHotel</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->

      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Login as" right>
          <b-dropdown-item to="/login">Customer</b-dropdown-item>
          <b-dropdown-item to="/login/admin">Administrator</b-dropdown-item>
          <b-dropdown-item to="/login/tour-guide">Hotel partner</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default{

}
</script>

<style scoped>
  .navbar-inner {
    background: transparent;
  }
</style>

