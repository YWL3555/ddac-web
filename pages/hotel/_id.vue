<template>
  <div>
  <div id="home-img" class="view">
    <div class="upper-section">
      <div class="trip-info">
        <div class="row">
          <div class="col-lg-5">
            <div class="pic">
              <img src="../../assets/img/hotel1.jpg" class="rounded img-fluid trip-pic" >
            </div>
          </div>
          <div class="col-lg-7">
            <div class="info">
              <div class="info-1">
                <h2>Hotel Istana Kuala Lumpur</h2>
                <h4>Kuala Lumpur, Malaysia</h4>
                <p>★ 4.32 (43)</p>
              </div>
              <div class="info-2">
                <dt>Address</dt>
                <dd>73, Jalan Raja Chulan, Bukit Bintang, 50200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</dd>
                <dt>Contact Number</dt>
                <dd>03-2141 9988</dd>
                <dt>Facilities</dt>
                <dd>WiFi | Free Parking | Restaurant | 24-Hour Front Desk</dd>
                <dt>Room Types</dt>
                <dd><nuxt-link style="color: white" :to="`/hotel/${this.$route.params.id}/rooms`" >3 Room Types · CLick Here to View</nuxt-link></dd>
              </div>
              <div style="margin-top: 15px; color: white">
                <b-button variant="danger" style="display:inline;" :to="`/hotel/${this.$route.params.id}/book`" >Book now!</b-button>
                <h6 class="available" style="display:inline;">From RM250 / night</h6>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <section class="lower-section">
      <h2>Hotel Description</h2>
      <pre class="trip-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed. Velit dignissim sodales ut eu sem integer vitae. Condimentum mattis pellentesque id nibh. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Sed euismod nisi porta lorem mollis aliquam ut. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Amet mattis vulputate enim nulla aliquet porttitor lacus. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Facilisis leo vel fringilla est. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Urna molestie at elementum eu facilisis sed. Purus semper eget duis at tellus at urna condimentum mattis. Egestas purus viverra accumsan in nisl nisi scelerisque. Eu ultrices vitae auctor eu. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.

        Viverra maecenas accumsan lacus vel. Egestas maecenas pharetra convallis posuere morbi. Integer vitae justo eget magna. Elit ullamcorper dignissim cras tincidunt. Lacinia quis vel eros donec ac odio. Blandit aliquam etiam erat velit. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Ornare lectus sit amet est placerat in egestas erat imperdiet. Nulla aliquet enim tortor at auctor urna nunc id.

        Id semper risus in hendrerit gravida. Duis at consectetur lorem donec massa sapien faucibus. Arcu felis bibendum ut tristique et egestas quis. Massa tempor nec feugiat nisl pretium. Morbi tincidunt augue interdum velit euismod in pellentesque. Non diam phasellus vestibulum lorem sed. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Maecenas sed enim ut sem viverra aliquet eget sit amet. Turpis cursus in hac habitasse. Mi proin sed libero enim sed faucibus turpis in eu. Bibendum at varius vel pharetra. Varius duis at consectetur lorem donec massa sapien faucibus. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. At tellus at urna condimentum mattis. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Enim facilisis gravida neque convallis a cras semper. Tempus egestas sed sed risus. Sed felis eget velit aliquet sagittis id consectetur.
      </pre>
    </section>
    <section class="comment-section">
      <hr/>
      <h2 style="padding-left: 60px;">Reviews</h2>
      <div class="container">
        <div class="card" style="border: 0px;">
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
    <nuxt-child/>
  </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    imagename() {
      let address = this.$route.params.id+".jpg";
      return address;
    }
  }
}
</script>

<style scoped>

  .card-inner{
    margin-left: 4rem;
  }

  .comment-section {
    padding: 0px 30px 20px;
  }

  pre {
    overflow-x: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }

  .trip-content {
    max-width: 100%;
    font-size: 17px;
  }

  .available {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 8px;
  }

  .lower-section {
    padding: 20px 90px 0px;
  }

  .post-box {
    margin: auto;
    margin-bottom: 20px;
  }



  a {
    text-decoration: none;
    color: black;
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
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .trip-info {
    margin: auto;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  .trip-pic {
    min-width: 100%;
    min-height: 400px;
    margin: auto;
  }

  .img-fluid {

  }
  .pic {
    position: center;
    align-items: center;
    justify-content: center;
  }

  .upper-section {
    background-color: #262729;
    padding: auto;
    padding-bottom: 30px;
    padding-top: 30px;
    padding-left: 80px;
    color: white;
  }

</style>

