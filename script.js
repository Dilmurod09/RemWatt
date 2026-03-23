/**
 * REM WATT — landing page
 * i18n: RU / UZ (structured dictionary)
 */

const I18N = {
  ru: {
    meta: {
      title: "REM WATT — ремонт ресторанной техники | Ташкент",
      description:
        "REM WATT — сервисный центр по ремонту и обслуживанию ресторанной техники в Ташкенте. Выезд на объект или приём в сервисном центре.",
    },
    a11y: {
      skip: "Перейти к содержимому",
      nav: "Основная навигация",
      language: "Язык",
      menu: "Меню",
      brands: "Бренды",
    },
    nav: {
      about: "О компании",
      services: "Услуги",
      advantages: "Преимущества",
      clients: "Клиенты",
      contact: "Контакты",
      cta: "Оставить заявку",
    },
    hero: {
      eyebrow: "Сервисный центр REM WATT",
      headline: "Ремонт ресторанной техники, когда важно качество",
      sub: "Ремонтируем и обслуживаем профессиональное оборудование для ресторанов, кафе и производственных кухонь: печи, холодильное оборудование, посудомоечные машины, тепловые линии и электронику управления.",
      cta: "Оставить заявку",
      secondary: "Наши услуги",
      stat1: { label: "Как работаем", value: "Выезд на объект или приём в сервисном центре" },
      stat2: { label: "Где работаем", value: "Ташкент и регионы Узбекистана" },
      badge: "Профессиональный сервис для HoReCa",
    },
    about: {
      eyebrow: "Кто мы",
      title: "Надёжный сервис для ресторанной кухни",
      lead: "REM WATT — сервисный центр по ремонту профессионального кухонного оборудования. Работаем с техникой, от которой зависит кухня: тепловое, холодильное, моечное оборудование и системы управления. Объясняем проблему понятным языком и предлагаем решение по делу.",
      point1: "Если неисправность можно устранить на месте, мастер выезжает на объект. Более сложный ремонт выполняем в сервисном центре.",
      point2: "Работаем по Ташкенту и при необходимости выезжаем в другие города и регионы Узбекистана.",
      point3: "Подстраиваемся под график кухни, чтобы не мешать смене и не затягивать простой оборудования.",
      caption: "Шеф-повар и сервисные мастера · техника, с которой мы работаем каждый день",
    },
    services: {
      eyebrow: "Услуги",
      title: "Что делаем для кухни",
      desc: "Проводим диагностику, ремонт и плановое обслуживание профессиональной кухонной техники.",
      s1: {
        title: "Диагностика",
        text: "Находим причину неисправности, проверяем узлы и даём понятное заключение без лишних слов.",
      },
      s2: {
        title: "Ремонт",
        text: "Меняем вышедшие из строя детали, устраняем неисправность и возвращаем технику в рабочий режим.",
      },
      s3: {
        title: "Обслуживание",
        text: "Проводим профилактику, чистку, настройку и проверку оборудования, чтобы снизить риск повторных поломок.",
      },
      s4: {
        title: "Монтаж и пусконаладка",
        text: "Выполняем монтаж и пусконаладку профессиональной кухонной техники .",
      },
    },
    adv: {
      eyebrow: "Почему выбирают нас",
      title: "Спокойный сервис без лишних обещаний",
      a: {
        title: "Быстрая обратная связь",
        text: "Принимаем заявку, связываемся с вами и сразу согласовываем удобный формат работы.",
      },
      b: {
        title: "Специализация на HoReCa",
        text: "Понимаем специфику ресторанной кухни и работаем именно с профессиональным оборудованием.",
      },
      c: {
        title: "Понятная диагностика",
        text: "Говорим по существу: что сломалось, что нужно заменить и какой вариант ремонта действительно имеет смысл.",
      },
      d: {
        title: "Выезд и сервисный центр",
        text: "Принимаем технику в сервисном центре и выезжаем на объект, если ремонт удобнее делать на месте.",
      },
    },
    clients: {
      eyebrow: "Рестораны и кухни",
      title: "С кем мы работаем",
      desc: "Среди наших клиентов — рестораны, кафе и профессиональные кухни, которым важна стабильная работа оборудования.",
    },
    form: {
      eyebrow: "Связь",
      title: "Оставьте заявку",
      lead: "Опишите проблему и оставьте контакт. Мы свяжемся с вами, уточним детали и предложим удобный вариант ремонта.",
      nameLabel: "Имя",
      namePh: "Имя для связи",
      phoneLabel: "Телефон",
      phonePh: "+998971234567",
      problemLabel: "Опишите проблему",
      problemPh: "Тип оборудования, неисправность, город и адрес",
      consentLabel: "Я соглашаюсь на обработку персональных данных",
      submit: "Отправить заявку",
      sending: "Отправляем…",
      success: "Заявка отправлена. Мы свяжемся с вами в рабочее время.",
      error: "Пожалуйста, заполните все поля.",
      phoneError: "Введите корректный номер телефона.",
      consentError: "Нужно согласиться на обработку персональных данных.",
      sendError: "Не удалось отправить заявку. Проверьте настройки Telegram и попробуйте ещё раз.",
    },
    map: {
      label: "Адрес сервисного центра",
      hint: "На карте отмечен сервисный центр REM WATT.",
      ariaLabel: "Карта: расположение сервисного центра REM WATT",
    },
    contacts: {
      phoneLabel: "Телефон",
      phoneValue: "+998 (97) 412-69-79",
      tgLabel: "Telegram",
      tgValue: "@remwattbot",
      addrLabel: "Адрес",
      addrValue: "г. Ташкент,Мирзо-Улугбекский район, проспект Мустакиллик, 38",
    },
    footer: {
      tagline: 'Услуги СЦ REM WATT предоставляются от OOO "Sokolov Texno Servis".',
      copy: "©",
    },
  },
  uz: {
    meta: {
      title: "REM WATT — restoran texnikasini ta'mirlash | Toshkent",
      description:
        "REM WATT — Toshkentdagi restoran texnikasini ta'mirlash va servis markazi. Obyektga chiqish yoki servis markazida qabul mavjud.",
    },
    a11y: {
      skip: "Kontentga o‘tish",
      nav: "Asosiy navigatsiya",
      language: "Til",
      menu: "Menyu",
      brands: "Brendlar",
    },
    nav: {
      about: "Kompaniya haqida",
      services: "Xizmatlar",
      advantages: "Afzalliklar",
      clients: "Mijozlar",
      contact: "Aloqa",
      cta: "So‘rov qoldirish",
    },
    hero: {
      eyebrow: "REM WATT servis markazi",
      headline: "Sifat muhim bo‘lganda restoran texnikasini ta’mirlaymiz",
      sub: "Restoran, kafe va professional oshxonalar uchun uskunalarni ta’mirlaymiz va servis qilamiz: pechlar, sovutish uskunalari, idish yuvish texnikasi, issiqlik uskunalari va boshqaruv bloklari.",
      cta: "So‘rov qoldirish",
      secondary: "Xizmatlarimiz",
      stat1: { label: "Qanday ishlaymiz", value: "Obyektga chiqamiz yoki servis markazida qabul qilamiz" },
      stat2: { label: "Qayerda ishlaymiz", value: "Toshkent va O‘zbekiston viloyatlari" },
      badge: "HoReCa uchun professional servis va ta’mir",
    },
    about: {
      eyebrow: "Biz haqimizda",
      title: "Restoran oshxonasi uchun ishonchli servis",
      lead: "REM WATT — professional oshxona uskunalarini ta’mirlash bo‘yicha servis markazi. Oshxonaning ishiga bevosita ta’sir qiladigan uskunalar bilan ishlaymiz: issiqlik, sovutish, yuvish texnikasi va boshqaruv tizimlari. Muammoni oddiy tilda tushuntirib, amaliy yechim taklif qilamiz.",
      point1: "Nosozlikni joyida bartaraf etish mumkin bo‘lsa, ustamiz obyektga boradi. Murakkab ta’mir esa servis markazida bajariladi.",
      point2: "Toshkent bo‘ylab ishlaymiz, zarurat bo‘lsa O‘zbekistonning boshqa shaharlari va viloyatlariga ham chiqamiz.",
      point3: "Oshxona ish jadvalini inobatga olamiz, shunda smena to‘xtab qolmaydi va ortiqcha tanaffus bo‘lmaydi.",
      caption: "Bosh oshpaz va servis ustalari · biz har kuni ishlaydigan professional texnika",
    },
    services: {
      eyebrow: "Xizmatlar",
      title: "Nimalarni bajaramiz",
      desc: "Professional oshxona texnikasi uchun diagnostika, ta’mir va rejalashtirilgan texnik xizmat ko‘rsatamiz.",
      s1: {
        title: "Diagnostika",
        text: "Nosozlik sababini aniqlaymiz, asosiy uzellarni tekshiramiz va tushunarli xulosa beramiz.",
      },
      s2: {
        title: "Ta’mirlash",
        text: "Ishdan chiqqan detallarning o‘rnini bosamiz, nosozlikni bartaraf etamiz va uskunani ish holatiga qaytaramiz.",
      },
      s3: {
        title: "Texnik xizmat",
        text: "Profilaktika, tozalash, sozlash va tekshiruv o‘tkazib, qayta nosozlik xavfini kamaytiramiz.",
      },
      s4: {
        title: "O’rnatish va ishga tushirish",
        text: "Professional oshxona uskunalarini montaj qilish va ishga tushirish-sozlash ishlarini amalga oshiramiz.",
      },
    },
    adv: {
      eyebrow: "Nega bizni tanlashadi",
      title: "Ortiqcha va’dalarsiz, tushunarli servis",
      a: {
        title: "Tezkor javob",
        text: "So‘rovni qabul qilamiz, siz bilan bog‘lanamiz va qulay ish tartibini darhol kelishib olamiz.",
      },
      b: {
        title: "HoReCa uskunalariga ixtisoslashganmiz",
        text: "Restoran oshxonasining ish tartibini ham, professional uskunalarning talabini ham yaxshi bilamiz.",
      },
      c: {
        title: "Tushunarli diagnostika",
        text: "Muammoni ochiq aytamiz: nima buzilgan, nimani almashtirish kerak va qaysi ta’mir varianti maqsadga muvofiq.",
      },
      d: {
        title: "Obyektga chiqish va markazda qabul",
        text: "Texnikani servis markazida qabul qilamiz, kerak bo‘lsa obyektning o‘zida ham ta’mirlaymiz.",
      },
    },
    clients: {
      eyebrow: "Restoranlar va oshxonalar",
      title: "Biz bilan ishlaydiganlar",
      desc: "Mijozlarimiz orasida restoranlar, kafelar va professional oshxonalar bor. Ularga uskunaning barqaror ishlashi muhim.",
    },
    form: {
      eyebrow: "Aloqa",
      title: "So‘rov qoldiring",
      lead: "Uskunada qanday muammo borligini yozing va aloqangizni qoldiring. Biz siz bilan bog‘lanib, qulay ta’mir variantini taklif qilamiz.",
      nameLabel: "Ism",
      namePh: "Ismingiz",
      phoneLabel: "Telefon",
      phonePh: "+998971234567",
      problemLabel: "Muammoni yozing",
      problemPh: "Uskuna turi, nosozlik, shahar va manzil",
      consentLabel: "Shaxsiy ma’lumotlarimni qayta ishlashga roziman",
      submit: "So‘rov yuborish",
      sending: "Yuborilmoqda…",
      success: "So‘rov yuborildi. Ish vaqtida siz bilan bog‘lanamiz.",
      error: "Iltimos, barcha maydonlarni to‘ldiring.",
      phoneError: "Telefon raqamini to‘g‘ri kiriting.",
      consentError: "Shaxsiy ma’lumotlarni qayta ishlashga rozilik berish kerak.",
      sendError: "So‘rovni yuborib bo‘lmadi. Telegram sozlamalarini tekshirib, yana urinib ko‘ring.",
    },
    map: {
      label: "Servis markazi manzili",
      hint: "Xaritada REM WATT servis markazi ko‘rsatilgan.",
      ariaLabel: "Xarita: REM WATT servis markazi manzili",
    },
    contacts: {
      phoneLabel: "Telefon",
      phoneValue: "+998 (97) 412-69-79",
      tgLabel: "Telegram",
      tgValue: "@remwattbot",
      addrLabel: "Manzil",
      addrValue: "Toshkent sh, Mirzo-Ulug‘bek tumani, Mustaqillik prospekti, 38",
    },
    footer: {
      tagline: 'REM WATT Servis markazi xizmatlari "Sokolov Texno Servis" MCHJ nomidan ko‘rsatiladi.',
      copy: "©",
    },
  },
};

