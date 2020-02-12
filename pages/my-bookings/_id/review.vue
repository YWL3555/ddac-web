<template>
  <b-modal
    :visible="true"
    size="xl"
    @hidden="closeModal"
    @ok="onOkClick"
  >
    <h2>Review</h2>
    <star-rating></star-rating>
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
        this.$router.push(`/my-bookings`)
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
