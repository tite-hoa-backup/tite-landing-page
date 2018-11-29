<script>
import {globalVar} from '@/globalVar'

export default {
  data () {
    return {
      userAgent: undefined,
    }
  },

  metaInfo: {
    title: globalVar.serviceKo + ', ' + globalVar.serviceEn,
    titleTemplate: '%s' + '앱 다운로드',
    meta: [
      {
        name:     'description',         content: globalVar.serviceKo + '앱 다운로드',
        itemprop: 'description',         content: globalVar.serviceKo + '앱 다운로드',
        property: 'og:description',      content: globalVar.serviceKo + '앱 다운로드',
        name:     'twitter:description', content: globalVar.serviceKo + '앱 다운로드',
      }
    ]
  },

  created () {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
      this.userAgent = "Windows Phone"
    }
    else if (/android/i.test(userAgent)) {
      this.userAgent = "Android"
    }
    else if (/iPad|iPhone|iPod/.test(userAgent) || navigator.appVersion.indexOf("Mac")!=-1 && !window.MSStream) {
      this.userAgent = "iOS"
    }
    else this.userAgent = "unknown"
  },

  mounted () {
    let android = globalVar.androidStore,
        ios     = globalVar.iosStore,
        unknown = globalVar.websiteUrl

    if      (this.userAgent == "Android")  window.location.href = android;
    else if (this.userAgent == "iOS")      window.location.href = ios;
    else if (this.userAgent == "Windows Phone") {
        alert("안드로이드, iOS 운영체제에서만 다운로드 가능합니다.")
        window.location.href = unknown
    }
    else {
        alert("안드로이드, iOS 운영체제에서만 다운로드 가능합니다.")
        window.location.href = unknown
    }
  },
}
</script>
