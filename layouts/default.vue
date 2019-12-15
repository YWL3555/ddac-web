<template>
  <div>
    <navbar/>
    <nuxt />
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

