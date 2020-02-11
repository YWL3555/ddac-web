<template>
  <b-modal
    :visible="true"
    size="xl"
    hide-footer
    hide-header
    @hidden="closeModal"
    @ok="onOkClick"
  >
    <div>
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
<!--          <b-carousel-slide-->
<!--            caption="First slide"-->
<!--            text="Nulla vitae elit libero, a pharetra augue mollis interdum."-->
<!--            img-src="https://picsum.photos/1024/480/?image=52"-->
<!--          ></b-carousel-slide>-->

<!--          &lt;!&ndash; Slides with custom text &ndash;&gt;-->
<!--          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">-->
<!--            <h1>Hello world!</h1>-->
<!--          </b-carousel-slide>-->

          <!-- Slides with image only -->
          <b-carousel-slide img-src="../../../assets/img/room2.jpg">
            <h3>Double Room</h3>
            <h4>RM250 | For maximum 2 pax</h4>
          </b-carousel-slide>
          <b-carousel-slide img-src="../../../assets/img/room3.jpg">
            <h3>Double Room</h3>
            <h4>RM350 | For maximum 2 pax</h4>
          </b-carousel-slide>
          <b-carousel-slide img-src="../../../assets/img/room4.jpg">
            <h3>Double Room</h3>
            <h4>RM450 | For maximum 4 pax</h4>
          </b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
<!--          <b-carousel-slide>-->
<!--            <template v-slot:img>-->
<!--              <img-->
<!--                class="d-block img-fluid w-100"-->
<!--                width="1024"-->
<!--                height="480"-->
<!--                src="https://picsum.photos/1024/480/?image=55"-->
<!--                alt="image slot"-->
<!--              >-->
<!--            </template>-->
<!--          </b-carousel-slide>-->

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
<!--          <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">-->
<!--            <p>-->
<!--              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt-->
<!--              a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.-->
<!--            </p>-->
<!--          </b-carousel-slide>-->
        </b-carousel>
      </div>
    </div>
  </b-modal>
</template>

<script>
  export default {
    methods: {
      closeModal () {
        this.$router.push(`/hotel/${this.$route.params.id}`)
      },
      onOkClick () {
        this.$router.push(`/hotel/confirmation`)
      }
    },
    data () {
      return {
        selectedg: 1,
        selectedd: 'A',
        optionsg: [
          { value: 'A', text: 'Option A (from options prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ],
        optionsd: [
        { value: 'A', text: 'Tue, Feb 25 - Thur, Feb 29' },
        { value: 'B', text: 'Mon, Mar 1 - Wed, Mar 3' }
      ]
      }
    },
  }
</script>

<style scoped>
  .modal-dialog {
    max-width: 100%;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
  }
</style>
