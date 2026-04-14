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
    conspect: "lectures/1/conspect.html",
    presentations: [
      { title: "Тема 1.1 — Сучасний стан кіберзагроз", desc: "Статистика, APT-групи, Bangladesh Bank, NotPetya, тренди", url: "lectures/1/slide-1.html" },
      { title: "Тема 1.2 — Типи кібератак", desc: "Фішинг, malware, ransomware, DDoS, інсайдери, supply chain", url: "lectures/1/slide-2.html" },
      { title: "Тема 1.3 — Анатомія фінансової кібератаки", desc: "Cyber Kill Chain: від розвідки до дій на цілі", url: "lectures/1/slide-3.html" },
      { title: "Тема 1.4 — Регуляторне середовище та стандарти", desc: "PCI DSS, SWIFT CSP, НБУ, GDPR, NIST Framework", url: "lectures/1/slide-4.html" }
    ]
  },
  {
    id: 2,
    title: "Безпечна архітектура FinTech-систем",
    description: "Принципи побудови захищених веб-додатків для фінансового сектору.",
    duration: "2 год",
    badge: "new",
    overview: "У цій лекції ми розглянемо принципи побудови захищеної архітектури фінансових систем. Сучасні FinTech-додатки оперують мільйонами транзакцій та зберігають критично важливі дані клієнтів, тому архітектурні рішення безпеки є фундаментом надійності всієї системи.",
    overviewExtra: "Ви дізнаєтесь про модель Zero Trust та її застосування у фінансах, принципи Secure SDLC та DevSecOps, особливості безпеки мікросервісної архітектури та контейнерів, а також best practices захисту API та інтеграцій з платіжними системами.",
    topics: [
      { title: "Принципи Zero Trust Architecture", desc: "Never trust, always verify; мікросегментація, identity-centric security, least privilege" },
      { title: "Secure SDLC для FinTech", desc: "безпечний життєвий цикл розробки, DevSecOps, SAST/DAST, threat modeling" },
      { title: "Безпека мікросервісної архітектури", desc: "контейнери, Kubernetes, service mesh, mTLS, secrets management" },
      { title: "Захист API та інтеграцій", desc: "OAuth 2.0/OIDC, API Gateway, rate limiting, input validation, webhook security" }
    ],
    conspect: "lectures/2/conspect.html",
    presentations: [
      { title: "Тема 2.1 — Zero Trust Architecture", desc: "Принципи Zero Trust, мікросегментація, BeyondCorp", url: "lectures/2/slide-1.html" },
      { title: "Тема 2.2 — Secure SDLC", desc: "DevSecOps, SAST/DAST, безпечна розробка", url: "lectures/2/slide-2.html" },
      { title: "Тема 2.3 — Безпека мікросервісів", desc: "Контейнери, Kubernetes, service mesh, secrets", url: "lectures/2/slide-3.html" },
      { title: "Тема 2.4 — Захист API", desc: "OAuth 2.0, API Gateway, rate limiting, валідація", url: "lectures/2/slide-4.html" }
    ]
  },
  {
    id: 3,
    title: "Автентифікація та контроль доступу",
    description: "Механізми автентифікації, авторизації та управління доступом у фінансових системах.",
    duration: "2 год",
    badge: "new",
    overview: "У цій лекції ми розглянемо механізми автентифікації та контролю доступу у фінансовому секторі. Автентифікація — це процес підтвердження ідентичності користувача, а авторизація визначає, які дії він може виконувати. У фінансових системах ці механізми є критичним бар'єром між зловмисником та грошима клієнтів.",
    overviewExtra: "Ви дізнаєтесь про сучасні механізми автентифікації (MFA, FIDO2, біометрія, passwordless), структуру та вразливості JWT-токенів, протоколи OAuth 2.0 та OpenID Connect для FinTech, моделі авторизації RBAC/ABAC/ReBAC, а також практики управління ідентичностями (IAM) та привілейованим доступом (PAM) у фінансових організаціях.",
    topics: [
      { title: "Механізми автентифікації у фінансовому секторі", desc: "паролі, їх слабкості; MFA (TOTP, FIDO2, push); біометрія; passwordless-автентифікація" },
      { title: "Токени, сесії та протоколи автентифікації", desc: "JWT (структура, підпис, вразливості); OAuth 2.0 flows для FinTech; OpenID Connect; session management" },
      { title: "Моделі авторизації: RBAC, ABAC, ReBAC", desc: "Role-Based, Attribute-Based, Relationship-Based Access Control; Policy-as-Code; OPA" },
      { title: "IAM та управління привілейованим доступом", desc: "Identity lifecycle, SSO, Federation, SCIM; PAM (CyberArk, HashiCorp Vault); розділення обов'язків (SoD)" }
    ],
    conspect: "lectures/3/conspect.html",
    presentations: [
      { title: "Тема 3.1 — Механізми автентифікації", desc: "Паролі, MFA, FIDO2, біометрія, passwordless", url: "lectures/3/slide-1.html" },
      { title: "Тема 3.2 — Токени та протоколи", desc: "JWT, OAuth 2.0, OpenID Connect, session management", url: "lectures/3/slide-2.html" },
      { title: "Тема 3.3 — Моделі авторизації", desc: "RBAC, ABAC, ReBAC, Policy-as-Code, OPA", url: "lectures/3/slide-3.html" },
      { title: "Тема 3.4 — IAM та PAM", desc: "Identity lifecycle, SSO, SCIM, CyberArk, Vault, SoD", url: "lectures/3/slide-4.html" }
    ]
  },
  {
    id: 4,
    title: "Клієнтські атаки (XSS)",
    description: "Міжсайтовий скриптинг, CSRF та інші атаки на клієнтську частину веб-додатків.",
    duration: "2 год",
    badge: "new",
    overview: "У цій лекції ми розглянемо атаки на клієнтську частину веб-додатків фінансового сектору. Cross-Site Scripting (XSS) залишається однією з найпоширеніших веб-вразливостей у світі — за даними OWASP, XSS входить до кожного релізу Top 10 вразливостей. У фінансовому контексті XSS може призвести до крадіжки сесій інтернет-банкінгу, підміни реквізитів платежів та викрадення конфіденційних даних клієнтів.",
    overviewExtra: "Ви дізнаєтесь про три типи XSS (Reflected, Stored, DOM-based) та їх експлуатацію у фінансових додатках, механізми CSRF та Clickjacking, атаки на клієнтське сховище (cookies, localStorage, токени), а також сучасні методи захисту: Content Security Policy, Subresource Integrity, secure headers та правильну санітизацію даних.",
    topics: [
      { title: "Cross-Site Scripting (XSS)", desc: "Reflected, Stored, DOM-based XSS; контексти ін'єкції; реальні кейси у фінансових додатках" },
      { title: "CSRF та Clickjacking", desc: "Cross-Site Request Forgery, token-based захист, UI redressing, X-Frame-Options" },
      { title: "Атаки на клієнтське сховище", desc: "крадіжка cookies та токенів, localStorage pitfalls, session hijacking, формджекінг" },
      { title: "Захист від клієнтських атак", desc: "CSP, SRI, secure headers, output encoding, DOMPurify, trusted types" }
    ],
    conspect: "lectures/4/conspect.html",
    presentations: [
      { title: "Тема 4.1 — Cross-Site Scripting", desc: "Reflected, Stored, DOM-based XSS у фінансових додатках", url: "lectures/4/slide-1.html" },
      { title: "Тема 4.2 — CSRF та Clickjacking", desc: "Підробка запитів, UI redressing, захисні механізми", url: "lectures/4/slide-2.html" },
      { title: "Тема 4.3 — Атаки на клієнтське сховище", desc: "Cookies, токени, session hijacking, формджекінг", url: "lectures/4/slide-3.html" },
      { title: "Тема 4.4 — Захист від клієнтських атак", desc: "CSP, SRI, secure headers, sanitization, trusted types", url: "lectures/4/slide-4.html" }
    ]
  },
  {
    id: 5,
    title: "Серверні вразливості та бази даних",
    description: "SQL-ін'єкції, серверні атаки та захист баз даних фінансових систем.",
    duration: "2 год",
    badge: "new",
    overview: "У цій лекції ми розглянемо серверні вразливості та атаки на бази даних фінансових систем. SQL-ін'єкції залишаються однією з найнебезпечніших вразливостей — одна вдала ін'єкція може дати зловмиснику повний доступ до бази з мільйонами записів клієнтів, їхніми рахунками та історією транзакцій.",
    overviewExtra: "Ви дізнаєтесь про типи SQL-ін'єкцій (classic, blind, time-based) та їх наслідки у фінансовому секторі, інші серверні ін'єкції (Command Injection, SSRF, XXE, SSTI), принципи безпеки баз даних (шифрування, розмежування доступу, аудит), а також комплексні методи захисту: параметризовані запити, WAF, input validation та database hardening.",
    topics: [
      { title: "SQL-ін'єкції у фінансових системах", desc: "classic, blind, time-based SQLi; ORM injection; second-order injection; реальні кейси" },
      { title: "Серверні ін'єкції та SSRF", desc: "Command Injection, SSRF, XXE, SSTI; атаки на внутрішню інфраструктуру банків" },
      { title: "Безпека баз даних", desc: "шифрування at rest та in transit, розмежування доступу, аудит, backup security" },
      { title: "Комплексний захист серверної частини", desc: "параметризовані запити, ORM best practices, WAF, input validation, database hardening" }
    ],
    conspect: "lectures/5/conspect.html",
    presentations: [
      { title: "Тема 5.1 — SQL-ін'єкції", desc: "Classic, blind, time-based SQLi, ORM injection", url: "lectures/5/slide-1.html" },
      { title: "Тема 5.2 — Серверні ін'єкції та SSRF", desc: "Command Injection, SSRF, XXE, SSTI", url: "lectures/5/slide-2.html" },
      { title: "Тема 5.3 — Безпека баз даних", desc: "Шифрування, доступ, аудит, backup security", url: "lectures/5/slide-3.html" },
      { title: "Тема 5.4 — Комплексний захист серверу", desc: "Параметризовані запити, WAF, hardening", url: "lectures/5/slide-4.html" }
    ]
  },
  {
    id: 6,
    title: "Стандартизація OWASP та аудит",
    description: "Стандарти OWASP, методологія аудиту безпеки та оцінка вразливостей.",
    duration: "2 год",
    badge: "new",
    overview: "У цій лекції ми розглянемо стандарти OWASP та методологію аудиту безпеки фінансових систем. OWASP (Open Worldwide Application Security Project) — це глобальна спільнота, що створює відкриті стандарти, інструменти та методології для забезпечення безпеки веб-додатків. Для фінансового сектору OWASP-стандарти є фундаментом програми application security.",
    overviewExtra: "Ви дізнаєтесь про OWASP Top 10 та його застосування у фінансових додатках, стандарт верифікації ASVS для побудови security requirements, методологію тестування безпеки (OWASP Testing Guide, PTES, penetration testing), а також систему оцінки вразливостей CVSS, процеси vulnerability management та організацію bug bounty програм у фінансовому секторі.",
    topics: [
      { title: "OWASP Top 10 для фінансових додатків", desc: "аналіз ключових вразливостей, A01-A10 у контексті FinTech, еволюція стандарту" },
      { title: "OWASP ASVS та стандарти верифікації", desc: "рівні верифікації L1/L2/L3, security requirements, MASVS для мобільного банкінгу" },
      { title: "Методологія аудиту безпеки", desc: "OWASP Testing Guide, PTES, типи тестування, penetration testing lifecycle" },
      { title: "Оцінка вразливостей та управління ними", desc: "CVSS scoring, vulnerability management lifecycle, bug bounty, responsible disclosure" }
    ],
    conspect: "lectures/6/conspect.html",
    presentations: [
      { title: "Тема 6.1 — OWASP Top 10", desc: "A01-A10 вразливості у контексті фінансових додатків", url: "lectures/6/slide-1.html" },
      { title: "Тема 6.2 — OWASP ASVS", desc: "Рівні верифікації, security requirements, MASVS", url: "lectures/6/slide-2.html" },
      { title: "Тема 6.3 — Методологія аудиту", desc: "Testing Guide, PTES, penetration testing lifecycle", url: "lectures/6/slide-3.html" },
      { title: "Тема 6.4 — Оцінка вразливостей", desc: "CVSS, vulnerability management, bug bounty", url: "lectures/6/slide-4.html" }
    ]
  },
  {
    id: 7,
    title: "Безпека платіжних систем",
    description: "PCI DSS, захист транзакцій, безпека карткових платежів та електронних гаманців.",
    duration: "2 год",
    badge: "new",
    overview: "У цій лекції ми розглянемо безпеку платіжних систем — критичну область фінансової кібербезпеки. Платіжна індустрія обробляє трильйони доларів щорічно, що робить її привабливою мішенню для кіберзлочинців. Від карткових платежів до мобільних гаманців — кожен компонент платіжної екосистеми потребує надійного захисту.",
    overviewExtra: "Ви дізнаєтесь про стандарт PCI DSS та його 12 вимог, безпеку карткових транзакцій (EMV, токенізація, 3D Secure 2.0), захист мобільних та електронних платежів (Apple Pay, Google Pay, e-wallets), а також системи виявлення шахрайства (fraud detection) та моніторинг транзакцій у реальному часі.",
    topics: [
      { title: "PCI DSS — стандарт безпеки платіжних карток", desc: "12 вимог PCI DSS, рівні комплаєнсу, SAQ, ROC, ASV-сканування" },
      { title: "Безпека карткових транзакцій", desc: "EMV-чіпи, токенізація, 3D Secure 2.0, point-to-point encryption (P2PE)" },
      { title: "Мобільні та електронні платежі", desc: "Apple Pay, Google Pay, NFC, e-wallets, QR-платежі, Open Banking (PSD2)" },
      { title: "Fraud detection та моніторинг транзакцій", desc: "rule-based та ML-системи, поведінковий аналіз, real-time scoring, chargeback" }
    ],
    conspect: "lectures/7/conspect.html",
    presentations: [
      { title: "Тема 7.1 — PCI DSS", desc: "12 вимог, рівні комплаєнсу, SAQ, сертифікація", url: "lectures/7/slide-1.html" },
      { title: "Тема 7.2 — Безпека карткових транзакцій", desc: "EMV, токенізація, 3D Secure 2.0, P2PE", url: "lectures/7/slide-2.html" },
      { title: "Тема 7.3 — Мобільні та електронні платежі", desc: "Apple Pay, Google Pay, e-wallets, Open Banking", url: "lectures/7/slide-3.html" },
      { title: "Тема 7.4 — Fraud detection", desc: "ML-системи, поведінковий аналіз, real-time scoring", url: "lectures/7/slide-4.html" }
    ]
  },
  {
    id: 8,
    title: "Соціальна інженерія та психологія шахрайства",
    description: "Методи соціальної інженерії, фішинг, вішинг та психологічні прийоми шахраїв.",
    duration: "2 год",
    badge: "new",
    overview: "Соціальна інженерія — найпоширеніший вектор атак у фінансовому секторі: людський фактор присутній у 74% витоків даних. Розглянемо фішинг та його різновиди, претекстинг і маніпулятивні техніки, психологію маніпуляцій та когнітивні вразливості, а також захист на трьох рівнях — індивідуальному, організаційному та технічному.",
    overviewExtra: "Від масового фішингу до deepfake-атак — зловмисники експлуатують принципи Чалдіні та amygdala hijack для обходу раціонального мислення. BEC-атаки завдають $2.7 млрд збитків щорічно. Ефективний захист поєднує правило СТОП, технології FIDO2 та регулярні фішинг-симуляції.",
    topics: [
      { title: "Фішинг та його різновиди", desc: "Email phishing, spear phishing, whaling, smishing, BEC, deepfake, вішинг в Україні" },
      { title: "Pretexting та маніпулятивні техніки", desc: "Impersonation, tailgating, baiting, багатоетапні атаки, Центральний банк Бангладеш" },
      { title: "Психологія жертви", desc: "Принципи Чалдіні, когнітивні упередження, amygdala hijack, правило СТОП" },
      { title: "Захист від соціальної інженерії", desc: "FIDO2, callback verification, фішинг-симуляції, awareness-тренінги, технічні контролі" }
    ],
    conspect: "lectures/8/conspect.html",
    presentations: [
      { title: "Тема 8.1 — Фішинг та його різновиди", desc: "Email phishing, spear phishing, whaling, smishing, vishing", url: "lectures/8/slide-1.html" },
      { title: "Тема 8.2 — Pretexting та маніпулятивні техніки", desc: "Impersonation, tailgating, baiting, watering hole", url: "lectures/8/slide-2.html" },
      { title: "Тема 8.3 — Психологія жертви", desc: "Принципи Чалдіні, когнітивні упередження, емоційна маніпуляція", url: "lectures/8/slide-3.html" },
      { title: "Тема 8.4 — Захист від соціальної інженерії", desc: "Awareness-тренінги, phishing-симуляції, технічні контролі", url: "lectures/8/slide-4.html" }
    ]
  },
  {
    id: 9,
    title: "Штучний інтелект у кібербезпеці",
    description: "Використання AI/ML для виявлення загроз, аномалій та автоматизації захисту.",
    duration: "2 год",
    badge: "new",
    overview: "Штучний інтелект трансформує кібербезпеку фінансового сектору як інструмент захисту і як зброя зловмисників. Ринок AI у кібербезпеці оцінюється у $34.1 млрд (2025) із прогнозом зростання до $234.6 млрд до 2032 року. AI-системи покращують швидкість виявлення загроз на 74% та зменшують вартість витоку на 43%.",
    overviewExtra: "UEBA, NDR, автоматизований threat hunting через SOAR-платформи, fraud detection з точністю 87-96.8%. Водночас генеративний AI створює нові загрози: AI-фішинг з 78% open rate, Deepfake-as-a-Service, автоматизація атак. EU AI Act (набув чинності 2024) та NIST AI RMF визначають вимоги до захисту та відповідального використання AI.",
    topics: [
      { title: "AI/ML для виявлення загроз", desc: "Виявлення аномалій, UEBA, NDR (Darktrace, Vectra AI), SOAR-автоматизація, SIGMA-правила" },
      { title: "AI у фінансовому моніторингу", desc: "Fraud detection (точність 87-96.8%), AML з GNN, KYC/deepfake detection, Danske Bank та HSBC кейси" },
      { title: "Генеративний AI та нові загрози", desc: "AI-фішинг (+1265%), deepfake-атаки (Arup $25M), prompt injection, AI model supply chain risk" },
      { title: "Захист AI-систем та відповідальний AI", desc: "Змагальні атаки (adversarial), XAI/SHAP/LIME, AI governance, EU AI Act, NIST AI RMF" }
    ],
    conspect: "lectures/9/conspect.html",
    presentations: [
      { title: "Тема 9.1 — AI/ML для виявлення загроз", desc: "Anomaly detection, UEBA, автоматизований threat hunting", url: "lectures/9/slide-1.html" },
      { title: "Тема 9.2 — AI у фінансовому моніторингу", desc: "ML для fraud detection, AML-скринінг, deepfake detection", url: "lectures/9/slide-2.html" },
      { title: "Тема 9.3 — Генеративний AI та нові загрози", desc: "AI-фішинг, deepfake-голоси, LLM-вразливості", url: "lectures/9/slide-3.html" },
      { title: "Тема 9.4 — Захист AI-систем", desc: "Adversarial attacks, model security, AI governance", url: "lectures/9/slide-4.html" }
    ]
  },
  {
    id: 10,
    title: "Безпека криптоактивів",
    description: "Захист криптовалютних гаманців, смарт-контрактів та DeFi-протоколів.",
    duration: "2 год",
    badge: "new",
    overview: "Криптоактиви створюють унікальні виклики безпеці: незворотність транзакцій, відсутність центрального регулятора, іммутабельність смарт-контрактів. У 2025 році зловмисники викрали $3.4 млрд у криптовалюті (Chainalysis), а загальні втрати від шахрайства досягли $17 млрд. Більшість втрат зумовлені не вразливостями коду, а людським фактором.",
    overviewExtra: "Від Mt. Gox ($450M, 2014) до Bybit ($1.5 млрд, 2025) — історія криптоіндустрії демонструє еволюцію загроз. MPC-гаманці стають інституційним стандартом, аудити смарт-контрактів зросли на 40%, а регулювання MiCA набуло повної чинності у грудні 2024 року. Україна розробляє власний законопроєкт на основі MiCA.",
    topics: [
      { title: "Криптогаманці та управління ключами", desc: "Приватні ключі, seed-фраза (BIP-39), hot/cold гаманці, мультипідпис (Multisig), MPC-гаманці, апаратні гаманці (Ledger, Trezor)" },
      { title: "Вразливості смарт-контрактів", desc: "Повторний вхід (Reentrancy), контроль доступу ($953M втрат), переповнення, аудит (+40%), OWASP Smart Contract Top 10" },
      { title: "Безпека DeFi-протоколів", desc: "Flash Loan атаки, маніпуляція оракулами (Mango Markets $114M), rug pull, безпека мостів (Ronin $625M, Wormhole $320M)" },
      { title: "Безпека бірж та регулювання", desc: "Bybit $1.5 млрд (2025), Proof of Reserves, MiCA (повна чинність 12.2024), CASP-ліцензування, регулювання в Україні" }
    ],
    conspect: "lectures/10/conspect.html",
    presentations: [
      { title: "Тема 10.1 — Криптогаманці та ключі", desc: "Hot/cold wallets, seed phrase, multisig, hardware wallets", url: "lectures/10/slide-1.html" },
      { title: "Тема 10.2 — Вразливості смарт-контрактів", desc: "Reentrancy, overflow, access control, аудит", url: "lectures/10/slide-2.html" },
      { title: "Тема 10.3 — Безпека DeFi", desc: "Flash loans, oracle manipulation, rug pulls", url: "lectures/10/slide-3.html" },
      { title: "Тема 10.4 — Біржі та регулювання", desc: "Proof of Reserves, cold storage, MiCA", url: "lectures/10/slide-4.html" }
    ]
  },
  {
    id: 11,
    title: "AML та фінансовий моніторинг",
    description: "Протидія відмиванню коштів, KYC-процедури та системи фінансового моніторингу.",
    duration: "2 год",
    badge: "new",
    overview: "Протидія відмиванню коштів (AML) та фінансовий моніторинг є ключовими елементами фінансової безпеки. Розглянемо процес відмивання коштів та його етапи, KYC/CDD-процедури, системи фінансового моніторингу та transaction monitoring, а також міжнародні стандарти FATF та українське законодавство.",
    overviewExtra: "Від FATF Recommendations до закону України «Про запобігання та протидію легалізації доходів» — AML-compliance є обов'язковим для кожної фінансової установи. Порушення загрожує мільйонними штрафами та втратою ліцензії.",
    topics: [
      { title: "Відмивання коштів: схеми та етапи", desc: "Placement, layering, integration, типові схеми, trade-based ML" },
      { title: "KYC та Customer Due Diligence", desc: "Ідентифікація, верифікація, EDD, PEP-скринінг, ongoing monitoring" },
      { title: "Системи фінансового моніторингу", desc: "Transaction monitoring, STR, threshold reporting, risk scoring" },
      { title: "FATF та українське законодавство", desc: "40 рекомендацій FATF, Держфінмоніторинг, закон 361-IX" }
    ],
    conspect: "lectures/11/conspect.html",
    presentations: [
      { title: "Тема 11.1 — Відмивання коштів", desc: "Placement, layering, integration, типові схеми", url: "lectures/11/slide-1.html" },
      { title: "Тема 11.2 — KYC та CDD", desc: "Ідентифікація, верифікація, EDD, PEP-скринінг", url: "lectures/11/slide-2.html" },
      { title: "Тема 11.3 — Фінансовий моніторинг", desc: "Transaction monitoring, STR, risk scoring", url: "lectures/11/slide-3.html" },
      { title: "Тема 11.4 — FATF та законодавство", desc: "40 рекомендацій, Держфінмоніторинг, закон 361-IX", url: "lectures/11/slide-4.html" }
    ]
  },
  {
    id: 12,
    title: "Цифрова форензика та реагування на інциденти",
    description: "Розслідування кіберінцидентів, збір цифрових доказів та процедури реагування.",
    duration: "2 год",
    badge: "new",
    overview: "Цифрова форензика — це наука про збір, збереження та аналіз цифрових доказів для розслідування кіберінцидентів. Розглянемо процес incident response, збір та збереження цифрових доказів, аналіз malware та мережевого трафіку, а також побудову CSIRT-команди.",
    overviewExtra: "Від першого виявлення інциденту до судового процесу — кожен крок повинен відповідати стандартам збереження доказів. Помилка на будь-якому етапі може зробити докази недопустимими у суді.",
    topics: [
      { title: "Incident Response Framework", desc: "NIST SP 800-61, фази реагування, playbooks, CSIRT" },
      { title: "Збір цифрових доказів", desc: "Chain of custody, forensic imaging, volatile data, write blockers" },
      { title: "Аналіз інцидентів", desc: "Malware analysis, memory forensics, network forensics, log analysis" },
      { title: "Побудова CSIRT та post-incident", desc: "CSIRT структура, lessons learned, reporting, кіберстрахування" }
    ],
    conspect: "lectures/12/conspect.html",
    presentations: [
      { title: "Тема 12.1 — Incident Response", desc: "NIST SP 800-61, фази реагування, playbooks", url: "lectures/12/slide-1.html" },
      { title: "Тема 12.2 — Збір цифрових доказів", desc: "Chain of custody, forensic imaging, volatile data", url: "lectures/12/slide-2.html" },
      { title: "Тема 12.3 — Аналіз інцидентів", desc: "Malware analysis, memory forensics, log analysis", url: "lectures/12/slide-3.html" },
      { title: "Тема 12.4 — CSIRT та post-incident", desc: "CSIRT структура, lessons learned, кіберстрахування", url: "lectures/12/slide-4.html" }
    ]
  },
  {
    id: 13,
    title: "Кібергігієна та захист кінцевого користувача",
    description: "Правила цифрової гігієни, захист персональних даних та безпечна поведінка онлайн.",
    duration: "2 год",
    badge: "new",
    overview: "Кібергігієна — це набір щоденних практик для захисту від кіберзагроз на рівні кінцевого користувача. Розглянемо безпечне управління паролями та акаунтами, захист персональних даних та приватність, безпеку мобільних пристроїв та домашніх мереж, а також фінансову безпеку онлайн.",
    overviewExtra: "95% кіберінцидентів пов'язані з людським фактором. Кібергігієна — це перший і найважливіший рубіж захисту для кожного працівника фінансової установи та кожного клієнта.",
    topics: [
      { title: "Паролі та управління акаунтами", desc: "Password managers, MFA, passkeys, breach monitoring" },
      { title: "Захист персональних даних", desc: "GDPR, приватність, data minimization, право на забуття" },
      { title: "Безпека пристроїв та мереж", desc: "Endpoint security, Wi-Fi, VPN, IoT, оновлення" },
      { title: "Фінансова безпека онлайн", desc: "Безпечні платежі, захист від шахрайства, інвестиційні сками" }
    ],
    conspect: "lectures/13/conspect.html",
    presentations: [
      { title: "Тема 13.1 — Паролі та акаунти", desc: "Password managers, MFA, passkeys, breach monitoring", url: "lectures/13/slide-1.html" },
      { title: "Тема 13.2 — Захист персональних даних", desc: "GDPR, приватність, data minimization", url: "lectures/13/slide-2.html" },
      { title: "Тема 13.3 — Безпека пристроїв", desc: "Endpoint security, Wi-Fi, VPN, оновлення", url: "lectures/13/slide-3.html" },
      { title: "Тема 13.4 — Фінансова безпека онлайн", desc: "Безпечні платежі, захист від шахрайства", url: "lectures/13/slide-4.html" }
    ]
  },
  {
    id: 14,
    title: "Ризик-менеджмент та SOC",
    description: "Управління кіберризиками, побудова та функціонування центрів безпеки (SOC).",
    duration: "2 год",
    badge: "new",
    overview: "Управління кіберризиками та побудова Security Operations Center (SOC) є стратегічними завданнями для фінансових установ. Розглянемо фреймворки ризик-менеджменту, кількісну та якісну оцінку ризиків, архітектуру та рівні зрілості SOC, а також ключові метрики ефективності кібербезпеки.",
    overviewExtra: "Від ISO 27005 до NIST CSF — ризик-менеджмент визначає пріоритети інвестицій у безпеку. SOC — це оперативний центр, що забезпечує безперервний моніторинг, виявлення та реагування на загрози 24/7.",
    topics: [
      { title: "Фреймворки ризик-менеджменту", desc: "ISO 27005, NIST RMF, FAIR, risk appetite, risk register" },
      { title: "Оцінка та обробка ризиків", desc: "Якісна та кількісна оцінка, ALE, risk treatment, residual risk" },
      { title: "Архітектура та функціонування SOC", desc: "SOC tiers, SIEM, EDR, SOAR, threat intelligence, 24/7 monitoring" },
      { title: "Метрики та зрілість кібербезпеки", desc: "KPI/KRI, MTTD/MTTR, SOC maturity model, continuous improvement" }
    ],
    conspect: "lectures/14/conspect.html",
    presentations: [
      { title: "Тема 14.1 — Фреймворки ризик-менеджменту", desc: "ISO 27005, NIST RMF, FAIR, risk appetite", url: "lectures/14/slide-1.html" },
      { title: "Тема 14.2 — Оцінка та обробка ризиків", desc: "Якісна та кількісна оцінка, ALE, risk treatment", url: "lectures/14/slide-2.html" },
      { title: "Тема 14.3 — Архітектура SOC", desc: "SOC tiers, SIEM, EDR, SOAR, 24/7 monitoring", url: "lectures/14/slide-3.html" },
      { title: "Тема 14.4 — Метрики кібербезпеки", desc: "KPI/KRI, MTTD/MTTR, SOC maturity model", url: "lectures/14/slide-4.html" }
    ]
  },
  {
    id: 15,
    title: "Національна стратегія фінансової кібербезпеки",
    description: "Державна політика, регулювання та стратегічні ініціативи у сфері фінансової кібербезпеки.",
    duration: "2 год",
    badge: "new",
    overview: "Фінансова кібербезпека є частиною національної безпеки. Розглянемо роль НБУ та CERT-UA у захисті фінансового сектору, міжнародні стандарти та директиви (NIS2, DORA), кібербезпеку в умовах війни та стратегічні пріоритети розвитку фінансової кібербезпеки України.",
    overviewExtra: "Від Стратегії кібербезпеки України до EU DORA — регуляторний ландшафт швидко змінюється. Україна, маючи унікальний досвід кібервійни, формує передові практики захисту фінансової інфраструктури.",
    topics: [
      { title: "НБУ та CERT-UA: захист фінсектору", desc: "Роль НБУ, CERT-UA, кіберполіція, міжвідомча координація" },
      { title: "Міжнародні стандарти та директиви", desc: "NIS2, DORA, SWIFT CSCF, Basel III operational resilience" },
      { title: "Кібербезпека в умовах війни", desc: "Досвід України, атаки на фінінфраструктуру, resilience, IT Army" },
      { title: "Стратегічні пріоритети", desc: "Кадри, інновації, міжнародна співпраця, цифрова трансформація" }
    ],
    conspect: "lectures/15/conspect.html",
    presentations: [
      { title: "Тема 15.1 — НБУ та CERT-UA", desc: "Роль НБУ, CERT-UA, міжвідомча координація", url: "lectures/15/slide-1.html" },
      { title: "Тема 15.2 — Міжнародні стандарти", desc: "NIS2, DORA, SWIFT CSCF, Basel III", url: "lectures/15/slide-2.html" },
      { title: "Тема 15.3 — Кібербезпека в умовах війни", desc: "Досвід України, атаки на фінінфраструктуру", url: "lectures/15/slide-3.html" },
      { title: "Тема 15.4 — Стратегічні пріоритети", desc: "Кадри, інновації, міжнародна співпраця", url: "lectures/15/slide-4.html" }
    ]
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