const STORAGE_KEY = "remwatt_lang";

let serviceMap = null;

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

function applyLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.documentElement.lang = lang === "uz" ? "uz" : "ru";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const path = el.getAttribute("data-i18n");
    const value = getByPath(dict, path);
    if (value !== undefined && typeof value === "string") {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const path = el.getAttribute("data-i18n-placeholder");
    const value = getByPath(dict, path);
    if (value !== undefined) {
      el.setAttribute("placeholder", value);
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const path = el.getAttribute("data-i18n-aria");
    const value = getByPath(dict, path);
    if (value !== undefined) {
      el.setAttribute("aria-label", value);
    }
  });

  const metaTitle = document.querySelector("title");
  if (metaTitle && dict.meta?.title) {
    metaTitle.textContent = dict.meta.title;
  }

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.meta?.description) {
    metaDesc.setAttribute("content", dict.meta.description);
  }

  const mapEl = document.getElementById("service-map");
  if (mapEl && dict.map?.ariaLabel) {
    mapEl.setAttribute("aria-label", dict.map.ariaLabel);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }

  if (serviceMap) {
    requestAnimationFrame(() => serviceMap.invalidateSize());
  }
}

function initLanguage() {
  let lang = "ru";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "uz" || stored === "ru") lang = stored;
  } catch {
    /* ignore */
  }
  applyLanguage(lang);
}

