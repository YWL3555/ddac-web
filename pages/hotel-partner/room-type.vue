<template>
  <div>
  <div id="home-img" class="view">
    <div class="container">
      <div class="row">


        <div class="col-md-12">
          <div class="row">
            <div class="col">
              <h4>Room Types</h4>
            </div>
            <div class="col" align="end" style="padding-bottom: 20px">
              <b-button variant="outline-dark" to="/hotel-partner/room-type/create">New room type</b-button>
            </div>
          </div>

          <div class="table-responsive">


            <table id="mytable" class="table table-bordred table-striped">

              <thead>

              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Maximum Pax</th>
              <th></th>

              <th></th>
              </thead>
              <tbody>

                <tr v-for="roomType in roomTypes" :key="roomType.id">
                  <td>{{roomType.name}}</td>
                  <td>{{roomType.price}}</td>
                  <td>{{roomType.quantity}}</td>
                  <td>{{roomType.maximumPax}}</td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Edit"><b-button :to="`/hotel-partner/room-type/${roomType.id}/edit`" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil">Edit</span></b-button></p></td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Delete"><b-button :to="`/hotel-partner/room-type/${roomType.id}/delete`" class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash">Delete</span></b-button></p></td>
              
                </tr>



              </tbody>

            </table>

            <div class="clearfix"></div>

          </div>

        </div>
      </div>
    </div>
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
    return $axios.get(`/api/partner/roomType`, {
  headers: {
    'Authorization': `Bearer ${store.state.auth.accessToken}`
  }}).then((res) => {
        return {roomTypes:res.data};
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

