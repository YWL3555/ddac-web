<template>
  <div>
  <div id="home-img" class="view">
    <section class="trip-section">
      <div class="container">
        <div class="row">


          <div class="col-md-12">
            <div class="row">
              <div class="col">
                <h4>iHotel partners</h4>
              </div>
              <div class="col" align="end" style="padding-bottom: 20px">
                <b-button variant="outline-dark" to="/admin/hotel/create">New iHotel partner</b-button>
              </div>
            </div>

            <div class="table-responsive">


              <table id="mytable" class="table table-bordred table-striped">

                <thead>

                <th>Username</th>
                <th>Hotel</th>
                <th>Email</th>
                <th>Status</th>

                <th></th>
                </thead>
                <tbody>

                <tr>
                  <td>ywl3344</td>
                  <td>Big Hotel</td>
                  <td>ywl3555@gmail.com</td>
                  <td>Active</td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Block"><b-button to="/admin/hotel/1/block" class="btn btn-danger btn-xs" data-title="Block" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash">Block</span></b-button></p></td>
                </tr>

                <tr>

                  <td>ywl3344</td>
                  <td>Big Hotel</td>
                  <td>ywl3555@gmail.com</td>
                  <td>Active</td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Block"><button class="btn btn-danger btn-xs" data-title="Block" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash">Block</span></button></p></td>
                </tr>


                <tr>

                  <td>ywl3344</td>
                  <td>Big Hotel</td>
                  <td>ywl3555@gmail.com</td>
                  <td>Blocked</td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Block"><button class="btn btn-danger btn-xs" data-title="Block" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash">Block</span></button></p></td>
                </tr>









                </tbody>

              </table>

              <div class="clearfix"></div>

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
  layout: "admin"
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

