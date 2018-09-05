<template lang="pug">
  div#closebtn
    a.global__cta--link(
      @click="closeWindow"
    )
      button.global__cta--btn(
        v-scroll-reveal="{ delay: 200 }"
      ) {{ $t('generic.close') }}
</template>

<script>
export default {
  name: 'closebtn',

  methods: {
    closeWindow () {
      window.open("about:blank","_self").close()
      window.postMessage('close')
    }
  },
}
</script>

<style lang="scss">

.global__cta--btn {
  color: $brand;
  display: block;
  width: $grid48x;
  height: $grid14x;
  font-weight: 900;
  border-radius: $grid48x;
  border: 2px solid $brand;
  transition: all .25s ease;
  margin: -#{$grid8x} auto $grid32x !important;

  &:hover {
    color: #fff;
    background-color: $brand;
  }
}
</style>
