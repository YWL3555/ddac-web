<template>
  <div>
  <div id="home-img" class="view">
    <section class="trip-section">
      <h2 style="padding-left: 60px; padding-bottom: 20px;">My bookings</h2>
      <div class="container" style="min-width:1360px; padding-bottom: 30px;">
        <div class="trip-card" style="border: 0px;">
          <div class="card-body">
            <div v-for="booking in bookings" :key="booking.key"> 
              <div class="row">
              <div class="col-md-3">
                <img :src="booking.roomType.photo" class="img rounded" style="max-width: 265px; height: 150px;"/>
              </div>
              <div class="col-md-9">
                <h5><span class="badge badge-warning">Upcoming</span>{{booking.roomType.hotel.name}}</h5>
                <div style="display:inline-block; padding-right: 30px;">
                  <dt >Date</dt>
                  <dd >{{booking.startDate}} - {{booking.endDate}}</dd>
                </div>
                <div style="display:inline-block;">
                  <dt>Pax</dt>
                  <dd>{{booking.quantity}}</dd>
                </div>
                <div>
                  <b-button variant="outline-danger" :to="`/my-bookings/${booking.id}/cancel`">Cancel booking</b-button>
                </div>

              </div>
            </div>
            <hr/>
            </div>
            <div class="row">
              <div class="col-md-3">
                <img src="../assets/img/post2.jpg" class="img rounded" style="max-width: 265px; height: 150px;"/>
              </div>
              <div class="col-md-9">
                <h5><span class="badge badge-warning">Upcoming</span> The Element KL</h5>
                <div style="display:inline-block; padding-right: 30px;">
                  <dt >Date</dt>
                  <dd >22/3/2020 - 24/3/2020</dd>
                </div>
                <div style="display:inline-block;">
                  <dt>Pax</dt>
                  <dd>3</dd>
                </div>
                <div>
                  <b-button variant="outline-danger" to="/my-bookings/3/cancel">Cancel booking</b-button>
                </div>

              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-md-3">
                <img src="../assets/img/post1.jpg" class="img rounded" style="max-width: 265px; height: 150px;"/>
              </div>
              <div class="col-md-9">
                <h5><span class="badge badge-warning">Upcoming</span>Golden Hotel Ipoh</h5>
                <div style="display:inline-block; padding-right: 30px;">
                  <dt >Date</dt>
                  <dd >2/3/2020 - 4/3/2020</dd>
                </div>
                <div style="display:inline-block;">
                  <dt>Pax</dt>
                  <dd>1</dd>
                </div>
                <div>
                  <b-button variant="outline-danger" to="/my-bookings/3/cancel">Cancel booking</b-button>
                </div>

              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-md-3">
                <img src="../assets/img/post4.jpg" class="img rounded" style="max-width: 265px; height: 150px;"/>
              </div>
              <div class="col-md-9">
                <h5><span class="badge badge-success">Ended</span> The Palace KL</h5>
                <div style="display:inline-block; padding-right: 30px;">
                  <dt >Date</dt>
                  <dd >2/2/2020 - 4/2/2020</dd>
                </div>
                <div style="display:inline-block;">
                  <dt>Pax</dt>
                  <dd>4</dd>
                </div>
                <div>
                  <b-button variant="outline-primary" to="/my-bookings/1/review">Give review</b-button>
                </div>

              </div>
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
    Logo
  },
  middleware: 'customerAuthenticated',
  asyncData({ $axios, store }){
    return $axios.get(`/api/customer/bookings`, {
  headers: {
    'Authorization': `Bearer ${store.state.auth.accessToken}`
  }}).then((res) => {
        return {bookings:res.data};
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

