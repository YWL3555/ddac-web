<template>
  <b-modal
    :visible="true"
    size="xl"
    @hidden="closeModal"
    @ok="onOkClick"
  >
    <h2>Edit hotel</h2>
    <div>
      <label for="name">Name</label>
      <b-form-input id="name" v-model="hotel.name"></b-form-input>
    </div>
    <div>
      <label for="address">Address</label>
      <b-form-input id="address" v-model="hotel.address"></b-form-input>
    </div>
    <div>
      <label for="city">City</label>
      <b-form-input id="name" v-model="hotel.city"></b-form-input>
    </div>
    <div>
      <label for="state">State</label>
      <b-form-input id="state" v-model="hotel.state"></b-form-input>
    </div>
    <div>
      <label for="facilities">Facilities</label>
      <b-form-input id="facilities" v-model="hotel.facilities"></b-form-input>
    </div>
    <div>
      <label for="contact-number">Contact number</label>
      <b-form-input id="contact-number" v-model="hotel.contactNumber"></b-form-input>
    </div>
  </b-modal>
</template>

<script>
  export default {
    computed: {

    },
    methods: {
      closeModal () {
        this.$router.push(`/hotel-partner/profile`)
      },
      onOkClick () {
        console.log(this.hotel);
        this.$router.push(`/hotel-partner/profile`)
      }
    },
    created() {
      this.hotel.name="yong wen li";
      this.hotel.contactNumber="0123-2342234"
    },
    data () {
      return {
        hotel: {},
        selectedg: 1,
        selectedd: 'A',
        optionsg: [
          { value: 'A', text: 'Option A (from options prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ],
        optionsd: [
        { value: 'A', text: 'Tue, Feb 25 - Thur, Feb 29' },
        { value: 'B', text: 'Mon, Mar 1 - Wed, Mar 3' }
        ],
      }
    },
  }
</script>
