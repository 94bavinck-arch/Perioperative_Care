(function () {
  "use strict";

  const CONFIG = Object.assign(
    {
      feedbackFormUrlTemplate: "",
      feedbackEndpoint: "",
    },
    window.DISCHARGE_CONFIG || {}
  );

  const LANGUAGES = [
    { code: "ko", htmlLang: "ko", flag: "🇰🇷", short: "한국어" },
    { code: "en", htmlLang: "en", flag: "🇬🇧", short: "English" },
    { code: "zh", htmlLang: "zh-CN", flag: "🇨🇳", short: "中文" },
    { code: "ja", htmlLang: "ja", flag: "🇯🇵", short: "日本語" },
    { code: "vi", htmlLang: "vi", flag: "🇻🇳", short: "Tiếng Việt" },
  ];

  const COPY = {
    ko: {
      documentTitle: "퇴원 절차 안내",
      skip: "본문으로 바로가기",
      brand: "퇴원 안내",
      languageTitle: "언어를 선택하세요",
      share: "공유",
      saveImage: "이미지 저장",
      eyebrow: "퇴원 전, 순서대로 확인해주세요",
      title: "안전하고 편안한 퇴원을 함께 준비할게요",
      intro: "주치의가 퇴원을 허락하면 아래 6단계를 순서대로 진행합니다.",
      phoneTitle: "이 번호로 오는 전화를 꼭 받아주세요",
      phoneHelp: "심사가 끝나면 원무과에서 연락드립니다.",
      scanKicker: "QR CODE",
      scanTitle: "QR 안내문 이용 방법",
      scanLead: "휴대폰으로 언제든 다시 볼 수 있습니다.",
      scanSteps: [
        "휴대폰의 기본 카메라 앱을 여세요.",
        "카메라 화면 중앙에 QR 코드를 맞추세요.",
        "화면에 나타나는 링크를 눌러 안내문을 여세요.",
      ],
      scanTip: "링크가 보이지 않으면 화면을 밝게 하고 카메라 렌즈를 닦은 뒤 다시 시도해주세요.",
      procedureKicker: "DISCHARGE CHECKLIST",
      procedureTitle: "퇴원 절차",
      procedureLead: "주치의 퇴원 허락 후 다음 순서대로 진행해주세요.",
      steps: [
        {
          title: "수술·상처 부위 소독",
          body: "수술 부위와 상처 부위의 소독을 받으세요. 퇴원환자를 우선으로 진행합니다.",
        },
        {
          title: "2층에서 물리치료",
          body: "2층에서 레이저, 온열치료 등 안내받은 물리치료를 받으세요.",
        },
        {
          title: "원무과 연락 기다리기",
          body: "심사가 완료되면 원무과에서 병실 또는 개인전화로 연락드립니다. 02-853-4600 전화를 꼭 받아주세요.",
          phone: "02-853-4600 전화받기",
          important: true,
        },
        {
          title: "1층 원무과에서 수납",
          body: "연락을 받으면 1층 원무과로 가셔서 수납하세요.",
          note: "필요한 서류가 있으면 원무과에 요청해 발급받으시면 됩니다.",
        },
        {
          title: "4층 간호사실에서 퇴원약 받기",
          body: "퇴원약을 꼭 받으세요. 복약 방법과 퇴원 후 외래 방문 일정 등에 대한 설명을 들으세요.",
          important: true,
        },
        {
          title: "외래 예약 후 퇴원",
          body: "간호사실에서 안내받은 일정에 따라 1층 원무과에서 외래를 예약한 뒤 퇴원하면 됩니다.",
          note: "예약 시간에 오시더라도 외래 상황에 따라 대기할 수 있습니다.",
        },
      ],
      finalKicker: "BEFORE YOU GO",
      finalTitle: "퇴원 전 마지막 확인",
      finalItems: [
        "1층 원무과 수납·필요 서류 수령",
        "4층 간호사실 퇴원약·복약 설명 확인",
        "1층 원무과 외래 예약 완료",
      ],
      feedbackKicker: "A SMALL THANK YOU",
      feedbackTitle: "간호사에게 감사인사 전하기",
      feedbackLead: "입원 중 따뜻했던 순간을 남겨주세요. 짧은 한마디도 큰 힘이 됩니다.",
      tagLegend: "어떤 점이 고마웠나요?",
      optional: "(선택)",
      tags: ["친절한 설명", "빠른 도움", "따뜻한 위로", "세심한 간호"],
      messageLabel: "감사 메시지",
      messagePlaceholder: "예: 불안할 때 차분하게 설명해주셔서 감사했습니다.",
      privacy: "이름, 병실, 환자번호, 연락처, 진단명·수술명 등 개인정보나 진료정보는 적지 마세요.",
      sendThanks: "간호사에게 감사인사 전하기",
      saveThanks: "감사카드 이미지 저장",
      feedbackModeEndpoint: "작성한 메시지가 이 페이지에서 바로 전송됩니다.",
      feedbackModeForm: "버튼을 누르면 감사 메시지 제출 화면이 열립니다.",
      feedbackModeShare: "현재는 휴대폰 공유창이 열립니다. 메시지·카카오톡 등 전달할 앱을 선택해주세요.",
      messageRequired: "감사 메시지를 먼저 적어주세요.",
      sending: "전송 중…",
      sent: "따뜻한 마음이 전달되었습니다. 감사합니다.",
      sendFailed: "전송하지 못했습니다. 잠시 후 다시 시도해주세요.",
      shareOpened: "전달할 앱을 선택해주세요.",
      thanksCopied: "감사 메시지를 복사했습니다.",
      thanksShareTitle: "간호사에게 전하는 감사인사",
      thanksIntro: "간호사에게 전하는 감사인사",
      keepKicker: "KEEP THIS GUIDE",
      keepTitle: "안내문을 가족과 함께 확인하세요",
      keepLead: "이미지로 보관하거나 보호자에게 링크를 보낼 수 있습니다.",
      saveGuide: "안내문 이미지 저장",
      shareGuide: "보호자에게 공유",
      carePriority: "병원 상황에 따라 순서나 대기시간이 달라질 수 있으며, 담당 의료진의 설명이 우선입니다.",
      footer: "건강한 일상으로 돌아가는 길을 응원합니다.",
      posterLink: "QR 안내문 인쇄",
      posterKicker: "DISCHARGE GUIDE",
      posterTitle: "퇴원 절차, 휴대폰으로 편하게 확인하세요",
      posterLead: "카메라로 QR 코드를 비추고 화면에 뜨는 링크를 눌러주세요.",
      posterPhone: "원무과 연락 02-853-4600",
      print: "인쇄하기",
      downloadQr: "QR 이미지 저장",
      back: "안내문으로 돌아가기",
      guideShareTitle: "퇴원 절차 안내",
      guideShareText: "퇴원 절차를 순서대로 확인해주세요.",
      linkCopied: "공유 링크를 복사했습니다.",
      imageSaved: "이미지를 저장했습니다.",
      qrSaved: "QR 이미지를 저장했습니다.",
      saveFailed: "이미지를 만들지 못했습니다. 잠시 후 다시 시도해주세요.",
      posterStepTitles: ["카메라 열기", "QR 비추기", "링크 누르기"],
      canvasSubtitle: "주치의 퇴원 허락 후 순서대로 확인해주세요.",
      canvasPhone: "꼭 받아주세요  ·  02-853-4600",
    },
    en: {
      documentTitle: "Discharge Procedure Guide",
      skip: "Skip to the guide",
      brand: "Discharge Guide",
      languageTitle: "Choose your language",
      share: "Share",
      saveImage: "Save image",
      eyebrow: "Please check each step before leaving",
      title: "Let’s prepare for a safe and comfortable discharge",
      intro: "Once your attending physician approves your discharge, follow these six steps in order.",
      phoneTitle: "Please be sure to answer calls from this number",
      phoneHelp: "The Administration/Billing Office will call when the review is complete.",
      scanKicker: "QR CODE",
      scanTitle: "How to use this QR guide",
      scanLead: "You can reopen this guide on your phone at any time.",
      scanSteps: [
        "Open your phone’s Camera app.",
        "Point the camera at the QR code.",
        "Tap the link that appears on the screen.",
      ],
      scanTip: "If no link appears, brighten the area, clean the camera lens, and try again.",
      procedureKicker: "DISCHARGE CHECKLIST",
      procedureTitle: "Discharge Procedure",
      procedureLead: "After your physician approves discharge, please complete these steps in order.",
      steps: [
        {
          title: "Wound care and disinfection",
          body: "Please have your surgical site and any wound areas disinfected. Patients being discharged will be given priority.",
        },
        {
          title: "Physical therapy on the 2nd floor",
          body: "Please receive the prescribed physical therapy, such as laser or heat therapy, on the 2nd floor.",
        },
        {
          title: "Wait for the Billing Office call",
          body: "Once the review is complete, the Administration/Billing Office will call your room or personal phone. Please be sure to answer calls from 02-853-4600.",
          phone: "Answer 02-853-4600",
          important: true,
        },
        {
          title: "Pay at the 1st-floor Billing Office",
          body: "When contacted, please go to the Administration/Billing Office on the 1st floor to make your payment.",
          note: "If you need any documents, please request and collect them from the Administration/Billing Office.",
        },
        {
          title: "Collect your discharge medication on the 4th floor",
          body: "Be sure to collect your medication from the nurses’ station. You will receive medication instructions and your outpatient follow-up schedule.",
          important: true,
        },
        {
          title: "Book your outpatient visit before leaving",
          body: "Following the schedule provided by the nurses’ station, book your outpatient visit at the Administration/Billing Office on the 1st floor before leaving.",
          note: "You may still need to wait even if you arrive at your scheduled time, depending on clinic conditions.",
        },
      ],
      finalKicker: "BEFORE YOU GO",
      finalTitle: "Final check before leaving",
      finalItems: [
        "Payment and requested documents from the 1st floor",
        "Medication and instructions from the 4th-floor nurses’ station",
        "Outpatient appointment booked on the 1st floor",
      ],
      feedbackKicker: "A SMALL THANK YOU",
      feedbackTitle: "Thank a Nurse",
      feedbackLead: "Share a kind moment from your stay. Even a short note can mean a great deal.",
      tagLegend: "What did you appreciate?",
      optional: "(optional)",
      tags: ["Clear explanations", "Quick help", "Warm reassurance", "Thoughtful care"],
      messageLabel: "Thank-you message",
      messagePlaceholder: "Example: Thank you for calmly explaining everything when I felt anxious.",
      privacy: "Please do not include names, room numbers, patient numbers, contact details, diagnoses, procedures, or other personal medical information.",
      sendThanks: "Send Thanks to a Nurse",
      saveThanks: "Save thank-you card",
      feedbackModeEndpoint: "Your message will be sent directly from this page.",
      feedbackModeForm: "A thank-you submission page will open when you tap the button.",
      feedbackModeShare: "Your phone’s share menu will open. Choose Messages, KakaoTalk, or another way to send it.",
      messageRequired: "Please write your message first.",
      sending: "Sending…",
      sent: "Your kind message has been sent. Thank you.",
      sendFailed: "The message could not be sent. Please try again shortly.",
      shareOpened: "Choose an app to send your message.",
      thanksCopied: "The thank-you message was copied.",
      thanksShareTitle: "A thank-you message for a nurse",
      thanksIntro: "A thank-you message for a nurse",
      keepKicker: "KEEP THIS GUIDE",
      keepTitle: "Review this guide with your family",
      keepLead: "Save it as an image or share the link with a caregiver.",
      saveGuide: "Save guide as image",
      shareGuide: "Share with family",
      carePriority: "The order and waiting time may change depending on hospital conditions. Please follow your care team’s instructions first.",
      footer: "Wishing you a healthy return to everyday life.",
      posterLink: "Print QR sign",
      posterKicker: "DISCHARGE GUIDE",
      posterTitle: "View your discharge steps easily on your phone",
      posterLead: "Point your camera at the QR code and tap the link on the screen.",
      posterPhone: "Billing Office 02-853-4600",
      print: "Print",
      downloadQr: "Save QR image",
      back: "Back to the guide",
      guideShareTitle: "Discharge Procedure Guide",
      guideShareText: "Please review the discharge steps in order.",
      linkCopied: "The guide link was copied.",
      imageSaved: "The image was saved.",
      qrSaved: "The QR image was saved.",
      saveFailed: "The image could not be created. Please try again.",
      posterStepTitles: ["Open camera", "Scan QR code", "Tap the link"],
      canvasSubtitle: "Follow these steps after your physician approves discharge.",
      canvasPhone: "Please answer  ·  02-853-4600",
    },
    zh: {
      documentTitle: "出院流程指南",
      skip: "跳转到正文",
      brand: "出院指南",
      languageTitle: "请选择语言",
      share: "分享",
      saveImage: "保存图片",
      eyebrow: "离院前请按顺序确认",
      title: "让我们一起安心、顺利地办理出院",
      intro: "主治医生批准出院后，请按顺序完成以下六个步骤。",
      phoneTitle: "请务必接听来自此号码的电话",
      phoneHelp: "审核完成后，院务处／收费处会联系您。",
      scanKicker: "QR CODE",
      scanTitle: "二维码指南使用方法",
      scanLead: "您可随时在手机上重新查看本指南。",
      scanSteps: [
        "打开手机自带的相机应用。",
        "将二维码对准相机画面中央。",
        "点击画面上出现的链接。",
      ],
      scanTip: "如果没有出现链接，请调亮环境、擦拭镜头后再试一次。",
      procedureKicker: "DISCHARGE CHECKLIST",
      procedureTitle: "出院流程",
      procedureLead: "主治医生批准出院后，请按以下顺序办理。",
      steps: [
        {
          title: "手术及伤口部位消毒",
          body: "请接受手术部位及伤口部位的消毒处理。出院患者将优先接受处理。",
        },
        {
          title: "到2楼接受物理治疗",
          body: "请到2楼接受医生安排的物理治疗，如激光治疗、温热治疗等。",
        },
        {
          title: "等待院务处／收费处来电",
          body: "审核完成后，院务处／收费处会致电您的病房或个人手机。请务必接听来自 02-853-4600 的电话。",
          phone: "接听 02-853-4600",
          important: true,
        },
        {
          title: "到1楼院务处／收费处结算",
          body: "接到通知后，请前往1楼院务处／收费处结算费用。",
          note: "如需任何文件，请向院务处／收费处申请并领取。",
        },
        {
          title: "到4楼护士站领取出院药物",
          body: "请务必领取出院药物。工作人员将说明用药方法及出院后的门诊复诊时间等事项。",
          important: true,
        },
        {
          title: "预约门诊后离院",
          body: "请按照护士站告知的安排，到1楼院务处／收费处预约门诊后再离院。",
          note: "即使您按预约时间到院，也可能因门诊情况而需要等候。",
        },
      ],
      finalKicker: "BEFORE YOU GO",
      finalTitle: "离院前最后确认",
      finalItems: [
        "已在1楼结算并领取所需文件",
        "已在4楼护士站领取药物并听取用药说明",
        "已在1楼完成门诊预约",
      ],
      feedbackKicker: "A SMALL THANK YOU",
      feedbackTitle: "向护士表达感谢",
      feedbackLead: "请分享住院期间让您感到温暖的时刻。简短的一句话也能带来很大鼓励。",
      tagLegend: "您想感谢哪一点？",
      optional: "（选填）",
      tags: ["耐心说明", "及时帮助", "温暖安慰", "细心护理"],
      messageLabel: "感谢留言",
      messagePlaceholder: "例如：我感到不安时，谢谢您耐心、冷静地为我说明。",
      privacy: "请勿填写姓名、病房号、患者编号、联系方式、诊断、手术名称或其他个人及诊疗信息。",
      sendThanks: "向护士表达感谢",
      saveThanks: "保存感谢卡图片",
      feedbackModeEndpoint: "留言将从本页面直接发送。",
      feedbackModeForm: "点击按钮后将打开感谢留言提交页面。",
      feedbackModeShare: "将打开手机分享菜单，请选择短信、KakaoTalk 或其他发送方式。",
      messageRequired: "请先填写感谢留言。",
      sending: "发送中…",
      sent: "您的暖心留言已发送，谢谢。",
      sendFailed: "留言未能发送，请稍后再试。",
      shareOpened: "请选择发送留言的应用。",
      thanksCopied: "感谢留言已复制。",
      thanksShareTitle: "给护士的感谢留言",
      thanksIntro: "给护士的感谢留言",
      keepKicker: "KEEP THIS GUIDE",
      keepTitle: "请与家人一起查看本指南",
      keepLead: "您可以保存为图片或将链接分享给家属。",
      saveGuide: "保存指南图片",
      shareGuide: "分享给家属",
      carePriority: "流程顺序和等候时间可能因医院情况而变化，请优先遵从医护人员的说明。",
      footer: "祝您健康地回归日常生活。",
      posterLink: "打印二维码提示牌",
      posterKicker: "DISCHARGE GUIDE",
      posterTitle: "用手机轻松查看出院流程",
      posterLead: "请用相机扫描二维码，然后点击画面上出现的链接。",
      posterPhone: "院务处／收费处 02-853-4600",
      print: "打印",
      downloadQr: "保存二维码图片",
      back: "返回指南",
      guideShareTitle: "出院流程指南",
      guideShareText: "请按顺序查看出院流程。",
      linkCopied: "指南链接已复制。",
      imageSaved: "图片已保存。",
      qrSaved: "二维码图片已保存。",
      saveFailed: "无法生成图片，请稍后再试。",
      posterStepTitles: ["打开相机", "扫描二维码", "点击链接"],
      canvasSubtitle: "主治医生批准出院后，请按顺序确认。",
      canvasPhone: "请务必接听  ·  02-853-4600",
    },
    ja: {
      documentTitle: "退院手続きのご案内",
      skip: "本文へ移動",
      brand: "退院のご案内",
      languageTitle: "言語を選択してください",
      share: "共有",
      saveImage: "画像を保存",
      eyebrow: "退院前に順番どおりご確認ください",
      title: "安全で安心な退院を一緒に準備しましょう",
      intro: "主治医から退院の許可が出たら、以下の6つの手続きを順番に行ってください。",
      phoneTitle: "この番号からの電話には必ず出てください",
      phoneHelp: "審査完了後、医事課からご連絡します。",
      scanKicker: "QR CODE",
      scanTitle: "QR案内の使い方",
      scanLead: "スマートフォンでいつでもこの案内を見直せます。",
      scanSteps: [
        "スマートフォンのカメラを開きます。",
        "QRコードを画面の中央に合わせます。",
        "画面に表示されたリンクをタップします。",
      ],
      scanTip: "リンクが出ない場合は、周囲を明るくし、レンズを拭いてからもう一度お試しください。",
      procedureKicker: "DISCHARGE CHECKLIST",
      procedureTitle: "退院手続き",
      procedureLead: "主治医の退院許可後、次の順番でお進みください。",
      steps: [
        {
          title: "手術部位・傷口の消毒",
          body: "手術部位および傷口の消毒処置を受けてください。退院される患者さんが優先となります。",
        },
        {
          title: "2階で理学療法",
          body: "2階で、案内されたレーザー治療・温熱療法などの理学療法を受けてください。",
        },
        {
          title: "医事課からの連絡を待つ",
          body: "審査が完了すると、医事課から病室またはご本人の電話に連絡があります。02-853-4600 からの電話には必ず出てください。",
          phone: "02-853-4600 に出る",
          important: true,
        },
        {
          title: "1階の医事課でお支払い",
          body: "連絡を受けたら、1階の医事課でお支払いを済ませてください。",
          note: "必要な書類がある場合は、医事課に申請してお受け取りください。",
        },
        {
          title: "4階のナースステーションで退院薬を受け取る",
          body: "退院時のお薬を必ず受け取ってください。服用方法や退院後の外来受診日程などについて説明があります。",
          important: true,
        },
        {
          title: "外来予約をしてから退院",
          body: "ナースステーションで案内された日程に従い、1階の医事課で外来予約をしてから退院してください。",
          note: "予約時間に来院されても、外来の状況によりお待ちいただくことがあります。",
        },
      ],
      finalKicker: "BEFORE YOU GO",
      finalTitle: "退院前の最終確認",
      finalItems: [
        "1階で支払い・必要書類の受け取り",
        "4階で退院薬の受け取り・服薬説明の確認",
        "1階で外来予約を完了",
      ],
      feedbackKicker: "A SMALL THANK YOU",
      feedbackTitle: "看護師に感謝を伝える",
      feedbackLead: "入院中に心が温かくなった出来事をお聞かせください。短い一言も大きな励みになります。",
      tagLegend: "どのような点が嬉しかったですか？",
      optional: "（任意）",
      tags: ["丁寧な説明", "迅速な対応", "温かい励まし", "細やかなケア"],
      messageLabel: "感謝のメッセージ",
      messagePlaceholder: "例：不安なときに落ち着いて説明してくださり、ありがとうございました。",
      privacy: "氏名、病室、患者番号、連絡先、診断名、手術名などの個人情報・診療情報は入力しないでください。",
      sendThanks: "看護師に感謝を伝える",
      saveThanks: "感謝カードを画像保存",
      feedbackModeEndpoint: "メッセージはこのページから直接送信されます。",
      feedbackModeForm: "ボタンを押すと、感謝メッセージの送信画面が開きます。",
      feedbackModeShare: "スマートフォンの共有画面が開きます。メッセージやKakaoTalkなどを選んでください。",
      messageRequired: "先に感謝のメッセージをご記入ください。",
      sending: "送信中…",
      sent: "温かいお気持ちが届きました。ありがとうございます。",
      sendFailed: "送信できませんでした。しばらくしてからもう一度お試しください。",
      shareOpened: "送信するアプリを選んでください。",
      thanksCopied: "感謝のメッセージをコピーしました。",
      thanksShareTitle: "看護師への感謝メッセージ",
      thanksIntro: "看護師への感謝メッセージ",
      keepKicker: "KEEP THIS GUIDE",
      keepTitle: "ご家族と一緒にこの案内をご確認ください",
      keepLead: "画像として保存したり、リンクを家族に共有したりできます。",
      saveGuide: "案内を画像保存",
      shareGuide: "家族に共有",
      carePriority: "病院の状況により順番や待ち時間が変わる場合があります。医療スタッフの説明を優先してください。",
      footer: "健やかな日常へのお戻りを応援しています。",
      posterLink: "QR案内を印刷",
      posterKicker: "DISCHARGE GUIDE",
      posterTitle: "退院手続きをスマートフォンで簡単に確認",
      posterLead: "カメラでQRコードを読み取り、画面に表示されたリンクを押してください。",
      posterPhone: "医事課 02-853-4600",
      print: "印刷",
      downloadQr: "QR画像を保存",
      back: "案内に戻る",
      guideShareTitle: "退院手続きのご案内",
      guideShareText: "退院手続きを順番どおりご確認ください。",
      linkCopied: "案内のリンクをコピーしました。",
      imageSaved: "画像を保存しました。",
      qrSaved: "QR画像を保存しました。",
      saveFailed: "画像を作成できませんでした。もう一度お試しください。",
      posterStepTitles: ["カメラを開く", "QRを読み取る", "リンクを押す"],
      canvasSubtitle: "主治医の退院許可後、順番どおりご確認ください。",
      canvasPhone: "必ず出てください  ·  02-853-4600",
    },
    vi: {
      documentTitle: "Hướng dẫn quy trình xuất viện",
      skip: "Chuyển đến nội dung chính",
      brand: "Hướng dẫn xuất viện",
      languageTitle: "Chọn ngôn ngữ",
      share: "Chia sẻ",
      saveImage: "Lưu hình ảnh",
      eyebrow: "Vui lòng kiểm tra từng bước trước khi rời viện",
      title: "Cùng chuẩn bị để xuất viện an toàn và thuận tiện",
      intro: "Sau khi bác sĩ điều trị đồng ý cho xuất viện, vui lòng thực hiện sáu bước sau theo đúng thứ tự.",
      phoneTitle: "Vui lòng chắc chắn nghe cuộc gọi từ số này",
      phoneHelp: "Bộ phận Hành chính/Thu viện phí sẽ gọi sau khi xét duyệt xong.",
      scanKicker: "QR CODE",
      scanTitle: "Cách sử dụng hướng dẫn QR",
      scanLead: "Quý vị có thể mở lại hướng dẫn này trên điện thoại bất cứ lúc nào.",
      scanSteps: [
        "Mở ứng dụng Camera trên điện thoại.",
        "Đưa mã QR vào giữa màn hình camera.",
        "Chạm vào đường liên kết hiện trên màn hình.",
      ],
      scanTip: "Nếu không thấy đường liên kết, hãy tăng ánh sáng, lau ống kính camera rồi thử lại.",
      procedureKicker: "DISCHARGE CHECKLIST",
      procedureTitle: "Quy trình xuất viện",
      procedureLead: "Sau khi bác sĩ đồng ý cho xuất viện, vui lòng thực hiện theo thứ tự sau.",
      steps: [
        {
          title: "Sát khuẩn vùng phẫu thuật và vết thương",
          body: "Vui lòng sát khuẩn vùng phẫu thuật và vùng vết thương. Người bệnh xuất viện sẽ được ưu tiên.",
        },
        {
          title: "Vật lý trị liệu tại tầng 2",
          body: "Vui lòng đến tầng 2 để thực hiện vật lý trị liệu được hướng dẫn, như điều trị bằng laser hoặc nhiệt.",
        },
        {
          title: "Chờ cuộc gọi từ Bộ phận Thu viện phí",
          body: "Sau khi hoàn tất xét duyệt, Bộ phận Hành chính/Thu viện phí sẽ gọi đến phòng bệnh hoặc số điện thoại cá nhân. Vui lòng chắc chắn nghe cuộc gọi từ 02-853-4600.",
          phone: "Nghe máy 02-853-4600",
          important: true,
        },
        {
          title: "Thanh toán tại tầng 1",
          body: "Khi nhận được thông báo, vui lòng đến Bộ phận Hành chính/Thu viện phí ở tầng 1 để thanh toán.",
          note: "Nếu cần giấy tờ, vui lòng yêu cầu và nhận tại Bộ phận Hành chính/Thu viện phí.",
        },
        {
          title: "Nhận thuốc xuất viện tại tầng 4",
          body: "Nhất định phải nhận thuốc tại quầy điều dưỡng. Nhân viên sẽ hướng dẫn cách dùng thuốc và lịch khám ngoại trú sau khi xuất viện.",
          important: true,
        },
        {
          title: "Đặt lịch khám trước khi rời viện",
          body: "Theo lịch được quầy điều dưỡng hướng dẫn, vui lòng đặt lịch khám ngoại trú tại Bộ phận Hành chính/Thu viện phí ở tầng 1 trước khi rời viện.",
          note: "Ngay cả khi đến đúng giờ hẹn, quý vị vẫn có thể phải chờ tùy theo tình hình phòng khám ngoại trú.",
        },
      ],
      finalKicker: "BEFORE YOU GO",
      finalTitle: "Kiểm tra lần cuối trước khi rời viện",
      finalItems: [
        "Đã thanh toán và nhận giấy tờ cần thiết tại tầng 1",
        "Đã nhận thuốc và nghe hướng dẫn dùng thuốc tại tầng 4",
        "Đã đặt lịch khám ngoại trú tại tầng 1",
      ],
      feedbackKicker: "A SMALL THANK YOU",
      feedbackTitle: "Gửi lời cảm ơn đến điều dưỡng",
      feedbackLead: "Hãy chia sẻ một khoảnh khắc ấm áp trong thời gian nằm viện. Một lời nhắn ngắn cũng là nguồn động viên lớn.",
      tagLegend: "Quý vị cảm kích điều gì?",
      optional: "(không bắt buộc)",
      tags: ["Giải thích tận tình", "Giúp đỡ nhanh chóng", "An ủi ấm áp", "Chăm sóc chu đáo"],
      messageLabel: "Lời cảm ơn",
      messagePlaceholder: "Ví dụ: Cảm ơn điều dưỡng đã bình tĩnh giải thích khi tôi cảm thấy lo lắng.",
      privacy: "Vui lòng không ghi tên, số phòng, mã người bệnh, thông tin liên hệ, chẩn đoán, tên phẫu thuật hoặc thông tin cá nhân/y tế khác.",
      sendThanks: "Gửi lời cảm ơn đến điều dưỡng",
      saveThanks: "Lưu thiệp cảm ơn",
      feedbackModeEndpoint: "Lời nhắn sẽ được gửi trực tiếp từ trang này.",
      feedbackModeForm: "Trang gửi lời cảm ơn sẽ mở khi quý vị nhấn nút.",
      feedbackModeShare: "Bảng chia sẻ trên điện thoại sẽ mở. Hãy chọn Tin nhắn, KakaoTalk hoặc ứng dụng khác.",
      messageRequired: "Vui lòng viết lời cảm ơn trước.",
      sending: "Đang gửi…",
      sent: "Lời nhắn ấm áp của quý vị đã được gửi. Xin cảm ơn.",
      sendFailed: "Không thể gửi lời nhắn. Vui lòng thử lại sau.",
      shareOpened: "Hãy chọn ứng dụng để gửi lời nhắn.",
      thanksCopied: "Đã sao chép lời cảm ơn.",
      thanksShareTitle: "Lời cảm ơn gửi đến điều dưỡng",
      thanksIntro: "Lời cảm ơn gửi đến điều dưỡng",
      keepKicker: "KEEP THIS GUIDE",
      keepTitle: "Hãy xem hướng dẫn này cùng gia đình",
      keepLead: "Quý vị có thể lưu thành hình ảnh hoặc chia sẻ liên kết với người thân.",
      saveGuide: "Lưu hướng dẫn dạng ảnh",
      shareGuide: "Chia sẻ với gia đình",
      carePriority: "Thứ tự và thời gian chờ có thể thay đổi tùy theo tình hình bệnh viện. Vui lòng ưu tiên làm theo hướng dẫn của nhân viên y tế.",
      footer: "Chúc quý vị khỏe mạnh trở lại cuộc sống thường ngày.",
      posterLink: "In bảng QR",
      posterKicker: "DISCHARGE GUIDE",
      posterTitle: "Dễ dàng xem quy trình xuất viện trên điện thoại",
      posterLead: "Hướng camera vào mã QR và chạm vào đường liên kết hiện trên màn hình.",
      posterPhone: "Bộ phận Thu viện phí 02-853-4600",
      print: "In",
      downloadQr: "Lưu ảnh QR",
      back: "Trở lại hướng dẫn",
      guideShareTitle: "Hướng dẫn quy trình xuất viện",
      guideShareText: "Vui lòng kiểm tra quy trình xuất viện theo thứ tự.",
      linkCopied: "Đã sao chép liên kết hướng dẫn.",
      imageSaved: "Đã lưu hình ảnh.",
      qrSaved: "Đã lưu hình ảnh QR.",
      saveFailed: "Không thể tạo hình ảnh. Vui lòng thử lại.",
      posterStepTitles: ["Mở camera", "Quét mã QR", "Chạm liên kết"],
      canvasSubtitle: "Thực hiện theo thứ tự sau khi bác sĩ đồng ý cho xuất viện.",
      canvasPhone: "Vui lòng nghe máy  ·  02-853-4600",
    },
  };

  const els = {};
  let currentLanguage = "ko";
  let selectedTags = new Set();
  let toastTimer = null;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    bindElements();
    currentLanguage = chooseInitialLanguage();
    buildLanguageButtons();
    bindEvents();
    render();

    const params = new URLSearchParams(window.location.search);
    if (params.get("poster") === "1") {
      showPoster();
    }
  }

  function bindElements() {
    [
      "skipLink", "guideView", "posterView", "brandText", "headerShareButton", "headerShareLabel",
      "headerSaveButton", "headerSaveLabel", "languageTitle", "languageButtons", "eyebrow", "pageTitle",
      "heroIntro", "phoneTitle", "phoneHelp", "scanKicker", "scanTitle", "scanLead", "scanSteps",
      "scanTip", "procedureKicker", "procedureTitle", "procedureLead", "dischargeSteps", "finalKicker",
      "finalCheckTitle", "finalCheckItems", "feedbackKicker", "feedbackTitle", "feedbackLead", "tagLegend",
      "feedbackTags", "messageLabel", "feedbackMessage", "privacyText", "feedbackModeNote", "feedbackForm",
      "sendThanksButton", "sendThanksLabel", "saveThanksButton", "saveThanksLabel", "feedbackStatus",
      "keepKicker", "keepTitle", "keepLead", "saveGuideButton", "saveGuideLabel", "shareGuideButton",
      "shareGuideLabel", "carePriority", "footerText", "posterLink", "posterKicker", "posterTitle", "posterLead",
      "posterQrCanvas", "posterSteps", "posterLanguages", "posterPhone", "printPosterButton", "downloadQrButton",
      "backToGuideLink", "toast",
    ].forEach((id) => {
      els[id] = document.getElementById(id);
    });
  }

  function bindEvents() {
    els.headerShareButton.addEventListener("click", shareGuide);
    els.shareGuideButton.addEventListener("click", shareGuide);
    els.headerSaveButton.addEventListener("click", saveGuideImage);
    els.saveGuideButton.addEventListener("click", saveGuideImage);
    els.feedbackForm.addEventListener("submit", submitThanks);
    els.saveThanksButton.addEventListener("click", saveThanksImage);
    els.printPosterButton.addEventListener("click", () => window.print());
    els.downloadQrButton.addEventListener("click", downloadPosterQr);
  }

  function chooseInitialLanguage() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = normalizeLanguage(params.get("lang"));
    if (fromUrl) return fromUrl;

    try {
      const saved = normalizeLanguage(window.localStorage.getItem("discharge-language"));
      if (saved) return saved;
    } catch (_error) {
      // Storage is optional.
    }

    const preferred = (navigator.languages || [navigator.language || "ko"])
      .map(normalizeLanguage)
      .find(Boolean);
    return preferred || "ko";
  }

  function normalizeLanguage(value) {
    const code = String(value || "").toLowerCase().split("-")[0];
    return LANGUAGES.some((language) => language.code === code) ? code : "";
  }

  function buildLanguageButtons() {
    els.languageButtons.innerHTML = "";
    LANGUAGES.forEach((language) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "language-button";
      button.dataset.language = language.code;
      button.setAttribute("role", "radio");
      button.setAttribute("aria-checked", language.code === currentLanguage ? "true" : "false");
      button.setAttribute("aria-label", language.short);

      const flag = document.createElement("span");
      flag.className = "flag";
      flag.setAttribute("aria-hidden", "true");
      flag.textContent = language.flag;

      const name = document.createElement("span");
      name.className = "language-name";
      name.textContent = language.short;
      button.append(flag, name);
      button.addEventListener("click", () => setLanguage(language.code));
      els.languageButtons.appendChild(button);
    });
  }

  function setLanguage(code) {
    if (!COPY[code]) return;
    currentLanguage = code;
    selectedTags.clear();
    try {
      window.localStorage.setItem("discharge-language", code);
    } catch (_error) {
      // Storage is optional.
    }

    const url = new URL(window.location.href);
    url.searchParams.set("lang", code);
    window.history.replaceState({}, "", url);
    render();
  }

  function render() {
    const copy = COPY[currentLanguage];
    const language = LANGUAGES.find((item) => item.code === currentLanguage);
    document.documentElement.lang = language.htmlLang;
    document.title = copy.documentTitle;

    setTexts({
      skipLink: copy.skip,
      brandText: copy.brand,
      headerShareLabel: copy.share,
      headerSaveLabel: copy.saveImage,
      languageTitle: copy.languageTitle,
      eyebrow: copy.eyebrow,
      pageTitle: copy.title,
      heroIntro: copy.intro,
      phoneTitle: copy.phoneTitle,
      phoneHelp: copy.phoneHelp,
      scanKicker: copy.scanKicker,
      scanTitle: copy.scanTitle,
      scanLead: copy.scanLead,
      scanTip: copy.scanTip,
      procedureKicker: copy.procedureKicker,
      procedureTitle: copy.procedureTitle,
      procedureLead: copy.procedureLead,
      finalKicker: copy.finalKicker,
      finalCheckTitle: copy.finalTitle,
      feedbackKicker: copy.feedbackKicker,
      feedbackTitle: copy.feedbackTitle,
      feedbackLead: copy.feedbackLead,
      messageLabel: copy.messageLabel,
      privacyText: copy.privacy,
      sendThanksLabel: copy.sendThanks,
      saveThanksLabel: copy.saveThanks,
      keepKicker: copy.keepKicker,
      keepTitle: copy.keepTitle,
      keepLead: copy.keepLead,
      saveGuideLabel: copy.saveGuide,
      shareGuideLabel: copy.shareGuide,
      carePriority: copy.carePriority,
      footerText: copy.footer,
      posterLink: copy.posterLink,
      posterKicker: copy.posterKicker,
      posterTitle: copy.posterTitle,
      posterLead: copy.posterLead,
      posterPhone: copy.posterPhone,
      printPosterButton: copy.print,
      downloadQrButton: copy.downloadQr,
      backToGuideLink: copy.back,
    });

    els.tagLegend.textContent = `${copy.tagLegend} `;
    const optional = document.createElement("span");
    optional.textContent = copy.optional;
    els.tagLegend.appendChild(optional);
    els.feedbackMessage.placeholder = copy.messagePlaceholder;
    els.feedbackStatus.textContent = "";
    els.feedbackStatus.classList.remove("error");
    els.feedbackModeNote.textContent = CONFIG.feedbackEndpoint
      ? copy.feedbackModeEndpoint
      : CONFIG.feedbackFormUrlTemplate
        ? copy.feedbackModeForm
        : copy.feedbackModeShare;
    els.posterLink.href = posterUrl(currentLanguage);

    renderLanguageState();
    renderScanSteps(copy);
    renderProcedure(copy);
    renderFinalCheck(copy);
    renderFeedbackTags(copy);

    const params = new URLSearchParams(window.location.search);
    if (params.get("poster") === "1") renderPoster(copy);
  }

  function setTexts(values) {
    Object.entries(values).forEach(([id, value]) => {
      if (els[id]) els[id].textContent = value;
    });
  }

  function renderLanguageState() {
    els.languageButtons.querySelectorAll(".language-button").forEach((button) => {
      button.setAttribute("aria-checked", button.dataset.language === currentLanguage ? "true" : "false");
    });
    els.languageButtons.setAttribute("aria-label", COPY[currentLanguage].languageTitle);
  }

  function renderScanSteps(copy) {
    els.scanSteps.innerHTML = "";
    copy.scanSteps.forEach((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      els.scanSteps.appendChild(item);
    });
  }

  function renderProcedure(copy) {
    els.dischargeSteps.innerHTML = "";
    copy.steps.forEach((step, index) => {
      const article = document.createElement("article");
      article.className = `step-card${step.important ? " important" : ""}`;

      const number = document.createElement("span");
      number.className = "step-number";
      number.setAttribute("aria-hidden", "true");
      number.textContent = String(index + 1).padStart(2, "0");

      const content = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = step.title;
      const body = document.createElement("p");
      body.textContent = step.body;
      content.append(title, body);

      if (step.phone) {
        const phone = document.createElement("a");
        phone.className = "step-phone";
        phone.href = "tel:028534600";
        phone.textContent = `☎ ${step.phone}`;
        content.appendChild(phone);
      }

      if (step.note) {
        const note = document.createElement("div");
        note.className = "step-note";
        note.textContent = `※ ${step.note}`;
        content.appendChild(note);
      }

      article.append(number, content);
      els.dischargeSteps.appendChild(article);
    });
  }

  function renderFinalCheck(copy) {
    els.finalCheckItems.innerHTML = "";
    copy.finalItems.forEach((text) => {
      const item = document.createElement("div");
      item.className = "check-item";
      const icon = document.createElement("span");
      icon.className = "check-dot";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = "✓";
      const label = document.createElement("span");
      label.textContent = text;
      item.append(icon, label);
      els.finalCheckItems.appendChild(item);
    });
  }

  function renderFeedbackTags(copy) {
    els.feedbackTags.innerHTML = "";
    copy.tags.forEach((tag, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "tag-button";
      button.dataset.index = String(index);
      button.setAttribute("aria-pressed", selectedTags.has(index) ? "true" : "false");
      button.textContent = tag;
      button.addEventListener("click", () => {
        if (selectedTags.has(index)) selectedTags.delete(index);
        else selectedTags.add(index);
        button.setAttribute("aria-pressed", selectedTags.has(index) ? "true" : "false");
      });
      els.feedbackTags.appendChild(button);
    });
  }

  async function shareGuide() {
    const copy = COPY[currentLanguage];
    const url = guideUrl(currentLanguage);
    if (navigator.share) {
      try {
        await navigator.share({
          title: copy.guideShareTitle,
          text: copy.guideShareText,
          url,
        });
        return;
      } catch (error) {
        if (error && error.name === "AbortError") return;
      }
    }

    const copied = await copyText(url);
    toast(copied ? copy.linkCopied : copy.guideShareText);
  }

  async function submitThanks(event) {
    event.preventDefault();
    const copy = COPY[currentLanguage];
    const message = els.feedbackMessage.value.trim();
    if (!message) {
      setFeedbackStatus(copy.messageRequired, true);
      els.feedbackMessage.focus();
      return;
    }

    const tags = Array.from(selectedTags).sort().map((index) => copy.tags[index]);
    const composed = composeThanks(copy, tags, message);
    setFeedbackStatus("", false);

    if (CONFIG.feedbackEndpoint) {
      await sendThanksToEndpoint(copy, tags, message);
      return;
    }

    if (CONFIG.feedbackFormUrlTemplate) {
      const url = fillFeedbackTemplate(CONFIG.feedbackFormUrlTemplate, {
        message,
        tags: tags.join(", "),
        language: currentLanguage,
      });
      const popup = window.open(url, "_blank", "noopener,noreferrer");
      if (popup) setFeedbackStatus(copy.sent, false);
      else setFeedbackStatus(copy.sendFailed, true);
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({ title: copy.thanksShareTitle, text: composed });
        setFeedbackStatus(copy.sent, false);
        return;
      } catch (error) {
        if (error && error.name === "AbortError") return;
      }
    }

    const copied = await copyText(composed);
    setFeedbackStatus(copied ? copy.thanksCopied : copy.sendFailed, !copied);
  }

  async function sendThanksToEndpoint(copy, tags, message) {
    els.sendThanksButton.disabled = true;
    setFeedbackStatus(copy.sending, false);
    try {
      const formData = new FormData();
      formData.set("message", message);
      formData.set("tags", tags.join(", "));
      formData.set("language", currentLanguage);
      formData.set("source", guideUrl(currentLanguage));
      formData.set("_subject", copy.thanksShareTitle);

      const response = await fetch(CONFIG.feedbackEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Submission failed");
      setFeedbackStatus(copy.sent, false);
      els.feedbackMessage.value = "";
      selectedTags.clear();
      renderFeedbackTags(copy);
    } catch (_error) {
      setFeedbackStatus(copy.sendFailed, true);
    } finally {
      els.sendThanksButton.disabled = false;
    }
  }

  function fillFeedbackTemplate(template, values) {
    return String(template)
      .replace(/\{\{(message|tags|language)\}\}/gi, (_match, key) =>
        encodeURIComponent(values[key.toLowerCase()] || "")
      )
      .replace(/%7B%7B(message|tags|language)%7D%7D/gi, (_match, key) =>
        encodeURIComponent(values[key.toLowerCase()] || "")
      );
  }

  function composeThanks(copy, tags, message) {
    const parts = [`💌 ${copy.thanksIntro}`];
    if (tags.length) parts.push(tags.map((tag) => `#${tag.replace(/\s+/g, "_")}`).join(" "));
    parts.push(message);
    return parts.join("\n\n");
  }

  function setFeedbackStatus(message, isError) {
    els.feedbackStatus.textContent = message;
    els.feedbackStatus.classList.toggle("error", Boolean(isError));
  }

  async function saveGuideImage() {
    const copy = COPY[currentLanguage];
    try {
      const canvas = buildGuideCanvas(copy);
      await downloadCanvas(canvas, `discharge-guide-${currentLanguage}.png`);
      toast(copy.imageSaved);
    } catch (_error) {
      toast(copy.saveFailed);
    }
  }

  async function saveThanksImage() {
    const copy = COPY[currentLanguage];
    const message = els.feedbackMessage.value.trim();
    if (!message) {
      setFeedbackStatus(copy.messageRequired, true);
      els.feedbackMessage.focus();
      return;
    }

    try {
      const tags = Array.from(selectedTags).sort().map((index) => copy.tags[index]);
      const canvas = buildThanksCanvas(copy, tags, message);
      await downloadCanvas(canvas, `thank-you-nurse-${currentLanguage}.png`);
      toast(copy.imageSaved);
    } catch (_error) {
      toast(copy.saveFailed);
    }
  }

  function buildGuideCanvas(copy) {
    const canvas = document.createElement("canvas");
    const width = 1080;
    const margin = 64;
    const cardWidth = width - margin * 2;
    const ctx = canvas.getContext("2d");

    ctx.font = canvasFont(34, 500);
    const stepLayouts = copy.steps.map((step) => {
      ctx.font = canvasFont(41, 800);
      const titleLines = wrapLines(ctx, `${copy.steps.indexOf(step) + 1}. ${step.title}`, cardWidth - 72);
      ctx.font = canvasFont(31, 500);
      const bodyLines = wrapLines(ctx, step.body, cardWidth - 72);
      const noteLines = step.note ? wrapLines(ctx, `※ ${step.note}`, cardWidth - 100) : [];
      const height = 54 + titleLines.length * 52 + bodyLines.length * 44 + (noteLines.length ? 28 + noteLines.length * 40 : 0) + 38;
      return { step, titleLines, bodyLines, noteLines, height };
    });

    const totalStepsHeight = stepLayouts.reduce((sum, item) => sum + item.height + 22, 0);
    const height = 620 + totalStepsHeight + 180;
    canvas.width = width;
    canvas.height = height;
    ctx.textBaseline = "top";

    ctx.fillStyle = "#f5efe6";
    ctx.fillRect(0, 0, width, height);
    drawRoundedRect(ctx, 36, 36, width - 72, height - 72, 34, "#fffdf9");

    ctx.fillStyle = "#974d3d";
    ctx.font = canvasFont(26, 850);
    ctx.fillText("DISCHARGE GUIDE", margin + 26, 90);

    ctx.fillStyle = "#28312e";
    ctx.font = canvasFont(66, 900);
    const titleLines = wrapLines(ctx, copy.procedureTitle, cardWidth - 52);
    let y = 140;
    y = drawLines(ctx, titleLines, margin + 26, y, 76);

    ctx.fillStyle = "#57615d";
    ctx.font = canvasFont(31, 600);
    y = drawLines(ctx, wrapLines(ctx, copy.canvasSubtitle, cardWidth - 52), margin + 26, y + 12, 45);

    drawRoundedRect(ctx, margin, y + 30, cardWidth, 116, 22, "#fbf0d3");
    ctx.fillStyle = "#6f4b17";
    ctx.font = canvasFont(37, 850);
    ctx.fillText(copy.canvasPhone, margin + 34, y + 65);
    y += 178;

    stepLayouts.forEach((layout, index) => {
      const fill = layout.step.important ? "#fff7f2" : "#ffffff";
      drawRoundedRect(ctx, margin, y, cardWidth, layout.height, 24, fill, layout.step.important ? "#e9c7bb" : "#e4d9ca");
      ctx.fillStyle = layout.step.important ? "#974d3d" : "#385f51";
      ctx.font = canvasFont(41, 850);
      let textY = drawLines(ctx, layout.titleLines, margin + 36, y + 30, 52);
      ctx.fillStyle = "#4f5a56";
      ctx.font = canvasFont(31, 500);
      textY = drawLines(ctx, layout.bodyLines, margin + 36, textY + 8, 44);
      if (layout.noteLines.length) {
        drawRoundedRect(ctx, margin + 30, textY + 17, cardWidth - 60, layout.noteLines.length * 40 + 24, 14, "#fff4df");
        ctx.fillStyle = "#725424";
        ctx.font = canvasFont(27, 650);
        drawLines(ctx, layout.noteLines, margin + 50, textY + 29, 40);
      }
      y += layout.height + 22;
      if (index === 1) {
        // Visual rhythm after the first pair of steps.
      }
    });

    ctx.fillStyle = "#57615d";
    ctx.font = canvasFont(27, 600);
    drawLines(ctx, wrapLines(ctx, copy.carePriority, cardWidth - 52), margin + 26, y + 20, 40);
    return canvas;
  }

  function buildThanksCanvas(copy, tags, message) {
    const canvas = document.createElement("canvas");
    const width = 1080;
    const ctx = canvas.getContext("2d");
    ctx.font = canvasFont(42, 600);
    const messageLines = wrapLines(ctx, message, 820);
    const height = Math.max(1350, 750 + messageLines.length * 58);
    canvas.width = width;
    canvas.height = height;
    ctx.textBaseline = "top";

    ctx.fillStyle = "#f5efe6";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#f9e9e1";
    ctx.beginPath();
    ctx.arc(930, 120, 280, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#e7f0eb";
    ctx.beginPath();
    ctx.arc(110, height - 70, 320, 0, Math.PI * 2);
    ctx.fill();
    drawRoundedRect(ctx, 60, 60, 960, height - 120, 42, "rgba(255,253,249,0.94)", "#e4d9ca");

    ctx.fillStyle = "#b96652";
    ctx.font = canvasFont(82, 800);
    ctx.fillText("♥", 120, 130);
    ctx.fillStyle = "#974d3d";
    ctx.font = canvasFont(28, 850);
    ctx.fillText("A SMALL THANK YOU", 120, 255);
    ctx.fillStyle = "#28312e";
    ctx.font = canvasFont(58, 900);
    let y = drawLines(ctx, wrapLines(ctx, copy.thanksIntro, 820), 120, 310, 70);

    if (tags.length) {
      ctx.fillStyle = "#974d3d";
      ctx.font = canvasFont(29, 700);
      y = drawLines(ctx, wrapLines(ctx, tags.map((tag) => `#${tag}`).join("   "), 820), 120, y + 20, 44);
    }

    drawRoundedRect(ctx, 105, y + 42, 870, messageLines.length * 58 + 110, 28, "#fff8f3", "#ecd3ca");
    ctx.fillStyle = "#35403c";
    ctx.font = canvasFont(42, 600);
    drawLines(ctx, messageLines, 150, y + 92, 58);

    ctx.fillStyle = "#57615d";
    ctx.font = canvasFont(28, 650);
    ctx.fillText(copy.footer, 120, height - 175);
    return canvas;
  }

  function canvasFont(size, weight) {
    return `${weight} ${size}px -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans", sans-serif`;
  }

  function wrapLines(ctx, text, maxWidth) {
    const source = String(text || "");
    const hasCjk = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/.test(source);
    const tokens = hasCjk ? Array.from(source) : source.split(/(\s+)/).filter(Boolean);
    const lines = [];
    let line = "";

    tokens.forEach((token) => {
      if (token === "\n") {
        lines.push(line.trimEnd());
        line = "";
        return;
      }
      const candidate = line + token;
      if (line && ctx.measureText(candidate).width > maxWidth) {
        lines.push(line.trimEnd());
        line = token.trimStart();
      } else {
        line = candidate;
      }
    });
    if (line || !lines.length) lines.push(line.trimEnd());
    return lines;
  }

  function drawLines(ctx, lines, x, y, lineHeight) {
    lines.forEach((line) => {
      ctx.fillText(line, x, y);
      y += lineHeight;
    });
    return y;
  }

  function drawRoundedRect(ctx, x, y, width, height, radius, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  async function downloadCanvas(canvas, fileName) {
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) throw new Error("No image blob");
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 30000);
  }

  function showPoster() {
    els.guideView.classList.add("is-hidden");
    els.posterView.classList.remove("is-hidden");
    renderPoster(COPY[currentLanguage]);
  }

  function renderPoster(copy) {
    setTexts({
      posterKicker: copy.posterKicker,
      posterTitle: copy.posterTitle,
      posterLead: copy.posterLead,
      posterPhone: copy.posterPhone,
      printPosterButton: copy.print,
      downloadQrButton: copy.downloadQr,
      backToGuideLink: copy.back,
    });

    els.posterSteps.innerHTML = "";
    copy.scanSteps.forEach((text, index) => {
      const item = document.createElement("div");
      item.className = "poster-step";
      const title = document.createElement("strong");
      title.textContent = `${index + 1}. ${copy.posterStepTitles[index]}`;
      const detail = document.createElement("span");
      detail.textContent = text;
      item.append(title, detail);
      els.posterSteps.appendChild(item);
    });

    els.backToGuideLink.href = guideUrl(currentLanguage);
    drawQr(guideUrl(""), els.posterQrCanvas);
  }

  function downloadPosterQr() {
    const copy = COPY[currentLanguage];
    const link = document.createElement("a");
    link.href = els.posterQrCanvas.toDataURL("image/png");
    link.download = "discharge-guide-qr.png";
    link.click();
    toast(copy.qrSaved);
  }

  function guideUrl(language) {
    const url = new URL(window.location.href);
    url.hash = "";
    url.search = "";
    if (language) url.searchParams.set("lang", language);
    return url.toString();
  }

  function posterUrl(language) {
    const url = new URL(window.location.href);
    url.hash = "";
    url.search = "";
    url.searchParams.set("poster", "1");
    if (language) url.searchParams.set("lang", language);
    return url.toString();
  }

  function drawQr(text, canvas) {
    if (typeof qrcode !== "function") throw new Error("QR unavailable");
    const qr = qrcode(0, "L");
    qr.addData(text, "Byte");
    qr.make();
    const ctx = canvas.getContext("2d");
    const margin = 4;
    const count = qr.getModuleCount();
    const total = count + margin * 2;
    const scale = Math.floor(canvas.width / total);
    const size = scale * total;
    const offset = Math.floor((canvas.width - size) / 2);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#18201d";
    for (let row = 0; row < count; row += 1) {
      for (let column = 0; column < count; column += 1) {
        if (qr.isDark(row, column)) {
          ctx.fillRect(
            offset + (column + margin) * scale,
            offset + (row + margin) * scale,
            scale,
            scale
          );
        }
      }
    }
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_error) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      let copied = false;
      try {
        copied = document.execCommand("copy");
      } catch (_fallbackError) {
        copied = false;
      }
      textarea.remove();
      return copied;
    }
  }

  function toast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => els.toast.classList.remove("show"), 2400);
  }
})();
