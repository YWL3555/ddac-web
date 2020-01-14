<template>
  <div>
    <navbar/>
    <div class="main">
      <nuxt />
    </div>


  </div>
</template>

<script>
  import Navbar from '~/components/Navbar'
  // import TheHeader from '~/components/Navigation/TheHeader'
  // import TheSidenav from '~/components/Navigation/TheSidenav'

  export default {
    components: {
      // TheHeader,
      // TheSidenav,
      Navbar
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  .main {
    padding: 10px 20px;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }
</style>

