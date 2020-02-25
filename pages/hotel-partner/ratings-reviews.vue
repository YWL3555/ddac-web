<template>
  <div>
  <div id="home-img" class="view">
    <section class="trip-section">
      <h2 style="padding-left: 60px; padding-bottom: 20px;">
        Ratings and reviews
      </h2>
      <div class="container">
        <div class="card" style="border: 0px;">
          <div class="card-body">
            <div v-for="ratingReview in ratingReviews" :key="ratingReview.id">
              <div class="row">
              <div class="col-md-2">
                <img :src="ratingReview.customer.profilePic" class="img img-rounded img-fluid"/>
              </div>
              <div class="col-md-10">
                <p>
                  <a class="float-left"><strong>{{ratingReview.customer.name}}</strong></a>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>

                </p>
                <div class="clearfix"></div>
                <div style="padding: 7px 0px 7px; color:#018489 ; ">{{ratingReview.rating}} ★</div>
                <p>{{ratingReview.review}}</p>
              </div>
            </div>
            <hr/>
            </div>
            
          </div>
        </div>
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
    return $axios.get(`/api/partner/ratingReview`, {
  headers: {
    'Authorization': `Bearer ${store.state.auth.accessToken}`
  }}).then((res) => {
        return {ratingReviews:res.data};
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


  a {
    text-decoration: none;
    color: black;
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

