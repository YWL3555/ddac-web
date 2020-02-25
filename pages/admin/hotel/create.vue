<template>
  <b-modal
    :visible="true"
    size="xl"
    @hidden="closeModal"
    @ok="onOkClick"
  >
    <h2>Create new iHotel partner</h2>
    <div>
      <label for="username">Username</label>
      <b-form-input id="name" v-model="hotel.name"></b-form-input>
    </div>
    <div>
      <label for="email">Email</label>
      <b-form-input id="email" v-model="hotel.email" type="email"></b-form-input>
    </div>
    <div>
      <label for="password">Password</label>
      <b-form-input id="password" v-model="hotel.password" type="password"></b-form-input>
    </div>
    <div>
      <label for="hotelName">Hotel name</label>
      <b-form-input id="hotelName" v-model="hotel.hotelName"></b-form-input>
    </div>
  </b-modal>
</template>

<script>
  export default {
    computed: {

    },
    methods: {
      closeModal () {
        this.$router.push(`/admin/hotel`)
      },
      onOkClick () {
        console.log(this.hotel);
        this.$axios.post(`/api/admin/partner`, {
        Email: this.email,
        Password: this.password,
        Username: this.username,
        HotelName: this.HotelName,
      },{
  headers: {
    'Authorization': `Bearer ${store.state.auth.accessToken}`
  }}).then(res => {
        this.$router.push('/admin/hotel')
      })
      .catch(e => {console.log(e)});
        this.$router.push(`/admin/hotel`)
      }
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
