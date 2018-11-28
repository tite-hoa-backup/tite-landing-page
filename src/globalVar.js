import Vue from 'vue'

export const globalVar = new Vue ({
  data: {
    companyShort: '타이트',
    companyKo: '타이트 주식회사',
    companyEn: 'Tite, Ltd',
    companyID: '452-87-01012',
    companyCEO: 'JOHNNY HAM ILMAN',
    companyAdr: '대구광역시 동구 동대구로 471 크리에이티브팩토리 401호',

    callTo: '1544-7958',
    mailTo: 'corporate@tite.com',

    serviceKo: '로라',
    serviceKoFull: '로컬라이프',
    serviceEn: 'LocalLife',

    websiteUrl: 'https://locallife.kr',
    iosStore: 'https://itunes.apple.com/app/id1444768408',
    androidStore: 'https://play.google.com/store/apps/details?id=com.tite.locallife',

    geolocate: '위치기반서비스 이용약관',
    privacy: '개인정보처리방침',
    terms: '이용약관',
  }
})
