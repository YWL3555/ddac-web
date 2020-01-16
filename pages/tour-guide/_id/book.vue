<template>
  <b-modal
    :visible="true"
    ok-only size="xl"
    @hidden="closeModal"
    @ok="onOkClick"
  >
    <h2>Trip availability</h2>
    <p>Select dates for your trip</p>
    <div>
      <label for="trip-guests">Guests</label>
      <b-form-input id="trip-guests" type="number" v-model="selectedg" min="1"></b-form-input>
    </div>
    <div>
      <label for="trip-dates">Dates</label>
      <b-form-select id="trip-dates" v-model="selectedd" :options="optionsd"></b-form-select>
    </div>
  </b-modal>
</template>

<script>
  export default {
    methods: {
      closeModal () {
        this.$router.push(`/tour-guide/${this.$route.params.id}`)
      },
      onOkClick () {
        this.$router.push(`/tour-guide/confirmation`)
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
