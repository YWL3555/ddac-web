<template>
  <div>
  <b-navbar toggleable="lg" type="light" variant="white" class="nav">
    <b-navbar-brand to="/">APU Tour Guide Booking System</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-nav-form>
        <b-form-input class="mr-md-2" placeholder="Search"></b-form-input>
        <b-button class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
          <b-nav-item to="/tour-guide">Tour guides</b-nav-item>
          <b-nav-item to="/trip">Trips</b-nav-item>
        </b-navbar-nav>

        <b-nav-item-dropdown text="TP012345" right>
          <b-dropdown-item to="profile">Profile</b-dropdown-item>
          <b-dropdown-item href="#">My trips</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style scoped>
  .nav {
    border-bottom: 1px solid silver;
  }
</style>

