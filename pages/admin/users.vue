<template>
  <div>
  <div id="home-img" class="view">
    <section class="trip-section">
      <div class="container">
        <div class="row">


          <div class="col-md-12">
            <h4>User CRUD</h4>
            <div class="table-responsive">


              <table id="mytable" class="table table-bordred table-striped">

                <thead>

                <th><input type="checkbox" id="checkall" /></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Edit</th>

                <th>Delete</th>
                </thead>
                <tbody>

                <tr>
                  <td><input type="checkbox" class="checkthis" /></td>
                  <td>Mohsin</td>
                  <td>Irshad</td>
                  <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                  <td>isometric.mohsin@gmail.com</td>
                  <td>+923335586757</td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p></td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>
                </tr>

                <tr>
                  <td><input type="checkbox" class="checkthis" /></td>
                  <td>Mohsin</td>
                  <td>Irshad</td>
                  <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                  <td>isometric.mohsin@gmail.com</td>
                  <td>+923335586757</td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p></td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>
                </tr>


                <tr>
                  <td><input type="checkbox" class="checkthis" /></td>
                  <td>Mohsin</td>
                  <td>Irshad</td>
                  <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                  <td>isometric.mohsin@gmail.com</td>
                  <td>+923335586757</td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p></td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>
                </tr>



                <tr>
                  <td><input type="checkbox" class="checkthis" /></td>
                  <td>Mohsin</td>
                  <td>Irshad</td>
                  <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                  <td>isometric.mohsin@gmail.com</td>
                  <td>+923335586757</td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p></td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>
                </tr>


                <tr>
                  <td><input type="checkbox" class="checkthis" /></td>
                  <td>Mohsin</td>
                  <td>Irshad</td>
                  <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                  <td>isometric.mohsin@gmail.com</td>
                  <td>+923335586757</td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p></td>
                  <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>
                </tr>





                </tbody>

              </table>

              <div class="clearfix"></div>
              <ul class="pagination pull-right">
                <li class="disabled"><a href="#"><span class="glyphicon glyphicon-chevron-left"></span></a></li>
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-chevron-right"></span></a></li>
              </ul>

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

