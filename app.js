(function () {
  "use strict";

  const CARE_GUIDES = {
    bpb: {
      label: "BPB",
      waterHours: 4,
      mealHours: 8,
      preview: [
        "수술 후 물 포함 절대 금식은 4시간입니다.",
        "4시간 후 물을 조금 섭취하고 괜찮으면 액체류 섭취가 가능합니다.",
        "수술 8시간 후부터 식사가 가능합니다.",
      ],
      items: [
        {
          title: "금식과 식이",
          body:
            "수술 후 물 포함 절대 금식은 4시간입니다. 4시간 이후 물을 조금 섭취하고 괜찮으면 이온 음료 등 액체류 섭취가 가능합니다. 수술 8시간 후부터는 식사가 가능합니다.",
        },
        {
          title: "수술 설명",
          body:
            "수술에 관한 설명은 익일 주치의가 할 예정입니다. 단, 다음날이 공휴일이거나 휴진인 경우에는 진료일로 미뤄질 수 있습니다.",
        },
        {
          title: "소독 일정",
          body:
            "첫 소독은 주치의가 수술에 관한 설명을 한 직후에 진행됩니다. 이후에는 보통 2~3일에 한 번씩 진행되며, 경우에 따라 매일 진행될 수 있습니다.",
        },
        {
          title: "첫 소독 이후",
          body:
            "첫 소독 이후에는 병실이나 응급실에서 소독이 진행됩니다. 여건에 따라 오전이나 오후에 할 수 있으며, 소독이 필요한 날에는 반드시 챙기기 때문에 따로 문의하지 않아도 됩니다.",
        },
      ],
      faq: [
        {
          q: "PCA 버튼은 언제 누르나요?",
          a:
            "통증이 있을 때 누르면 일정 용량이 추가로 들어갑니다. 계속 누른다고 계속 들어가는 것은 아니며, 다음 투여까지 충전에 약 15분 정도 소요됩니다.",
        },
        {
          q: "왜 수술 부위를 심장보다 높게 두나요?",
          a:
            "붓기와 통증을 줄이는 데 도움이 되도록 수술 부위를 심장보다 높게 유지합니다. 자세가 불편하거나 통증이 심하면 간호사에게 알려주세요.",
        },
      ],
    },
    spinal: {
      label: "Spinal",
      waterHours: 4,
      mealHours: 8,
      preview: [
        "병동 지시에 따라 침상 안정과 자세 제한을 지켜주세요.",
        "물과 식사는 안내된 시간 이후 상태 확인 후 시작합니다.",
        "심한 두통, 어지럼, 소변 불편감이 있으면 간호사에게 알려주세요.",
      ],
      items: [
        {
          title: "금식과 식이",
          body:
            "물과 식사는 안내된 시간 이후 상태를 확인하며 시작합니다. 메스꺼움, 구토, 어지럼이 있으면 바로 간호사에게 알려주세요.",
        },
        {
          title: "침상 안정",
          body:
            "Spinal 마취 후에는 병동 지시에 따라 일정 시간 평평하게 누워 안정합니다. 머리를 갑자기 올리거나 혼자 일어나지 말고 간호사 안내를 받은 뒤 움직여주세요.",
        },
        {
          title: "감각과 움직임 확인",
          body:
            "다리 감각과 움직임은 시간이 지나며 회복됩니다. 감각이 돌아오기 전에는 낙상 위험이 있으므로 침대에서 혼자 내려오지 마세요.",
        },
        {
          title: "배뇨 확인",
          body:
            "Spinal 마취 후 소변이 잘 나오지 않는 경우가 있어 병동에서 확인합니다. 아랫배 불편감이나 소변을 보기 어려우면 간호사에게 알려주세요.",
        },
      ],
      faq: [
        {
          q: "왜 베개를 하지 않고 평평하게 누워 있어야 하나요?",
          a:
            "마취 후 두통, 어지럼, 낙상 위험을 줄이고 상태를 안정적으로 관찰하기 위해 병동 지시에 따라 자세 제한을 둡니다. 정확한 시간은 수술과 마취 상태에 따라 달라질 수 있습니다.",
        },
        {
          q: "두통이 생기면 어떻게 하나요?",
          a:
            "심한 두통, 어지럼, 구역감이 있으면 참지 말고 바로 간호사에게 알려주세요. 자세, 수분 섭취, 추가 처치 여부를 의료진이 확인합니다.",
        },
      ],
    },
  };

  const OPTION_GUIDES = {
    pca: {
      title: "IV PCA",
      body:
        "IV PCA, 즉 자가 통증 조절기는 소량으로 천천히 들어가고 있습니다. 다 들어가는 데 통상 2~3일 정도가 걸립니다. 통증이 있을 때 선 중간의 버튼을 눌러 통증을 조절할 수 있습니다.",
    },
    stocking: {
      title: "혈전예방스타킹",
      body:
        "혈전예방스타킹 착용을 권고합니다. 피부 발적, 가려움증 등 불편감이 있으면 간호사에게 이야기하고 벗도록 합니다.",
    },
    ice: {
      title: "아이스팩과 거상",
      body:
        "수술 부위에는 아이스팩을 적용하고, 가능한 범위에서 심장보다 높게 위치하도록 합니다.",
    },
  };

  const QR_VERSIONS_L = [
    null,
    { total: 26, blocks: 1, ec: 7, align: [] },
    { total: 44, blocks: 1, ec: 10, align: [6, 18] },
    { total: 70, blocks: 1, ec: 15, align: [6, 22] },
    { total: 100, blocks: 1, ec: 20, align: [6, 26] },
    { total: 134, blocks: 1, ec: 26, align: [6, 30] },
    { total: 172, blocks: 2, ec: 18, align: [6, 34] },
    { total: 196, blocks: 2, ec: 20, align: [6, 22, 38] },
    { total: 242, blocks: 2, ec: 24, align: [6, 24, 42] },
    { total: 292, blocks: 2, ec: 30, align: [6, 26, 46] },
    { total: 346, blocks: 4, ec: 18, align: [6, 28, 50] },
  ];

  const els = {};
  let currentLink = "";
  let currentPayload = null;
  let liveTimer = null;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    bindElements();
    bindEvents();
    setDefaultBaseUrl();
    setNow();
    if (hasPatientHash()) {
      showPatientFromHash();
    } else {
      showNurse();
      updatePreview();
    }
  }

  function bindElements() {
    [
      "nurseView",
      "patientView",
      "leafletForm",
      "roomInput",
      "nameInput",
      "returnInput",
      "nowButton",
      "pcaInput",
      "stockingInput",
      "iceInput",
      "memoInput",
      "baseUrlInput",
      "generateButton",
      "resetButton",
      "previewName",
      "previewAnesthesia",
      "previewWater",
      "previewMeal",
      "previewBullets",
      "qrResult",
      "qrCanvas",
      "qrStatus",
      "patientLink",
      "copyLinkButton",
      "downloadQrButton",
      "patientRoom",
      "patientTitle",
      "patientAnesthesia",
      "statusPanel",
      "statusLabel",
      "statusText",
      "returnText",
      "returnAt",
      "waterAt",
      "mealAt",
      "careGuide",
      "faqGuide",
      "memoPanel",
      "memoText",
      "saveLeafletButton",
      "shareLeafletButton",
      "downloadSummaryButton",
      "toast",
    ].forEach((id) => {
      els[id] = document.getElementById(id);
    });
  }

  function bindEvents() {
    els.leafletForm.addEventListener("input", updatePreview);
    els.leafletForm.addEventListener("change", updatePreview);
    els.leafletForm.addEventListener("submit", (event) => {
      event.preventDefault();
      generateLeaflet();
    });
    els.nowButton.addEventListener("click", () => {
      setNow();
      updatePreview();
    });
    els.resetButton.addEventListener("click", resetForm);
    els.copyLinkButton.addEventListener("click", copyCurrentLink);
    els.downloadQrButton.addEventListener("click", downloadQr);
    els.saveLeafletButton.addEventListener("click", saveLeafletToPhone);
    els.shareLeafletButton.addEventListener("click", shareLeaflet);
    els.downloadSummaryButton.addEventListener("click", downloadSummary);
    window.addEventListener("hashchange", () => {
      if (hasPatientHash()) showPatientFromHash();
    });
  }

  function hasPatientHash() {
    const params = new URLSearchParams(window.location.hash.slice(1));
    return params.has("rt") && params.has("a");
  }

  function showNurse() {
    clearInterval(liveTimer);
    els.nurseView.classList.remove("is-hidden");
    els.patientView.classList.add("is-hidden");
  }

  function showPatientFromHash() {
    currentPayload = parsePayload(new URLSearchParams(window.location.hash.slice(1)));
    currentLink = window.location.href;
    renderPatient(currentPayload);
    els.nurseView.classList.add("is-hidden");
    els.patientView.classList.remove("is-hidden");
    clearInterval(liveTimer);
    liveTimer = setInterval(() => renderPatientStatus(currentPayload), 60000);
  }

  function setDefaultBaseUrl() {
    const clean = window.location.href.split("#")[0];
    els.baseUrlInput.value = clean;
  }

  function setNow() {
    els.returnInput.value = toDatetimeLocal(new Date());
  }

  function resetForm() {
    els.roomInput.value = "";
    els.nameInput.value = "";
    els.memoInput.value = "";
    els.pcaInput.checked = true;
    els.stockingInput.checked = true;
    els.iceInput.checked = true;
    document.querySelector('input[name="anesthesia"][value="bpb"]').checked = true;
    setNow();
    currentLink = "";
    currentPayload = null;
    els.qrResult.classList.add("is-empty");
    els.qrStatus.textContent = "입력 후 QR을 생성하세요.";
    updatePreview();
  }

  function readForm() {
    const anesthesia = document.querySelector('input[name="anesthesia"]:checked').value;
    const guide = CARE_GUIDES[anesthesia];
    const returnTime = parseDatetimeLocal(els.returnInput.value) || new Date();
    return {
      version: "1",
      room: els.roomInput.value.trim(),
      name: els.nameInput.value.trim(),
      anesthesia,
      returnTime,
      pca: els.pcaInput.checked,
      stocking: els.stockingInput.checked,
      ice: els.iceInput.checked,
      memo: els.memoInput.value.trim(),
      waterAt: addHours(returnTime, guide.waterHours),
      mealAt: addHours(returnTime, guide.mealHours),
    };
  }

  function updatePreview() {
    const payload = readForm();
    const guide = CARE_GUIDES[payload.anesthesia];
    els.previewName.textContent = payload.name ? `${payload.name}님 안내` : "환자 안내";
    els.previewAnesthesia.textContent = guide.label;
    els.previewWater.textContent = formatTime(payload.waterAt);
    els.previewMeal.textContent = formatTime(payload.mealAt);
    els.previewBullets.innerHTML = "";
    guide.preview.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      els.previewBullets.appendChild(li);
    });
  }

  function generateLeaflet() {
    const payload = readForm();
    const url = buildPatientUrl(payload);
    try {
      drawQr(url, els.qrCanvas);
      currentLink = url;
      currentPayload = payload;
      els.patientLink.href = url;
      els.patientLink.textContent = "환자용 페이지 열기";
      els.qrResult.classList.remove("is-empty");
      els.qrStatus.textContent = `${payload.room || "병실 미입력"} ${payload.name || "이름 미입력"} · QR을 스캔하면 안내문이 열립니다.`;
      toast("QR이 생성되었습니다.");
    } catch (error) {
      els.qrResult.classList.add("is-empty");
      els.qrStatus.textContent = error.message || "QR 생성에 실패했습니다.";
      toast("입력값이 너무 길어 QR을 만들 수 없습니다.");
    }
  }

  function buildPatientUrl(payload) {
    const base = (els.baseUrlInput.value || window.location.href.split("#")[0]).split("#")[0];
    const params = new URLSearchParams();
    params.set("v", "1");
    params.set("r", payload.room);
    params.set("n", payload.name);
    params.set("a", payload.anesthesia === "bpb" ? "b" : "s");
    params.set("rt", compactDateTime(payload.returnTime));
    params.set("p", payload.pca ? "1" : "0");
    params.set("st", payload.stocking ? "1" : "0");
    params.set("ice", payload.ice ? "1" : "0");
    if (payload.memo) params.set("m", payload.memo);
    return `${base}#${params.toString()}`;
  }

  function parsePayload(params) {
    const anesthesia = params.get("a") === "s" ? "spinal" : "bpb";
    const guide = CARE_GUIDES[anesthesia];
    const returnTime = parseCompactDateTime(params.get("rt")) || new Date();
    return {
      version: params.get("v") || "1",
      room: params.get("r") || "",
      name: params.get("n") || "",
      anesthesia,
      returnTime,
      pca: params.get("p") !== "0",
      stocking: params.get("st") !== "0",
      ice: params.get("ice") !== "0",
      memo: params.get("m") || "",
      waterAt: addHours(returnTime, guide.waterHours),
      mealAt: addHours(returnTime, guide.mealHours),
    };
  }

  function renderPatient(payload) {
    const guide = CARE_GUIDES[payload.anesthesia];
    els.patientRoom.textContent = payload.room ? `${payload.room} 병실` : "수술 후 안내";
    els.patientTitle.textContent = payload.name ? `${payload.name}님 안내` : "환자 안내";
    els.patientAnesthesia.textContent = guide.label;
    els.returnAt.textContent = formatDateTime(payload.returnTime);
    els.waterAt.textContent = formatDateTime(payload.waterAt);
    els.mealAt.textContent = formatDateTime(payload.mealAt);

    els.careGuide.innerHTML = "";
    const guideItems = guide.items.slice();
    if (payload.pca) guideItems.push(OPTION_GUIDES.pca);
    if (payload.stocking) guideItems.push(OPTION_GUIDES.stocking);
    if (payload.ice) guideItems.push(OPTION_GUIDES.ice);
    guideItems.forEach((item) => els.careGuide.appendChild(renderGuideItem(item)));

    els.faqGuide.innerHTML = "";
    guide.faq.forEach((item) => els.faqGuide.appendChild(renderFaq(item)));

    if (payload.memo) {
      els.memoText.textContent = payload.memo;
      els.memoPanel.classList.remove("is-hidden");
    } else {
      els.memoPanel.classList.add("is-hidden");
    }

    renderPatientStatus(payload);
  }

  function renderPatientStatus(payload) {
    const now = new Date();
    els.statusPanel.classList.remove("wait", "ready");
    if (now < payload.waterAt) {
      els.statusLabel.textContent = "현재 상태";
      els.statusText.textContent = "금식 유지";
      els.returnText.textContent = `물은 ${formatTime(payload.waterAt)} 이후 소량부터 가능합니다.`;
      els.statusPanel.classList.add("wait");
    } else if (now < payload.mealAt) {
      els.statusLabel.textContent = "현재 상태";
      els.statusText.textContent = "물 소량 가능";
      els.returnText.textContent = `식사는 ${formatTime(payload.mealAt)} 이후 가능합니다. 불편감이 있으면 간호사에게 알려주세요.`;
    } else {
      els.statusLabel.textContent = "현재 상태";
      els.statusText.textContent = "식사 가능";
      els.returnText.textContent = "병동 안내에 따라 식사를 시작할 수 있습니다.";
      els.statusPanel.classList.add("ready");
    }
  }

  function renderGuideItem(item) {
    const article = document.createElement("article");
    article.className = "guide-item";
    const title = document.createElement("h2");
    title.textContent = item.title;
    const body = document.createElement("p");
    body.textContent = item.body;
    article.append(title, body);
    return article;
  }

  function renderFaq(item) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = item.q;
    const body = document.createElement("p");
    body.textContent = item.a;
    details.append(summary, body);
    return details;
  }

  async function copyCurrentLink() {
    if (!currentLink) return toast("먼저 QR을 생성하세요.");
    try {
      await navigator.clipboard.writeText(currentLink);
      toast("링크를 복사했습니다.");
    } catch (_error) {
      toast("복사할 수 없습니다. 링크를 길게 눌러 복사해주세요.");
    }
  }

  function downloadQr() {
    if (!currentLink) return toast("먼저 QR을 생성하세요.");
    const a = document.createElement("a");
    a.href = els.qrCanvas.toDataURL("image/png");
    a.download = makeFileName("postop-qr", "png");
    a.click();
  }

  function saveLeafletToPhone() {
    const link = currentLink || window.location.href;
    localStorage.setItem("postopLeaflet", link);
    toast("이 휴대폰에 저장했습니다.");
  }

  async function shareLeaflet() {
    const link = currentLink || window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: "수술 후 안내", url: link });
        return;
      } catch (_error) {
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(link);
      toast("공유 링크를 복사했습니다.");
    } catch (_error) {
      toast("공유할 수 없습니다. 주소창의 링크를 복사해주세요.");
    }
  }

  function downloadSummary() {
    const payload = currentPayload || parsePayload(new URLSearchParams(window.location.hash.slice(1)));
    const canvas = document.createElement("canvas");
    const scale = 2;
    canvas.width = 720 * scale;
    canvas.height = 940 * scale;
    const ctx = canvas.getContext("2d");
    ctx.scale(scale, scale);
    ctx.fillStyle = "#eef3f4";
    ctx.fillRect(0, 0, 720, 940);
    roundedRect(ctx, 30, 30, 660, 880, 8, "#ffffff", "#d7e1e4");
    ctx.fillStyle = "#16756f";
    ctx.font = "700 24px sans-serif";
    ctx.fillText("수술 후 안내", 60, 84);
    ctx.fillStyle = "#172126";
    ctx.font = "800 42px sans-serif";
    ctx.fillText(payload.name ? `${payload.name}님` : "환자 안내", 60, 140);
    ctx.font = "700 24px sans-serif";
    ctx.fillStyle = "#65747b";
    ctx.fillText(`${payload.room || "병실 미입력"} · ${CARE_GUIDES[payload.anesthesia].label}`, 60, 180);
    drawSummaryRow(ctx, "병동 도착", formatDateTime(payload.returnTime), 60, 250);
    drawSummaryRow(ctx, "물 소량 가능", formatDateTime(payload.waterAt), 60, 350);
    drawSummaryRow(ctx, "식사 가능", formatDateTime(payload.mealAt), 60, 450);
    ctx.fillStyle = "#314247";
    ctx.font = "500 24px sans-serif";
    wrapText(ctx, "통증, 어지럼, 호흡곤란, 심한 두통, 피부 발적이나 가려움이 있으면 바로 간호사에게 알려주세요.", 60, 585, 600, 38);
    if (payload.memo) {
      ctx.fillStyle = "#a75f14";
      ctx.font = "700 22px sans-serif";
      ctx.fillText("추가 메모", 60, 720);
      ctx.fillStyle = "#314247";
      ctx.font = "500 24px sans-serif";
      wrapText(ctx, payload.memo, 60, 760, 600, 38);
    }
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = makeFileName("postop-summary", "png");
    a.click();
  }

  function drawSummaryRow(ctx, label, value, x, y) {
    roundedRect(ctx, x, y - 48, 600, 72, 8, "#f8fbfb", "#d7e1e4");
    ctx.fillStyle = "#65747b";
    ctx.font = "700 18px sans-serif";
    ctx.fillText(label, x + 20, y - 18);
    ctx.fillStyle = "#172126";
    ctx.font = "800 28px sans-serif";
    ctx.fillText(value, x + 20, y + 16);
  }

  function roundedRect(ctx, x, y, width, height, radius, fill, stroke) {
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
      ctx.stroke();
    }
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = String(text).split("");
    let line = "";
    for (const word of words) {
      const test = line + word;
      if (ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line, x, y);
        line = word;
        y += lineHeight;
      } else {
        line = test;
      }
    }
    ctx.fillText(line, x, y);
  }

  function toast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => els.toast.classList.remove("show"), 2200);
  }

  function addHours(date, hours) {
    return new Date(date.getTime() + hours * 60 * 60 * 1000);
  }

  function parseDatetimeLocal(value) {
    if (!value) return null;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function toDatetimeLocal(date) {
    const pad = (number) => String(number).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  function compactDateTime(date) {
    const pad = (number) => String(number).padStart(2, "0");
    return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}${pad(date.getHours())}${pad(date.getMinutes())}`;
  }

  function parseCompactDateTime(value) {
    if (!/^\d{12}$/.test(value || "")) return null;
    const year = Number(value.slice(0, 4));
    const month = Number(value.slice(4, 6)) - 1;
    const day = Number(value.slice(6, 8));
    const hour = Number(value.slice(8, 10));
    const minute = Number(value.slice(10, 12));
    const date = new Date(year, month, day, hour, minute);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function formatDateTime(date) {
    return new Intl.DateTimeFormat("ko-KR", {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  }

  function formatTime(date) {
    return new Intl.DateTimeFormat("ko-KR", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  }

  function makeFileName(prefix, ext) {
    const now = compactDateTime(new Date());
    return `${prefix}-${now}.${ext}`;
  }

  function drawQr(text, canvas) {
    const qr = QrCode.encodeText(text);
    const ctx = canvas.getContext("2d");
    const margin = 4;
    const modules = qr.size + margin * 2;
    const scale = Math.floor(canvas.width / modules);
    const size = scale * modules;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    const offset = Math.floor((canvas.width - size) / 2);
    for (let y = 0; y < qr.size; y++) {
      for (let x = 0; x < qr.size; x++) {
        if (qr.getModule(x, y)) {
          ctx.fillRect(offset + (x + margin) * scale, offset + (y + margin) * scale, scale, scale);
        }
      }
    }
  }

  class QrCode {
    constructor(version, modules) {
      this.version = version;
      this.size = version * 4 + 17;
      this.modules = modules;
    }

    getModule(x, y) {
      return this.modules[y][x];
    }

    static encodeText(text) {
      const bytes = Array.from(new TextEncoder().encode(text));
      for (let version = 1; version < QR_VERSIONS_L.length; version++) {
        const info = QR_VERSIONS_L[version];
        const dataCodewords = info.total - info.blocks * info.ec;
        const lengthBits = version < 10 ? 8 : 16;
        if (bytes.length <= (dataCodewords * 8 - 4 - lengthBits) >> 3) {
          return QrCode.encodeBytes(bytes, version);
        }
      }
      throw new Error("입력값이 너무 길어 QR에 담을 수 없습니다. 추가 메모를 줄이거나 웹페이지 주소를 짧게 설정하세요.");
    }

    static encodeBytes(bytes, version) {
      const info = QR_VERSIONS_L[version];
      const dataCodewords = info.total - info.blocks * info.ec;
      const bits = [];
      appendBits(0x4, 4, bits);
      appendBits(bytes.length, version < 10 ? 8 : 16, bits);
      bytes.forEach((byte) => appendBits(byte, 8, bits));
      appendBits(0, Math.min(4, dataCodewords * 8 - bits.length), bits);
      while (bits.length % 8 !== 0) bits.push(0);
      const data = [];
      for (let i = 0; i < bits.length; i += 8) {
        let value = 0;
        for (let j = 0; j < 8; j++) value = (value << 1) | bits[i + j];
        data.push(value);
      }
      for (let pad = 0xec; data.length < dataCodewords; pad ^= 0xec ^ 0x11) data.push(pad);
      const codewords = addErrorCorrectionAndInterleave(data, version);
      return drawFunctionAndData(version, codewords);
    }
  }

  function appendBits(value, length, bits) {
    for (let i = length - 1; i >= 0; i--) bits.push((value >>> i) & 1);
  }

  function addErrorCorrectionAndInterleave(data, version) {
    const info = QR_VERSIONS_L[version];
    const dataCodewords = info.total - info.blocks * info.ec;
    const shortBlockLen = Math.floor(dataCodewords / info.blocks);
    const longBlocks = dataCodewords % info.blocks;
    const generator = reedSolomonGenerator(info.ec);
    const blocks = [];
    let k = 0;
    for (let i = 0; i < info.blocks; i++) {
      const length = shortBlockLen + (i >= info.blocks - longBlocks ? 1 : 0);
      const dataBlock = data.slice(k, k + length);
      k += length;
      const ecBlock = reedSolomonRemainder(dataBlock, generator);
      blocks.push({ data: dataBlock, ec: ecBlock });
    }
    const result = [];
    const maxData = Math.max(...blocks.map((block) => block.data.length));
    for (let i = 0; i < maxData; i++) {
      blocks.forEach((block) => {
        if (i < block.data.length) result.push(block.data[i]);
      });
    }
    for (let i = 0; i < info.ec; i++) {
      blocks.forEach((block) => result.push(block.ec[i]));
    }
    return result;
  }

  function reedSolomonGenerator(degree) {
    let result = [1];
    let root = 1;
    for (let i = 0; i < degree; i++) {
      const next = new Array(result.length + 1).fill(0);
      result.forEach((coef, j) => {
        next[j] ^= multiply(coef, root);
        next[j + 1] ^= coef;
      });
      result = next;
      root = multiply(root, 0x02);
    }
    return result.slice(0, degree);
  }

  function reedSolomonRemainder(data, generator) {
    const result = new Array(generator.length).fill(0);
    data.forEach((byte) => {
      const factor = byte ^ result.shift();
      result.push(0);
      generator.forEach((coef, i) => {
        result[i] ^= multiply(coef, factor);
      });
    });
    return result;
  }

  function multiply(x, y) {
    let result = 0;
    for (let i = 7; i >= 0; i--) {
      result = (result << 1) ^ ((result >>> 7) * 0x11d);
      result ^= ((y >>> i) & 1) * x;
    }
    return result & 0xff;
  }

  function drawFunctionAndData(version, codewords) {
    const size = version * 4 + 17;
    let modules = makeMatrix(size, false);
    const isFunction = makeMatrix(size, false);
    const setFunction = (x, y, dark) => {
      modules[y][x] = dark;
      isFunction[y][x] = true;
    };

    drawFinder(setFunction, size, 3, 3);
    drawFinder(setFunction, size, size - 4, 3);
    drawFinder(setFunction, size, 3, size - 4);
    drawAlignmentPatterns(setFunction, version);
    drawTimingPatterns(setFunction, size);
    setFunction(8, size - 8, true);
    reserveFormatAreas(setFunction, size);
    if (version >= 7) drawVersion(setFunction, version, size);

    drawCodewords(modules, isFunction, codewords);

    let bestMask = 0;
    let bestPenalty = Infinity;
    let bestModules = modules;
    for (let mask = 0; mask < 8; mask++) {
      const candidate = cloneMatrix(modules);
      applyMask(candidate, isFunction, mask);
      drawFormat(candidate, mask, size);
      const penalty = getPenaltyScore(candidate);
      if (penalty < bestPenalty) {
        bestPenalty = penalty;
        bestMask = mask;
        bestModules = candidate;
      }
    }
    drawFormat(bestModules, bestMask, size);
    return new QrCode(version, bestModules);
  }

  function makeMatrix(size, value) {
    return Array.from({ length: size }, () => Array(size).fill(value));
  }

  function cloneMatrix(matrix) {
    return matrix.map((row) => row.slice());
  }

  function drawFinder(setFunction, size, cx, cy) {
    for (let dy = -4; dy <= 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        const x = cx + dx;
        const y = cy + dy;
        if (x < 0 || x >= size || y < 0 || y >= size) continue;
        const dist = Math.max(Math.abs(dx), Math.abs(dy));
        setFunction(x, y, dist === 3 || dist <= 1);
      }
    }
  }

  function drawAlignmentPatterns(setFunction, version) {
    const positions = QR_VERSIONS_L[version].align;
    positions.forEach((x) => {
      positions.forEach((y) => {
        const nearTop = y < 9;
        const nearLeft = x < 9;
        const nearRight = x > version * 4 + 17 - 10;
        if ((nearTop && nearLeft) || (nearTop && nearRight) || (nearLeft && y > version * 4 + 17 - 10)) return;
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            const dist = Math.max(Math.abs(dx), Math.abs(dy));
            setFunction(x + dx, y + dy, dist === 2 || dist === 0);
          }
        }
      });
    });
  }

  function drawTimingPatterns(setFunction, size) {
    for (let i = 8; i < size - 8; i++) {
      const dark = i % 2 === 0;
      setFunction(6, i, dark);
      setFunction(i, 6, dark);
    }
  }

  function reserveFormatAreas(setFunction, size) {
    for (let i = 0; i < 9; i++) {
      if (i !== 6) {
        setFunction(8, i, false);
        setFunction(i, 8, false);
      }
    }
    for (let i = 0; i < 8; i++) {
      setFunction(size - 1 - i, 8, false);
      setFunction(8, size - 1 - i, false);
    }
  }

  function drawVersion(setFunction, version, size) {
    const bits = getVersionBits(version);
    for (let i = 0; i < 18; i++) {
      const bit = getBit(bits, i);
      const a = size - 11 + (i % 3);
      const b = Math.floor(i / 3);
      setFunction(a, b, bit);
      setFunction(b, a, bit);
    }
  }

  function getVersionBits(version) {
    let rem = version;
    for (let i = 0; i < 12; i++) {
      rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25);
    }
    return (version << 12) | rem;
  }

  function drawCodewords(modules, isFunction, codewords) {
    const size = modules.length;
    let bitIndex = 0;
    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let vert = 0; vert < size; vert++) {
        for (let j = 0; j < 2; j++) {
          const x = right - j;
          const upward = ((right + 1) & 2) === 0;
          const y = upward ? size - 1 - vert : vert;
          if (isFunction[y][x]) continue;
          const bit = bitIndex < codewords.length * 8 && getBit(codewords[bitIndex >>> 3], 7 - (bitIndex & 7));
          modules[y][x] = Boolean(bit);
          bitIndex++;
        }
      }
    }
  }

  function applyMask(modules, isFunction, mask) {
    for (let y = 0; y < modules.length; y++) {
      for (let x = 0; x < modules.length; x++) {
        if (!isFunction[y][x] && maskBit(mask, x, y)) modules[y][x] = !modules[y][x];
      }
    }
  }

  function maskBit(mask, x, y) {
    switch (mask) {
      case 0:
        return (x + y) % 2 === 0;
      case 1:
        return y % 2 === 0;
      case 2:
        return x % 3 === 0;
      case 3:
        return (x + y) % 3 === 0;
      case 4:
        return (Math.floor(y / 2) + Math.floor(x / 3)) % 2 === 0;
      case 5:
        return ((x * y) % 2) + ((x * y) % 3) === 0;
      case 6:
        return (((x * y) % 2) + ((x * y) % 3)) % 2 === 0;
      default:
        return (((x + y) % 2) + ((x * y) % 3)) % 2 === 0;
    }
  }

  function drawFormat(modules, mask, size) {
    const bits = getFormatBits(mask);
    const set = (x, y, i) => {
      modules[y][x] = getBit(bits, i);
    };
    for (let i = 0; i <= 5; i++) set(8, i, i);
    set(8, 7, 6);
    set(8, 8, 7);
    set(7, 8, 8);
    for (let i = 9; i < 15; i++) set(14 - i, 8, i);
    for (let i = 0; i < 8; i++) set(size - 1 - i, 8, i);
    for (let i = 8; i < 15; i++) set(8, size - 15 + i, i);
    modules[size - 8][8] = true;
  }

  function getFormatBits(mask) {
    const data = (1 << 3) | mask;
    let rem = data;
    for (let i = 0; i < 10; i++) {
      rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    }
    return ((data << 10) | rem) ^ 0x5412;
  }

  function getBit(value, index) {
    return Boolean((value >>> index) & 1);
  }

  function getPenaltyScore(modules) {
    const size = modules.length;
    let result = 0;
    for (let y = 0; y < size; y++) {
      let runColor = false;
      let runLength = 0;
      for (let x = 0; x < size; x++) {
        if (x === 0 || modules[y][x] !== runColor) {
          runColor = modules[y][x];
          runLength = 1;
        } else {
          runLength++;
          if (runLength === 5) result += 3;
          else if (runLength > 5) result++;
        }
      }
    }
    for (let x = 0; x < size; x++) {
      let runColor = false;
      let runLength = 0;
      for (let y = 0; y < size; y++) {
        if (y === 0 || modules[y][x] !== runColor) {
          runColor = modules[y][x];
          runLength = 1;
        } else {
          runLength++;
          if (runLength === 5) result += 3;
          else if (runLength > 5) result++;
        }
      }
    }
    for (let y = 0; y < size - 1; y++) {
      for (let x = 0; x < size - 1; x++) {
        const color = modules[y][x];
        if (color === modules[y][x + 1] && color === modules[y + 1][x] && color === modules[y + 1][x + 1]) result += 3;
      }
    }
    const finderPattern = [true, false, true, true, true, false, true, false, false, false, false];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x <= size - 11; x++) {
        if (matchesPattern(modules[y].slice(x, x + 11), finderPattern) || matchesPattern(modules[y].slice(x, x + 11), finderPattern.slice().reverse())) result += 40;
      }
    }
    for (let x = 0; x < size; x++) {
      for (let y = 0; y <= size - 11; y++) {
        const column = [];
        for (let i = 0; i < 11; i++) column.push(modules[y + i][x]);
        if (matchesPattern(column, finderPattern) || matchesPattern(column, finderPattern.slice().reverse())) result += 40;
      }
    }
    let dark = 0;
    modules.forEach((row) => row.forEach((cell) => dark += cell ? 1 : 0));
    const percent = (dark * 100) / (size * size);
    result += Math.floor(Math.abs(percent - 50) / 5) * 10;
    return result;
  }

  function matchesPattern(values, pattern) {
    return pattern.every((value, index) => values[index] === value);
  }
})();
