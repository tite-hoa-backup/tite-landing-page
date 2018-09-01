<template lang="pug">
  div#home
    Header
    Hero
    Footer
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default {
  name: 'home',

  data () {
    return {

    }
  },

  components: {
    Header,
    Hero,
    Footer
  },

}
</script>

<style lang="scss">
#hero {
  margin-top: 56px;
}
</style>
