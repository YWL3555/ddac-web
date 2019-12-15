<template>
  <div>
  <div id="home-img" class="view">
    <div>
      <h1>Tour guides</h1>
    </div>
  </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
  #home-img {
    height: 100%;
    background: white;
    background-size: cover;
    min-height: 700px;
  }
  .card-search {
    border: 0;
    border-radius: 0.3rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
    margin-top: 100px;
    padding: 30px;
  }
</style>
