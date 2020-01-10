<template>
  <div>
  <div id="home-img" class="view">
    <div>
      <h1>Trips</h1>
    </div>
    <section class="posts">
      <div class="row">
        <div class="col-sm-3 post-box">
      <div class="card" style="width: 18rem;" >
        <n-link to='/trip/1'>
          <div>
            <img class="card-img-top" src="../../assets/img/post1.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Trip 1</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <h5 class="card-title">Trip 2</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <h5 class="card-title">Trip 3</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <h5 class="card-title">Trip 4</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <h5 class="card-title">Trip 5</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <h5 class="card-title">Trip 6</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <h5 class="card-title">Trip 7</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <h5 class="card-title">Trip 8</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </n-link>
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

  .post-box {
    margin: auto;
    margin-bottom: 20px;
  }

  .card {
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    width: 90%;
    margin: auto;
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

</style>

