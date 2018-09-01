<template lang="pug">
  div#footer
    div.container
      div.footer__copyright
        p.footer__copyright--text
          | © {{ thisYear }} {{ companyKo }}. {{ companyEn }}., All Rights Reserved.
        p.footer__copyright--info
          span 사업자등록번호: {{ companyID }}
          span 대표이사: {{ companyCEO }}
          span 주소: {{ companyAdr }}
          span 대표전화: {{ callTo }}
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'footer-el',

  data () {
    return {
      year: '',
      companyKo: globalVar.companyKo,
      companyEn: globalVar.companyEn,
      companyID: globalVar.companyID,
      companyCEO: globalVar.companyCEO,
      companyAdr: globalVar.companyAdr,
      callTo: globalVar.callTo,
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

    .footer__copyright--text,
    .footer__copyright--info {
      color: $text999;
      @include font-size($grid3x);
      @include line-height($grid2x);

      span {
        @include font-size($grid3x);
        @include line-height($grid2x);

        &:not(:last-child) {

          &:after {
            content: " | ";
          }
        }
      }
    }
  }
}
</style>
