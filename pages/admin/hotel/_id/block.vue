<template>
  <b-modal
    :visible="true"
    size="xl"
    @hidden="closeModal"
    @ok="onOkClick"
    ok-title="Yes"
  >
    <h4>Are you sure you want to block this partner?</h4>

  </b-modal>
</template>

<script>
  export default {
    methods: {
      closeModal () {
        this.$router.push(`/admin/hotel`)
      },
      onOkClick () {
        console.log(this.$route.params.id);
        this.$router.push(`/admin/hotel`)
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
