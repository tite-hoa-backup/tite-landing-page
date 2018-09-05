<template lang="pug">
  div#app
    vue-progress-bar
    router-view
</template>

<script>
export default {
  name: 'app',

  data () {
    return {

    }
  },

  mounted () {
    this.$Progress.finish()
  },

  // load progressbar
  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },
}
</script>

<style lang="scss">

</style>
