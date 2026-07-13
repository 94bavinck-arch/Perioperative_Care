// 감사 메시지를 한곳에서 받으려면 아래 값 중 하나를 연결하세요.
// 1) Google Form 사전입력 링크: {{message}}, {{tags}} 자리표시자 사용 가능
// 2) Formspree 같은 정적 폼 수신 endpoint
window.DISCHARGE_CONFIG = {
  feedbackFormUrlTemplate:
    "https://docs.google.com/forms/d/e/1FAIpQLSfLpmdd4b82ODBLreL4AtmZ5XyY3u4E0RlTgjMVsdGpaKoibw/viewform?usp=pp_url&entry.1750147227={{message}}&entry.830605576={{tags}}",
  feedbackEndpoint: "",
};
