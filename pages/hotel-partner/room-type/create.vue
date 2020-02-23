<template>
  <b-modal
    :visible="true"
    size="xl"
    @hidden="closeModal"
    @ok="onOkClick"
  >
    <h2>Create new room type</h2>
    <div>
      <label for="name">Name</label>
      <b-form-input id="name" v-model="roomType.name"></b-form-input>
    </div>
    <div>
      <label for="price">Price</label>
      <b-form-input id="price" v-model="roomType.price" type="number" step="0.01"></b-form-input>
    </div>
    <div>
      <label for="quantity">quantity</label>
      <b-form-input id="quantity" v-model="roomType.quantity" type="number"></b-form-input>
    </div>
    <div>
      <label for="maximumPax">Maximum pax</label>
      <b-form-input id="maximumPax" v-model="roomType.maximumPax" type="number"></b-form-input>
    </div>
    <div>
      <label for="photo">Photo</label>
      <b-form-file
        id="photo"
        v-model="roomType.file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
    </div>
  </b-modal>
</template>

<script>
  export default {
    computed: {

    },
    methods: {
      closeModal () {
        this.$router.push(`/hotel-partner/room-type`)
      },
      onOkClick () {
        console.log(this.roomType);
        this.$router.push(`/hotel-partner/room-type`)
      }
    },
    data () {
      return {
        roomType: {},
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
