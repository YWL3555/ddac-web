<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="navbar-inner">
    <b-navbar-brand href="#">APU Tour Guide Booking System</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
          <b-nav-item href="#">Tour guides</b-nav-item>
          <b-nav-item href="#">Trips</b-nav-item>
        </b-navbar-nav>

        <b-nav-item-dropdown text="TP012345" right>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">My trips</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style scoped>
  .navbar-inner {
    background: transparent;
  }
</style>

