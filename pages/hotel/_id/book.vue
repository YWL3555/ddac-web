<template>
  <b-modal
    :visible="true"
    ok-only size="xl"
    @hidden="closeModal"
    @ok="onOkClick"
  >
    <h2>Hotel availability</h2>
    <div>
      <label for="trip-pax">Pax</label>
      <b-form-input id="trip-pax" type="number" v-model="booking.pax" min="1"></b-form-input>
    </div>
    <div>
      <label for="trip-room">Room type</label>
      <b-form-select v-model="booking.room" :options="roomOptions" id="trip-room"></b-form-select>
    </div>
    <div>
      <label for="trip-start-date">Start Date</label>
      <b-form-input id="trip-start-date" type="date" v-model="booking.startDate"></b-form-input>
    </div>
    <div>
      <label for="trip-end-date">Start Date</label>
      <b-form-input id="trip-end-date" type="date" v-model="booking.endDate"></b-form-input>
    </div>
  </b-modal>
</template>

<script>
  export default {
    middleware: 'customerAuthenticated',
    methods: {
      closeModal () {
        this.$router.push(`/hotel/${this.$route.params.id}`)
      },
      onOkClick () {
        console.log(this.booking);
        this.$router.push(`/hotel/confirmation`)
      }
    },
    data () {
      return {
        selectedg: 1,
        seletecde: ["Superior Room"],
        selectedd: 'A',
        roomOptions: [
          { value: 'room1', text: 'Double Room' },
          { value: 'room2', text: 'Superior Room' }
        ],
        booking: {
          pax: 1,
          room: null,
          startDate: null,
          endDate: null
        }
      }
    },
  }
</script>
