<template>
  <b-modal
    :visible="true"
    size="xl"
    @hidden="closeModal"
    @ok="onOkClick"
  >
    <h2>Edit profile</h2>
    <div>
      <label for="name">Name</label>
      <b-form-input id="name" v-model="profile.name"></b-form-input>
    </div>
    <div>
      <label for="contact-number">Contact number</label>
      <b-form-input id="contact-number" v-model="profile.contactNumber"></b-form-input>
    </div>
  </b-modal>
</template>

<script>
  export default {
    computed: {

    },
    methods: {
      closeModal () {
        this.$router.push(`/profile`)
      },
      onOkClick () {
        console.log(this.profile);
        this.$router.push(`/profile`)
      }
    },
    created() {
      this.profile.name="yong wen li";
      this.profile.contactNumber="0123-2342234"
    },
    data () {
      return {
        profile: {},
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
