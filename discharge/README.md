# 퇴원 절차 QR 안내

기존 `Perioperative Care` GitHub Pages 안에 독립된 `/discharge/` 주소로 동작하는 정적 안내문입니다. 별도 서버나 환자 로그인이 필요하지 않습니다.

## 포함 기능

- 한국어, 영어, 중국어(간체), 일본어, 베트남어 지원
- 큰 글씨와 모바일 중심의 6단계 퇴원 안내
- 원무과 전화번호 `02-853-4600` 강조 및 전화 연결
- 현재 언어의 안내문 PNG 저장
- 휴대폰 공유 기능과 링크 복사 대체 동작
- 감사 메시지 작성 후 익명 Google Form 제출, 감사카드 PNG 저장
- `?poster=1` 주소에서 병동용 QR 안내문 인쇄 및 QR PNG 저장
- 환자 개인정보를 브라우저나 서버에 저장하지 않음

## 감사 메시지 수신 연결

GitHub Pages는 정적 페이지이므로 메시지를 직접 저장하지 않습니다. 현재 안내문은 Google Form에 연결되어 있습니다.

환자가 안내문에서 감사 메시지와 태그를 작성하고 `Google Form에서 제출하기`를 누르면 다음 내용이 자동으로 채워진 Google Form으로 이동합니다.

- 감사 메시지
- 고마웠던 점

환자는 Google Form에서 내용을 확인한 뒤 마지막으로 `제출`을 누릅니다. 이메일은 수집하지 않으며 Google 로그인도 요구하지 않습니다. Form 소유자는 Google Forms의 `응답` 탭에서 내용을 확인하고 새 응답 이메일 알림을 받습니다.

### Google Form 연결 설정

연결 주소는 `config.js`의 `feedbackFormUrlTemplate`에 저장합니다. `{{message}}`, `{{tags}}` 자리표시자는 제출 시 환자가 작성한 내용으로 바뀝니다.

```js
window.DISCHARGE_CONFIG = {
  feedbackFormUrlTemplate:
    "https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=pp_url&entry.MESSAGE={{message}}&entry.TAGS={{tags}}",
  feedbackEndpoint: "",
};
```

Google에서 받은 사전 입력 링크의 실제 `entry.숫자` 값은 그대로 두고, 미리 넣은 예시 답변 부분만 `{{message}}`, `{{tags}}`로 바꿉니다. Google이 중괄호를 `%7B%7Bmessage%7D%7D`처럼 바꾸어도 동작합니다.

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
