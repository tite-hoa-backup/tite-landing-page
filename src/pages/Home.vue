<template lang="pug">
  div#home
    Header
    Hero
    Information.section__each
    Download.section__each
    Footer
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Information from '@/components/Information'
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
    Information,
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
