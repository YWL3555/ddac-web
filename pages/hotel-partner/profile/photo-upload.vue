<template>
  <b-modal
    :visible="true"
    size="xl"
    @hidden="closeModal"
    @ok="onOkClick"
  >
    <div>
      <b-form-file
        v-model="file"
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
        this.$router.push(`/hotel-partner/profile`)
      },
      onOkClick () {
        console.log(this.file);
        this.$router.push(`/hotel-partner/profile`)
      }
    },
    data () {
      return {
        file: null,
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
