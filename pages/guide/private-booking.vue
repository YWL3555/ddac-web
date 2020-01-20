<template>
  <div>
  <div id="home-img" class="view">
    <section class="trip-section">
      <h2 style="padding-left: 60px; padding-bottom: 20px;">Private booking crud here</h2>
    </section>
  </div>
    <nuxt-child/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  layout: "tour-guide"
}
</script>

<style scoped>

  .title {
    margin-top: auto;
    margin-bottom: auto;
  }

  .profile-pic {
    padding-bottom: 20px;
    padding-top: 20px;
  }

  .profile-info{
    text-align: center;
  }
  .content-title {
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 3px;
  }

  .card-main-content {
    min-height: 110px;
  }

  .card-body {
    padding: 5px;
  }

  .card-img-top {
    border-radius: 5px;
  }

  .guide-name {
    /*font-size: 14px;*/
    margin-top: 0px;
    margin-bottom: 3px;
    color: darkslategray;
  }

  .card-title {
    font-size: 14px;
    margin-top: 6px;
    margin-bottom: 3px;
    color: grey;
  }

  .card-title-rating {
    font-size: 14px;
    margin-top: 6px;
    margin-bottom: 3px;
    color: black;
  }

  .post-box {
    margin: auto;
    margin-bottom: 20px;
  }

  .card {
    /*border: 1px solid #ccc;*/
    /*box-shadow: 0 2px 2px #ccc;*/
    background-color: white;
    width: 90%;
    margin: auto;
    border: 0px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: 850px) {
    .card {
      width: 400px;
      margin: auto;

    }
  }

  .card-img-top {
    min-height: 170px;
  }

  .post-thumbnail {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
  }

  .post-content {
    padding: 10px;
    text-align: center;
  }

  a:hover .post-content,
  a:active .post-content {
    background-color: #ccc;
  }

  .posts {
    display: flex;
    padding: 20px;
    /*box-sizing: border-box;*/
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .view {
    padding-top: 30px;
    min-height: 630px;
  }

</style>

