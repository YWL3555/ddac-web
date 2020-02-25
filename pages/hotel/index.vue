<template>
  <div>
  <div id="home-img" class="view">
    <div>
      <h1>Hotels</h1>
    </div>
    <section class="posts">
      <div class="row">
        <div class="col-sm-3 post-box" v-for="hotel in hotels" :key="hotel.id">
          <div class="card" style="width: 18rem;" >
            <n-link :to='`/hotel/${hotel.hotel.id}`'>
              <div>
                <img class="card-img-top" :src="hotel.hotel.photo" alt="Card image cap">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <h5 class="card-title">{{hotel.hotel.city}}</h5>
                    <div>
                      <h5 class="card-title-rating">★ 4.5 (1)</h5>
                    </div>
                  </div>
                  <div class="card-main-content">
                    <div class="content-title">{{hotel.hotel.name}}</div>
                    <div class="content-date">From RM189 / night</div>
                  </div>
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
  },
  asyncData({ $axios }){
    return $axios.get(`/api/hotels`)
      .then((res) => {
        return {hotels:res.data};
      })
  },
  
}
</script>

<style scoped>

  .content-title {
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 3px;
  }

  .card-main-content {
    min-height: 60px;
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

