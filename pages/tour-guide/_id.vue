<template>
  <div>
  <div id="home-img" class="view">
    <div class="row tour-guide-info">
      <div class="col-5 basic-info">
        <div class="row justify-content-center">
          <div class="profile-pic">
            <img src="../../assets/img/profilepic.jpg" class="rounded-circle img-fluid" style="width:250px;
  height:250px;
  object-fit:cover;">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="profile-info">
              <div class="info-1">
                <h5>jackmaluvchina@taobao.com</h5>
                <p>★ 4.32 (43)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 detail-info">
        <h1>Hi, I'm Jack Ma</h1>
        <p style="padding-bottom: 5px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed. Velit dignissim sodales ut eu sem integer vitae. </p>
        <dt>Languages</dt>
        <dd>Mandarin, English</dd>
        <dt>Contact number</dt>
        <dd>018-8888888</dd>
        <div style="padding-top: 5px">
        <b-button variant="danger" :to="`/tour-guide/${this.$route.params.id}/book`">Book a private trip</b-button>
        </div>

      </div>
      <div class="col-1"></div>
    </div>

      <section class="posts">
        <div class="row">
          <div class="col-sm-3 post-box">
            <div class="card" style="width: 18rem;" >
              <n-link to='/trip/1'>
                <div>
                  <img class="card-img-top" src="../../assets/img/post1.jpg" alt="Card image cap">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">Kuala Lumpur</h5>
                      <div>
                        <h5 class="card-title-rating">★ 4.32 (43)</h5>
                      </div>
                    </div>
                    <div class="card-main-content">
                      <div class="content-title">Explore the beauty of Kuala Lumpur city</div>
                      <div class="content-date">3 days · 5 dates available</div>
                      <p class="guide-name">Tour guide: Yong Wen Li</p>
                    </div>
                  </div>
                </div>
              </n-link>
            </div>
          </div>
          <div class="col-sm-3 post-box">
            <div class="card" style="width: 18rem;" >
              <n-link to='/trip/2'>
                <div>
                  <img class="card-img-top" src="../../assets/img/post2.jpg" alt="Card image cap">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">Ipoh</h5>
                      <div>
                        <h5 class="card-title-rating">★ 4.22 (13)</h5>
                      </div>
                    </div>
                    <div class="card-main-content">
                      <div class="content-title">Explore the foods in Ipoh</div>
                      <div class="content-date">3 days · 5 dates available</div>
                      <p class="guide-name">Tour guide: Yong Wen Li</p>
                    </div>
                  </div>
                </div>
              </n-link>
            </div>
          </div>

          <div class="col-sm-3 post-box">
            <div class="card" style="width: 18rem;" >
              <n-link to='/trip/3'>
                <div>
                  <img class="card-img-top" src="../../assets/img/post3.jpg" alt="Card image cap">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">Penang</h5>
                      <div>
                        <h5 class="card-title-rating">★ 4.54 (7)</h5>
                      </div>
                    </div>
                    <div class="card-main-content">
                      <div class="content-title">Explore the beauty of Penang city</div>
                      <div class="content-date">3 days · 5 dates available</div>
                      <p class="guide-name">Tour guide: Yong Wen Li</p>
                    </div>
                  </div>
                </div>
              </n-link>
            </div>
          </div>

          <div class="col-sm-3 post-box">
            <div class="card" style="width: 18rem;" >
              <n-link to='/trip/4'>
                <div>
                  <img class="card-img-top" src="../../assets/img/post4.jpg" alt="Card image cap">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">Langkawi</h5>
                      <div>
                        <h5 class="card-title-rating">★ 3.32 (26)</h5>
                      </div>
                    </div>
                    <div class="card-main-content">
                      <div class="content-title">Explore the beauty of Langkawi beaches</div>
                      <div class="content-date">3 days · 5 dates available</div>
                      <p class="guide-name">Tour guide: Yong Wen Li</p>
                    </div>
                  </div>
                </div>
              </n-link>
            </div>
          </div>

          <div class="col-sm-3 post-box">
            <div class="card" style="width: 18rem;" >
              <n-link to='/trip/5'>
                <div>
                  <img class="card-img-top" src="../../assets/img/post5.jpg" alt="Card image cap">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">Langkawi</h5>
                      <div>
                        <h5 class="card-title-rating">★ 3.32 (26)</h5>
                      </div>
                    </div>
                    <div class="card-main-content">
                      <div class="content-title">Explore the beauty of Langkawi beaches</div>
                      <div class="content-date">3 days · 5 dates available</div>
                      <p class="guide-name">Tour guide: Yong Wen Li</p>
                    </div>
                  </div>
                </div>
              </n-link>
            </div>
          </div>

          <div class="col-sm-3 post-box">
            <div class="card" style="width: 18rem;" >
              <n-link to='/trip/6'>
                <div>
                  <img class="card-img-top" src="../../assets/img/post1.jpg" alt="Card image cap">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">Langkawi</h5>
                      <div>
                        <h5 class="card-title-rating">★ 3.32 (26)</h5>
                      </div>
                    </div>
                    <div class="card-main-content">
                      <div class="content-title">Explore the beauty of Langkawi beaches</div>
                      <div class="content-date">3 days · 5 dates available</div>
                      <p class="guide-name">Tour guide: Yong Wen Li</p>
                    </div>
                  </div>
                </div>
              </n-link>
            </div>
          </div>
          <div class="col-sm-3 post-box">
            <div class="card" style="width: 18rem;" >
              <n-link to='/trip/7'>
                <div>
                  <img class="card-img-top" src="../../assets/img/post2.jpg" alt="Card image cap">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">Langkawi</h5>
                      <div>
                        <h5 class="card-title-rating">★ 3.32 (26)</h5>
                      </div>
                    </div>
                    <div class="card-main-content">
                      <div class="content-title">Explore the beauty of Langkawi beaches</div>
                      <div class="content-date">3 days · 5 dates available</div>
                      <p class="guide-name">Tour guide: Yong Wen Li</p>
                    </div>
                  </div>
                </div>
              </n-link>
            </div>
          </div>

          <div class="col-sm-3 post-box">
            <div class="card" style="width: 18rem;" >
              <n-link to='/trip/8'>
                <div>
                  <img class="card-img-top" src="../../assets/img/post3.jpg" alt="Card image cap">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">Langkawi</h5>
                      <div>
                        <h5 class="card-title-rating">★ 3.32 (26)</h5>
                      </div>
                    </div>
                    <div class="card-main-content">
                      <div class="content-title">Explore the beauty of Langkawi beaches</div>
                      <div class="content-date">3 days · 5 dates available</div>
                      <p class="guide-name">Tour guide: Yong Wen Li</p>
                    </div>
                  </div>
                </div>
              </n-link>
            </div>
          </div>
        </div>
        <nuxt-child/>
      </section>
    <section class="comment-section">
      <hr/>
      <h2 style="padding-left: 60px;">Reviews</h2>
      <div class="container">
        <div class="comment-card" style="border: 0px;">
          <div class="card-body">
            <div class="row">
              <div class="col-md-2">
                <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                <p class="text-secondary text-center">15 Minutes Ago</p>
              </div>
              <div class="col-md-10">
                <p>
                  <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Yong Wen Li</strong></a>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>

                </p>
                <div class="clearfix"></div>
                <div style="padding: 7px 0px 7px; color:#018489 ; ">★ ★ ★ ★ ★</div>
                <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-md-2">
                <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                <p class="text-secondary text-center">15 Minutes Ago</p>
              </div>
              <div class="col-md-10">
                <p>
                  <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Yong Wen Li</strong></a>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>

                </p>
                <div class="clearfix"></div>
                <div style="padding: 7px 0px 7px; color:#018489 ; ">★ ★ ★ ★ ★</div>
                <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-md-2">
                <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                <p class="text-secondary text-center">15 Minutes Ago</p>
              </div>
              <div class="col-md-10">
                <p>
                  <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Yong Wen Li</strong></a>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                  <span class="float-right"><i class="text-warning fa fa-star"></i></span>

                </p>
                <div class="clearfix"></div>
                <div style="padding: 7px 0px 7px; color:#018489 ; ">★ ★ ★ ★ </div>
                <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


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


  .tour-guide-info {
    padding-top: 30px;
    /*color: white;*/
  }

  .profile-pic {
    padding-bottom: 20px;
  }

  .profile-info{
    text-align: center;
  }

  .basic-info {
    width: 20%;
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
    padding: 10px 20px;
  }



</style>

