<template lang="pug">
  div#footer
    div.container
      div.footer__copyright
        p.footer__copyright--text
          | © {{ thisYear }} {{ nameKo }}. {{ nameEn }}., All Rights Reserved.
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'footer-el',

  data () {
    return {
      year: '',
      nameKo: globalVar.nameKo,
      nameEn: globalVar.nameEn,
    }
  },

  computed: {
    thisYear() {
      return this.year = new Date().getFullYear()
    }
  },
}
</script>

<style lang="scss">
@import '../style/style.scss';

#footer {
  padding: $grid8x 0;
  border-top: 1px solid $stroke;

  .footer__copyright {

    .footer__copyright--text {
      color: $text999;
      @include font-size($grid3x);
    }
  }
}
</style>