function initMobileNav() {
  const toggle = document.querySelector(".menu-toggle");
  const panel = document.getElementById("mobile-nav");
  if (!toggle || !panel) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}

function initForm() {
  const form = document.getElementById("request-form");
  const statusEl = document.getElementById("form-status");
  if (!form || !statusEl) return;

  const phoneInput = form.querySelector('input[name="phone"]');
  if (phoneInput) {
    phoneInput.addEventListener("input", () => {
      phoneInput.value = sanitizePhone(phoneInput.value);
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      phone: sanitizePhone(String(fd.get("phone") || "").trim()),
      problem: String(fd.get("problem") || "").trim(),
      consent: fd.get("consent") === "on",
    };

    if (phoneInput) {
      phoneInput.value = payload.phone;
    }

    if (!payload.name || !payload.phone || !payload.problem) {
      statusEl.textContent = getFormMessage("error");
      statusEl.classList.remove("is-success");
      statusEl.classList.add("is-error");
      return;
    }

    if (!isValidPhone(payload.phone)) {
      statusEl.textContent = getFormMessage("phoneError");
      statusEl.classList.remove("is-success");
      statusEl.classList.add("is-error");
      return;
    }

    if (!payload.consent) {
      statusEl.textContent = getFormMessage("consentError");
      statusEl.classList.remove("is-success");
      statusEl.classList.add("is-error");
      return;
    }

    const lang = document.documentElement.lang === "uz" ? "uz" : "ru";
    const submitBtn = form.querySelector('button[type="submit"]');
    statusEl.textContent = I18N[lang].form.sending;
    statusEl.classList.remove("is-success", "is-error");
    if (submitBtn) submitBtn.disabled = true;

    try {
      await sendTelegramMessage(payload, lang);

      statusEl.textContent = getFormMessage("success");
      statusEl.classList.remove("is-error");
      statusEl.classList.add("is-success");
      form.reset();
    } catch (error) {
      console.error("Telegram submit failed:", error);
      statusEl.textContent = getFormMessage("sendError");
      statusEl.classList.remove("is-success");
      statusEl.classList.add("is-error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

function getFormMessage(key) {
  const lang = document.documentElement.lang === "uz" ? "uz" : "ru";
  return I18N[lang].form[key];
}

function sanitizePhone(value) {
  const cleaned = value.replace(/[^\d+]/g, "");
  const hasPlus = cleaned.startsWith("+");
  const digitsOnly = cleaned.replace(/\D/g, "");
  return `${hasPlus ? "+" : ""}${digitsOnly}`;
}

function isValidPhone(value) {
  return /^\+?\d{7,15}$/.test(value);
}

function formatTelegramMessage(payload, lang) {
  const labels =
    lang === "uz"
      ? {
          title: "Yangi so‘rov",
          name: "Ism",
          phone: "Telefon",
          problem: "Muammo",
          consent: "Rozilik",
          yes: "Ha",
          no: "Yo‘q",
        }
      : {
          title: "Новая заявка",
          name: "Имя",
          phone: "Телефон",
          problem: "Проблема",
          consent: "Согласие",
          yes: "Да",
          no: "Нет",
        };

  return [
    `REM WATT | ${labels.title}`,
    "",
    `${labels.name}: ${payload.name}`,
    `${labels.phone}: ${payload.phone}`,
    "",
    `${labels.problem}:`,
    payload.problem,
    "",
    `${labels.consent}: ${payload.consent ? labels.yes : labels.no}`,
  ].join("\n");
}

async function sendTelegramMessage(payload, lang) {
  const TELEGRAM_BOT_TOKEN = "8750321573:AAG6nj3avffR3pyUB5ZjMGRZDJmbRq6E1zY";
  const TELEGRAM_CHAT_ID = "-1003771669347";

  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: formatTelegramMessage(payload, lang),
    }),
  });

  let result = null;
  try {
    result = await response.json();
  } catch {
    /* ignore */
  }

  if (!response.ok || !result?.ok) {
    const description = result?.description || `HTTP ${response.status}`;
    throw new Error(description);
  }
}

function initMap() {
  const el = document.getElementById("service-map");
  if (!el || typeof L === "undefined") return;

  // TODO: set coordinates here (latitude, longitude)
  const SERVICE_LAT = 41.321775;
  const SERVICE_LNG = 69.314322;

  const redIcon = L.divIcon({
    className: "leaflet-marker-red",
    html: '<div class="map-pin-red"></div>',
    iconSize: [28, 36],
    iconAnchor: [14, 34],
  });

  serviceMap = L.map(el, {
    scrollWheelZoom: true,
    attributionControl: true,
  }).setView([SERVICE_LAT, SERVICE_LNG], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(serviceMap);

  L.marker([SERVICE_LAT, SERVICE_LNG], { icon: redIcon }).addTo(serviceMap);

  const dict = I18N[document.documentElement.lang === "uz" ? "uz" : "ru"];
  if (dict.map?.ariaLabel) {
    el.setAttribute("aria-label", dict.map.ariaLabel);
  }

  requestAnimationFrame(() => {
    serviceMap.invalidateSize();
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (serviceMap) serviceMap.invalidateSize();
    }, 150);
  });
}

function initReveal() {
  const sections = document.querySelectorAll(".section, .site-footer");
  if (!("IntersectionObserver" in window)) {
    sections.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
  );

  sections.forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}

function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function initLangSwitch() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang === "ru" || lang === "uz") {
        applyLanguage(lang);
        const status = document.getElementById("form-status");
        if (status) {
          status.textContent = "";
          status.classList.remove("is-success", "is-error");
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initLangSwitch();
  initMobileNav();
  initForm();
  initMap();
  initReveal();
  initYear();
});
