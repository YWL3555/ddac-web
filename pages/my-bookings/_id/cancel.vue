<template>
  <b-modal
    :visible="true"
    size="xl"
    @hidden="closeModal"
    @ok="onOkClick"
    ok-title="Yes"
  >
    <h2>Are you sure you want to cancel this booking?</h2>

  </b-modal>
</template>

<script>
  export default {
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
