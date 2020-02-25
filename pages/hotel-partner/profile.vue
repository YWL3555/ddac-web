<template>
  <div>
  <div id="home-img" class="view">
    <section class="trip-section">
      <div class="row">
        <h2 style="padding-left: 60px; padding-bottom: 20px;">Hotel information</h2>
        <div class="col" align="end" style="padding-right: 80px">
          <b-button variant="outline-dark" to="/hotel-partner/profile/edit">Edit information</b-button>
          <b-button variant="outline-dark" to="/profile/edit">Change login password</b-button>
        </div>
      </div>
      <div class="row tour-guide-info">
        <div class="col-5 basic-info">
          <div class="row justify-content-center">
            <div class="pic">
              <img :src="profile.photo" class="rounded img-fluid trip-pic" style="width:500px;
  height:280px;
  object-fit:cover;
  margin-bottom: 30px;">
            </div>
          </div>
          <div class="row">
            <div class="col" align="center" >
              <b-button variant="outline-dark" to="/hotel-partner/profile/photo-upload">Upload new picture</b-button>
            </div>
          </div>
        </div>
        <div class="col-6 detail-info">

          <dt>Name</dt>
          <dd>{{profile.name}}</dd>
          <dt>Address</dt>
          <dd>{{profile.address}}</dd>
          <dt>Contact number</dt>
          <dd>{{profile.contactNumber}}</dd>
          <dt>Faciities</dt>
          <dd>WiFi | Free Parking | Restaurant | 24-Hour Front Desk</dd>
          <dt>Status</dt>
          <dd>{{profile.published ? 'Published' : 'Not Published'}}</dd>

        </div>
        <div class="col-1"></div>
      </div>
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
  layout: "hotel-partner",
  asyncData({ $axios, store }){
    return $axios.get(`/api/partner/profile`, {
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

