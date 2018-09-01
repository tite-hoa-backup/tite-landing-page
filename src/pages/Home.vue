<template lang="pug">
  div#home Test
    Header
    Footer
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'home',

  data () {
    return {

    }
  },

  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

</style>
