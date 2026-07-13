# 퇴원 절차 QR 안내

기존 `Perioperative Care` GitHub Pages 안에 독립된 `/discharge/` 주소로 동작하는 정적 안내문입니다. 별도 서버나 환자 로그인이 필요하지 않습니다.

## 포함 기능

- 한국어, 영어, 중국어(간체), 일본어, 베트남어 지원
- 큰 글씨와 모바일 중심의 6단계 퇴원 안내
- 원무과 전화번호 `02-853-4600` 강조 및 전화 연결
- 현재 언어의 안내문 PNG 저장
- 휴대폰 공유 기능과 링크 복사 대체 동작
- 화면 이동 없이 감사 메시지를 익명 Google Form에 바로 제출, 감사카드 PNG 저장
- `?poster=1` 주소에서 병동용 QR 안내문 인쇄 및 QR PNG 저장
- 환자 개인정보를 브라우저나 서버에 저장하지 않음

## 감사 메시지 수신 연결

GitHub Pages는 정적 페이지이므로 메시지를 직접 저장하지 않습니다. 현재 안내문은 Google Form에 연결되어 있습니다.

환자가 안내문에서 감사 메시지와 태그를 작성하고 `간호사에게 감사인사 전하기`를 누르면 현재 화면을 벗어나지 않고 다음 내용이 Google Form에 바로 제출됩니다.

- 감사 메시지
- 고마웠던 점

이메일은 수집하지 않으며 Google 로그인도 요구하지 않습니다. Form 소유자는 Google Forms의 `응답` 탭에서 내용을 확인하고 새 응답 이메일 알림을 받습니다.

### Google Form 바로 제출 설정

Google Form의 공개 응답 주소와 질문별 `entry.숫자` 값을 `config.js`에 저장합니다.

```js
window.DISCHARGE_CONFIG = {
  feedbackFormUrlTemplate: "",
  feedbackEndpoint: "https://docs.google.com/forms/d/e/FORM_ID/formResponse",
  feedbackEndpointType: "google-form",
  feedbackFields: {
    message: "entry.MESSAGE",
    tags: "entry.TAGS",
  },
};
```

Google에서 받은 사전 입력 링크의 실제 `entry.숫자` 값을 그대로 사용합니다. 제출 요청은 백그라운드에서 전송되므로 환자는 Google Form 화면으로 이동하지 않습니다.

### 정적 폼 endpoint

병원에서 Formspree 같은 서비스를 승인한 경우 해당 endpoint를 넣으면 페이지 안에서 바로 전송됩니다.

```js
window.DISCHARGE_CONFIG = {
  feedbackFormUrlTemplate: "",
  feedbackEndpoint: "https://formspree.io/f/FORM_ID",
};
```

환자 의견에는 이름, 병실, 환자번호, 연락처, 진단명, 수술명 등 개인정보·진료정보를 받지 않는 것을 기본으로 합니다.

## QR 안내문

배포 후 아래 주소를 열면 현재 사이트 주소가 자동으로 QR에 들어갑니다.

```text
https://94bavinck-arch.github.io/Perioperative_Care/discharge/?poster=1
```

`인쇄하기`로 A4 안내문을 출력하거나 `QR 이미지 저장`으로 QR만 저장할 수 있습니다.
