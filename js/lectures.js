const lectures = [
  {
    id: 1,
    title: "Ландшафт кіберзагроз у фінансах",
    description: "Огляд сучасних кіберзагроз у фінансовому секторі, типи атак та їх наслідки.",
    duration: "2 год",
    badge: "new",
    overview: "У цій лекції ми розглянемо сучасний ландшафт кіберзагроз у фінансовому секторі. Фінансові установи є однією з найбільш атакованих галузей у світі — банки, страхові компанії та платіжні системи щороку зазнають тисяч кібератак, а збитки вимірюються мільярдами доларів.",
    overviewExtra: "Ви дізнаєтесь про діяльність APT-груп (Carbanak, Lazarus, Silence), таксономію кібератак на фінансовий сектор (фішинг, malware, ransomware, DDoS, інсайдерські загрози), модель Cyber Kill Chain у фінансовому контексті, а також ключові регуляторні стандарти — PCI DSS, SWIFT CSP, вимоги НБУ, GDPR та NIST Cybersecurity Framework.",
    topics: [
      { title: "Сучасний стан кіберзагроз у фінансовому секторі", desc: "статистика, APT-групи, резонансні інциденти (NotPetya, Bangladesh Bank, Carbanak)" },
      { title: "Типи кібератак на фінансовий сектор", desc: "фішинг, malware, ransomware, DDoS, інсайдерські загрози, supply chain" },
      { title: "Анатомія фінансової кібератаки (Kill Chain)", desc: "7 фаз атаки у фінансовому контексті, lifecycle атаки" },
      { title: "Регуляторне середовище та стандарти", desc: "PCI DSS, SWIFT CSP, НБУ, GDPR, NIST" }
    ],
    conspect: "conspects/lecture-1.html",
    presentations: [
      { title: "Тема 1.1 — Сучасний стан кіберзагроз", desc: "Статистика, APT-групи, Bangladesh Bank, NotPetya, тренди", url: "slides/lecture-1-1.html" },
      { title: "Тема 1.2 — Типи кібератак", desc: "Фішинг, malware, ransomware, DDoS, інсайдери, supply chain", url: "slides/lecture-1-2.html" },
      { title: "Тема 1.3 — Анатомія фінансової кібератаки", desc: "Cyber Kill Chain: від розвідки до дій на цілі", url: "slides/lecture-1-3.html" },
      { title: "Тема 1.4 — Регуляторне середовище та стандарти", desc: "PCI DSS, SWIFT CSP, НБУ, GDPR, NIST Framework", url: "slides/lecture-1-4.html" }
    ]
  },
  {
    id: 2,
    title: "Безпечна архітектура FinTech-систем",
    description: "Принципи побудови захищених веб-додатків для фінансового сектору.",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 3,
    title: "Автентифікація та контроль доступу",
    description: "Механізми автентифікації, авторизації та управління доступом у фінансових системах.",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 4,
    title: "Клієнтські атаки (XSS)",
    description: "Міжсайтовий скриптинг, CSRF та інші атаки на клієнтську частину веб-додатків.",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 5,
    title: "Серверні вразливості та бази даних",
    description: "SQL-ін'єкції, серверні атаки та захист баз даних фінансових систем.",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 6,
    title: "Стандартизація OWASP та аудит",
    description: "Стандарти OWASP, методологія аудиту безпеки та оцінка вразливостей.",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 7,
    title: "Безпека платіжних систем",
    description: "PCI DSS, захист транзакцій, безпека карткових платежів та електронних гаманців.",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 8,
    title: "Соціальна інженерія та психологія шахрайства",
    description: "Методи соціальної інженерії, фішинг, вішинг та психологічні прийоми шахраїв.",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 9,
    title: "Штучний інтелект у кібербезпеці",
    description: "Використання AI/ML для виявлення загроз, аномалій та автоматизації захисту.",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 10,
    title: "Безпека криптоактивів",
    description: "Захист криптовалютних гаманців, смарт-контрактів та DeFi-протоколів.",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 11,
    title: "AML та фінансовий моніторинг",
    description: "Протидія відмиванню коштів, KYC-процедури та системи фінансового моніторингу.",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 12,
    title: "Цифрова форензика та реагування на інциденти",
    description: "Розслідування кіберінцидентів, збір цифрових доказів та процедури реагування.",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 13,
    title: "Кібергігієна та захист кінцевого користувача",
    description: "Правила цифрової гігієни, захист персональних даних та безпечна поведінка онлайн.",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 14,
    title: "Ризик-менеджмент та SOC",
    description: "Управління кіберризиками, побудова та функціонування центрів безпеки (SOC).",
    duration: "2 год",
    badge: "locked"
  },
  {
    id: 15,
    title: "Національна стратегія фінансової кібербезпеки",
    description: "Державна політика, регулювання та стратегічні ініціативи у сфері фінансової кібербезпеки.",
    duration: "2 год",
    badge: "locked"
  }
];

