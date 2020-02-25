<template>
  <div>
  <div id="home-img" class="view">
    <div class="row tour-guide-info">
      <div class="col-5 basic-info">
        <div class="row justify-content-center">
          <div class="profile-pic">
            <img :src="profile.profilePic" class="rounded-circle img-fluid" style="width:250px;
  height:250px;
  object-fit:cover;">
          </div>
        </div>
        <div class="row">
          <div class="col" align="center" >
            <b-button variant="outline-dark" to="/profile/photo-upload">Upload new profile picture</b-button>
          </div>
        </div>
      </div>
      <div class="col-6 detail-info">
        <div class="row">
          <div class="col">
            <h1 style="padding-bottom: 10px;">My profile</h1>
          </div>
          <div class="col" align="end">
            <b-button variant="outline-dark" to="/profile/edit">Edit Profile</b-button>
          </div>
        </div>
        <dt>Name</dt>
        <dd>{{profile.name}}</dd>
        <dt>Email address</dt>
        <dd>{{profile.email}}</dd>
        <dt>Contact number</dt>
        <dd>{{profile.contactNumber}}</dd>

      </div>
      <div class="col-1"></div>
    </div>
  </div>
    <nuxt-child/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  middleware: 'customerAuthenticated',
  data () {
    return {
      file: null
    }
  },
  asyncData({ $axios, store }){
    return $axios.get(`/api/customer/profile`, {
  headers: {
    'Authorization': `Bearer ${store.state.auth.accessToken}`
  }}).then((res) => {
        return {profile:res.data};
      })
  },
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

