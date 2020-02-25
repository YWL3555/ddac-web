<template>
  <div>
    <navbar :loggedIn="loggedIn" :userName="userName" />
    <div class="main">
      <nuxt />
    </div>
    <footer class="footer">
      <div class="container">
        <span class="text-muted">Developed by Yong Wen Li (TP045014)</span>
      </div>
    </footer>


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
        loggedIn: this.$store.state.auth ? true : false,
        userName: this.$store.state.auth ? this.$store.state.auth.userName : "Customer",
      }
    }
  }
</script>

<style scoped>
  .main {
    /*padding: 10px 20px;*/
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }

  .footer {
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
  }

  .container {
    text-align: center;
    width: auto;
    max-width: 680px;
    padding: 0 15px;
  }

  .text-muted {
    color: #6c757d;
  }
</style>