(function () {
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id'), 10) || 1;
  const lecture = lectures.find(function (l) { return l.id === id; });

  if (!lecture) {
    document.getElementById('lecture-title').textContent = 'Лекцію не знайдено';
    document.getElementById('lecture-badge-top').textContent = 'Помилка';
    document.getElementById('lecture-info').style.display = 'none';
    document.getElementById('lecture-locked').style.display = 'none';
    document.getElementById('lecture-overview').style.display = 'none';
    document.getElementById('lecture-materials').style.display = 'none';
    document.getElementById('lecture-presentations').style.display = 'none';
    var prevBtn = document.getElementById('nav-prev');
    var nextBtn = document.getElementById('nav-next');
    prevBtn.classList.add('disabled');
    prevBtn.removeAttribute('href');
    nextBtn.classList.add('disabled');
    nextBtn.removeAttribute('href');
    return;
  }

  var isLocked = lecture.badge === 'locked';

  // Page title
  document.title = 'Лекція ' + lecture.id + ' — Фінансова Безпека';

  // Top badge
  document.getElementById('lecture-badge-top').textContent = 'Лекція ' + lecture.id + ' з ' + lectures.length;

  // Lecture title
  document.getElementById('lecture-title').textContent = lecture.title;

  // Lecture info (duration + badge)
  var infoEl = document.getElementById('lecture-info');
  var durationSpan = document.createElement('span');
  durationSpan.textContent = '⏱ ' + lecture.duration;
  infoEl.appendChild(durationSpan);

  var badgeSpan = document.createElement('span');
  if (isLocked) {
    badgeSpan.className = 'badge badge-locked';
    badgeSpan.textContent = 'Скоро';
  } else {
    badgeSpan.className = 'badge badge-new';
    badgeSpan.textContent = 'Нова';
  }
  infoEl.appendChild(badgeSpan);

  if (isLocked) {
    // Locked state
    var lockedSection = document.getElementById('lecture-locked');
    lockedSection.style.display = 'block';

    var descEl = document.getElementById('lecture-locked-desc');
    descEl.textContent = lecture.description;

    // Hide open-only sections
    document.getElementById('lecture-overview').style.display = 'none';
    document.getElementById('lecture-materials').style.display = 'none';
    document.getElementById('lecture-presentations').style.display = 'none';
  } else {
    // Open state — fill overview
    document.getElementById('lecture-locked').style.display = 'none';

    var overviewSection = document.getElementById('lecture-overview');
    var overviewH2 = document.createElement('h2');
    overviewH2.textContent = 'Огляд лекції';
    overviewSection.appendChild(overviewH2);

    var overviewP = document.createElement('p');
    overviewP.textContent = lecture.overview;
    overviewSection.appendChild(overviewP);

    if (lecture.overviewExtra) {
      var extraP = document.createElement('p');
      extraP.textContent = lecture.overviewExtra;
      overviewSection.appendChild(extraP);
    }

    // Topics
    if (lecture.topics && lecture.topics.length) {
      var topicsH3 = document.createElement('h3');
      topicsH3.textContent = 'Теми лекції';
      overviewSection.appendChild(topicsH3);

      var ol = document.createElement('ol');
      lecture.topics.forEach(function (topic) {
        var li = document.createElement('li');
        var strong = document.createElement('strong');
        strong.textContent = topic.title;
        li.appendChild(strong);
        li.appendChild(document.createTextNode(' — ' + topic.desc));
        ol.appendChild(li);
      });
      overviewSection.appendChild(ol);
    }

    // Conspect
    var materialsSection = document.getElementById('lecture-materials');
    if (lecture.conspect) {
      var matH2 = document.createElement('h2');
      matH2.textContent = 'Матеріали лекції';
      materialsSection.appendChild(matH2);

      var matList = document.createElement('div');
      matList.className = 'lecture-materials';

      var matLink = document.createElement('a');
      matLink.href = lecture.conspect;
      matLink.className = 'material-item';
      matLink.innerHTML =
        '<span class="material-icon">📄</span>' +
        '<div class="material-info">' +
          '<h3>Конспект лекції ' + lecture.id + '</h3>' +
          '<p>Повний текст лекції з усіх тем</p>' +
        '</div>' +
        '<span class="material-type">Конспект</span>';
      matList.appendChild(matLink);
      materialsSection.appendChild(matList);
    } else {
      materialsSection.style.display = 'none';
    }

    // Presentations
    var presSection = document.getElementById('lecture-presentations');
    if (lecture.presentations && lecture.presentations.length) {
      var presH2 = document.createElement('h2');
      presH2.textContent = 'Презентації';
      presSection.appendChild(presH2);

      var presList = document.createElement('div');
      presList.className = 'lecture-materials';

      lecture.presentations.forEach(function (pres) {
        var presLink = document.createElement('a');
        presLink.href = pres.url;
        presLink.target = '_blank';
        presLink.className = 'material-item';
        presLink.innerHTML =
          '<span class="material-icon">📊</span>' +
          '<div class="material-info">' +
            '<h3>' + pres.title + '</h3>' +
            '<p>' + pres.desc + '</p>' +
          '</div>' +
          '<span class="material-type">Слайди</span>';
        presList.appendChild(presLink);
      });
      presSection.appendChild(presList);
    } else {
      presSection.style.display = 'none';
    }
  }

  // Navigation
  var prevBtn = document.getElementById('nav-prev');
  var nextBtn = document.getElementById('nav-next');

  if (id <= 1) {
    prevBtn.classList.add('disabled');
    prevBtn.removeAttribute('href');
  } else {
    prevBtn.href = 'lecture.html?id=' + (id - 1);
  }

  if (id >= lectures.length) {
    nextBtn.classList.add('disabled');
    nextBtn.removeAttribute('href');
  } else {
    nextBtn.href = 'lecture.html?id=' + (id + 1);
  }
})();
