<template lang="pug">
  div#home
    Header
    Hero
    Download.section__each
    Footer
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Download from '@/components/Download'
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
    Download,
    Footer
  },

}
</script>

<style lang="scss">
#hero {
  margin-top: 56px;
}

.section__each {
  padding: 48px 0 80px;
}
</style>
