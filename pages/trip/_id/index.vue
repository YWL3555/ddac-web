<template>
  <div>
  <div id="home-img" class="view">
    <div>
      <h1>Trip {{this.$route.params.id}}</h1>
      <div class="pics">
        <div class="row">
          <div class="col-4">
            <div class="pic">
              <img src="../../../assets/img/post1.jpg" class="rounded img-fluid " >
            </div>
          </div>
        </div>

      </div>
    </div>
    <section>
      <h2>details here</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas diam in arcu cursus euismod quis viverra. At imperdiet dui accumsan sit amet nulla. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Ante metus dictum at tempor. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Penatibus et magnis dis parturient montes nascetur ridiculus. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Dolor sed viverra ipsum nunc aliquet. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Cursus sit amet dictum sit. At auctor urna nunc id cursus metus aliquam eleifend. Urna id volutpat lacus laoreet non. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Sit amet tellus cras adipiscing. Quis vel eros donec ac odio tempor. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Id cursus metus aliquam eleifend. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Sed cras ornare arcu dui vivamus arcu felis bibendum ut.

        Senectus et netus et malesuada fames ac turpis. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet risus nullam eget felis eget. Porta lorem mollis aliquam ut porttitor leo a diam. Est ante in nibh mauris cursus mattis molestie a. Etiam dignissim diam quis enim lobortis. Fermentum dui faucibus in ornare quam. Egestas purus viverra accumsan in nisl nisi. Et tortor consequat id porta nibh venenatis cras sed. Nisl rhoncus mattis rhoncus urna. Ut sem viverra aliquet eget sit amet tellus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Nibh tortor id aliquet lectus. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Arcu bibendum at varius vel pharetra vel. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Lectus urna duis convallis convallis. Proin fermentum leo vel orci porta non pulvinar. Id faucibus nisl tincidunt eget nullam non nisi est sit.</p>
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
  computed: {
    imagename() {
      let address = this.$route.params.id+".jpg";
      return address;
    }
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

  .pics {
    margin: auto;
    margin-bottom: 30px;
  }

  .img-fluid {
    max-width: 100%;
    height: 300px;
    margin: auto;
  }
  .pic {
    position: center;
    align-items: center;
    justify-content: center;
  }
</style>

