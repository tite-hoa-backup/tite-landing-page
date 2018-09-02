import Vue from 'vue'

export const globalVar = new Vue ({
  data: {
    companyShort: '타이트',
    companyKo: '타이트 주식회사',
    companyEn: 'Tite, Ltd',
    companyID: '452-87-01012',
    companyCEO: 'JOHNNY HAM ILMAN',
    companyAdr: '대구광역시 동구 동대구로 471 크리에이티브팩토리 401호',

    callTo: '02-0000-0000',
    mailTo: 'privacy@tite.com',

    serviceKo: '로라',
    serviceKoFull: '로컬라이프',
    serviceEn: 'Local Life',

    iosStore: '#',
    androidStore: '#',

    geolocate: '위치기반서비스이용약관',
    privacy: '개인정보처리방침',
    terms: '이용약관',
  }
})
