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
            "통증이 있을 때 누르면 일정 용량이 추가로 들어갑니다. 계속 누른다고 계속 들어가는 것은 아니며, 다음 투여까지 충전에 약 15분 정도 소요됩니다. 그럼에도 통증이 조절되지 않으면 간호사에게 알려주세요.",
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
        "수술 후 물 포함 절대 금식은 4시간입니다.",
        "4시간 후 물을 조금 섭취하고 괜찮으면 액체류 섭취가 가능합니다.",
        "수술 8시간 후부터 식사와 상체 거상이 가능합니다.",
      ],
      items: [
        {
          title: "금식과 식이",
          body:
            "수술 후 물 포함 절대 금식은 4시간입니다. 4시간 이후 물을 조금 섭취하고 괜찮으면 이온 음료 등 액체류 섭취가 가능합니다. 수술 8시간 후부터는 식사가 가능합니다.",
        },
        {
          title: "침상 안정과 상체 거상",
          body:
            "Spinal 마취 후에는 식사 가능 시간까지 상체를 올리지 않고 평평하게 누워 안정합니다. 상체 거상은 식사 가능 시간부터 가능하며, 혼자 일어나지 말고 간호사 안내를 받은 뒤 움직여주세요.",
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
        "IV PCA, 즉 자가 통증 조절기(무통주사)는 소량으로 천천히 들어가며, 다 들어가는 데 통상 2~3일 정도가 걸립니다. 통증이 있을 때 선 중간의 버튼을 누르면 일정 용량이 추가로 투여됩니다. 계속 누른다고 계속 들어가는 것은 아니며, 다음 투여까지 충전에 약 15분 정도 소요됩니다. 그럼에도 조절되지 않는 통증이 있을 시 간호사에게 알려주세요.",
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
      "previewTimeSummary",
      "previewWater",
      "previewMeal",
      "previewRaisePanel",
      "previewRaise",
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
      "raiseTimelineItem",
      "raiseAt",
      "careGuide",
      "faqGuide",
      "memoPanel",
      "memoText",
      "saveImageButton",
      "shareLeafletButton",
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
    els.saveImageButton.addEventListener("click", saveSummaryImage);
    els.shareLeafletButton.addEventListener("click", shareLeaflet);
    window.addEventListener("hashchange", () => {
      if (hasPatientHash()) showPatientFromHash();
    });
  }

  function hasPatientHash() {
    const params = new URLSearchParams(window.location.hash.slice(1));
    return params.get("view") === "patient" || (params.has("rt") && params.has("a"));
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
    els.previewRaise.textContent = formatTime(payload.mealAt);
    els.previewRaisePanel.classList.toggle("is-hidden", payload.anesthesia !== "spinal");
    els.previewTimeSummary.classList.toggle("has-raise", payload.anesthesia === "spinal");
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
      const localOnly = isLocalOnlyUrl(url);
      els.qrStatus.textContent = localOnly
        ? `${payload.room || "병실 미입력"} ${payload.name || "이름 미입력"} · 현재는 테스트 주소라 다른 휴대폰에서 열리지 않습니다.`
        : `${payload.room || "병실 미입력"} ${payload.name || "이름 미입력"} · QR을 스캔하면 환자 전용 안내문이 열립니다.`;
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
    params.set("view", "patient");
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

  function isLocalOnlyUrl(value) {
    try {
      const host = new URL(value).hostname;
      return host === "127.0.0.1" || host === "localhost" || host === "::1";
    } catch (_error) {
      return true;
    }
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
    els.raiseAt.textContent = formatDateTime(payload.mealAt);
    els.raiseTimelineItem.classList.toggle("is-hidden", payload.anesthesia !== "spinal");
    els.raiseTimelineItem.parentElement.classList.toggle("has-raise", payload.anesthesia === "spinal");

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
      els.returnText.textContent = payload.anesthesia === "spinal"
        ? `식사와 상체 거상은 ${formatTime(payload.mealAt)} 이후 가능합니다. 불편감이 있으면 간호사에게 알려주세요.`
        : `식사는 ${formatTime(payload.mealAt)} 이후 가능합니다. 불편감이 있으면 간호사에게 알려주세요.`;
    } else {
      els.statusLabel.textContent = "현재 상태";
      els.statusText.textContent = payload.anesthesia === "spinal" ? "식사·상체 거상 가능" : "식사 가능";
      els.returnText.textContent = payload.anesthesia === "spinal"
        ? "병동 안내에 따라 식사를 시작하고 상체를 올릴 수 있습니다. 처음 움직일 때는 간호사의 안내를 받아주세요."
        : "병동 안내에 따라 식사를 시작할 수 있습니다.";
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

  async function saveSummaryImage() {
    const payload = currentPayload || parsePayload(new URLSearchParams(window.location.hash.slice(1)));
    const canvas = buildSummaryCanvas(payload);
    const blob = await canvasToBlob(canvas);
    if (!blob) {
      toast("이미지를 만들 수 없습니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    const fileName = makeFileName("postop-guide", "png");
    const file = typeof File === "function" ? new File([blob], fileName, { type: "image/png" }) : null;
    if (file && navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          title: "수술 후 안내",
          text: "수술 후 주요 안내 이미지입니다.",
          files: [file],
        });
        return;
      } catch (error) {
        if (error && error.name === "AbortError") return;
      }
    }

    downloadBlob(blob, fileName);
    toast("안내 이미지를 다운로드했습니다.");
  }

  function buildSummaryCanvas(payload) {
    const canvas = document.createElement("canvas");
    const width = 1080;
    const height = 1920;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#eef3f4";
    ctx.fillRect(0, 0, width, height);
    roundedRect(ctx, 45, 45, 990, 1830, 16, "#ffffff", "#d7e1e4");
    ctx.fillStyle = "#16756f";
    ctx.font = "700 34px sans-serif";
    ctx.fillText("수술 후 안내", 90, 125);
    ctx.fillStyle = "#172126";
    ctx.font = "800 64px sans-serif";
    ctx.fillText(payload.name ? `${payload.name}님` : "환자 안내", 90, 215);
    ctx.font = "700 34px sans-serif";
    ctx.fillStyle = "#65747b";
    ctx.fillText(`${payload.room || "병실 미입력"} · ${CARE_GUIDES[payload.anesthesia].label}`, 90, 270);

    let y = 390;
    drawSummaryRow(ctx, "병동 도착", formatDateTime(payload.returnTime), 90, y);
    y += 145;
    drawSummaryRow(ctx, "물 소량 가능", formatDateTime(payload.waterAt), 90, y);
    y += 145;
    drawSummaryRow(ctx, "식사 가능", formatDateTime(payload.mealAt), 90, y);
    y += 145;
    if (payload.anesthesia === "spinal") {
      drawSummaryRow(ctx, "상체 거상 가능", formatDateTime(payload.mealAt), 90, y);
      y += 145;
    }

    ctx.fillStyle = "#16756f";
    ctx.font = "800 34px sans-serif";
    ctx.fillText("꼭 기억해주세요", 90, y + 25);
    y += 90;
    ctx.fillStyle = "#314247";
    ctx.font = "500 31px sans-serif";
    if (payload.pca) {
      y = wrapText(ctx, "• PCA 버튼은 통증이 있을 때 누르세요. 약 15분 충전 후 다시 투여되며, 통증이 조절되지 않으면 간호사에게 알려주세요.", 90, y, 900, 48) + 34;
    }
    if (payload.stocking) {
      y = wrapText(ctx, "• 혈전예방스타킹 착용 중 피부 발적이나 가려움이 있으면 간호사에게 알려주세요.", 90, y, 900, 48) + 34;
    }
    if (payload.ice) {
      y = wrapText(ctx, "• 수술 부위에 아이스팩을 적용하고 가능한 범위에서 심장보다 높게 유지해주세요.", 90, y, 900, 48) + 34;
    }
    if (payload.memo) {
      ctx.fillStyle = "#a75f14";
      ctx.font = "800 32px sans-serif";
      ctx.fillText("추가 메모", 90, y + 10);
      ctx.fillStyle = "#314247";
      ctx.font = "500 31px sans-serif";
      y = wrapText(ctx, payload.memo, 90, y + 65, 900, 48) + 30;
    }

    ctx.fillStyle = "#65747b";
    ctx.font = "600 27px sans-serif";
    wrapText(ctx, "담당의와 병동 간호사의 설명이 우선입니다. 통증, 어지럼, 호흡곤란, 심한 두통 또는 다른 불편감이 있으면 바로 간호사에게 알려주세요.", 90, Math.max(y + 20, 1710), 900, 42);
    return canvas;
  }

  function drawSummaryRow(ctx, label, value, x, y) {
    roundedRect(ctx, x, y - 72, 900, 108, 12, "#f8fbfb", "#d7e1e4");
    ctx.fillStyle = "#65747b";
    ctx.font = "700 26px sans-serif";
    ctx.fillText(label, x + 30, y - 28);
    ctx.fillStyle = "#172126";
    ctx.font = "800 40px sans-serif";
    ctx.fillText(value, x + 30, y + 20);
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
    return y;
  }

  function canvasToBlob(canvas) {
    return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  }

  function downloadBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
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
    if (typeof qrcode !== "function") throw new Error("QR 생성 기능을 불러오지 못했습니다. 페이지를 새로고침해주세요.");
    const qr = qrcode(0, "L");
    qr.addData(text, "Byte");
    qr.make();
    const ctx = canvas.getContext("2d");
    const margin = 4;
    const moduleCount = qr.getModuleCount();
    const modules = moduleCount + margin * 2;
    const scale = Math.floor(canvas.width / modules);
    const size = scale * modules;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    const offset = Math.floor((canvas.width - size) / 2);
    for (let y = 0; y < moduleCount; y++) {
      for (let x = 0; x < moduleCount; x++) {
        if (qr.isDark(y, x)) {
          ctx.fillRect(offset + (x + margin) * scale, offset + (y + margin) * scale, scale, scale);
        }
      }
    }
  }

})();
