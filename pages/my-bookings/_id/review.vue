<template>
  <b-modal
    :visible="true"
    size="xl"
    @hidden="closeModal"
    @ok="onOkClick"
  >
    <h2>Rating & review</h2>
    <div>
      <label>Rating</label>
      <star-rating v-model="ratingReview.rating"></star-rating>
    </div>

    <div style="padding-top: 30px">
      <label>Review</label>
      <b-form-textarea
        id="textarea"
        v-model="ratingReview.review"
        placeholder="Enter your review..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </div>

  </b-modal>
</template>

<script>
  import StarRating from 'vue-star-rating'

  export default {
    components: {
      StarRating
    },
    methods: {
      closeModal () {
        this.$router.push(`/my-bookings`)
      },
      onOkClick () {
        console.log(this.ratingReview);
        this.$router.push(`/my-bookings`)
      }
    },
    data () {
      return {
        ratingReview: {
          rating: 0,
          review: null
        },
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
