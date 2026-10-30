/* ============ Имя файла для скачивания ============ */
const DOWNLOAD_FILE = 'ligone-launcher_x64-setup.exe';

/* ============ Переводы ============ */
const translations = {
    ru: {
        navFeatures: 'Возможности',
        navDownload: 'Скачать',
        navGithub: 'GitHub',
        heroBadge: 'Minecraft · Tauri 2 · React 19 + Rust',
        heroDesc: 'Лаунчер Minecraft с офлайн-входом и Ely.by, инстансами, поддержкой Fabric и Forge, а также браузером модов, ресурспаков и шейдеров с Modrinth и CurseForge.',
        heroBtnDownload: '⬇ Скачать',
        heroBtnFeatures: 'Возможности',
        techFrontend: 'Фронтенд: <b>React 19 + TypeScript (Vite)</b>',
        techBackend: 'Бэкенд: <b>Rust</b>',
        techShell: 'Оболочка: <b>Tauri 2</b>',
        featuresTitle: 'Возможности',
        featuresSubtitle: 'Всё для комфортной игры — от аккаунтов до модов, шейдеров и запуска.',
        card1Title: 'Аккаунты',
        card1Desc: 'Офлайн-вход (UUID как <code>nameUUIDFromBytes</code> в Java) и Ely.by — OAuth (рекомендуется) или вход по паролю. Ely.by работает из коробки, без настройки. Аккаунты сохраняются, токены — в OS keyring (Windows Credential Manager), на диске секретов нет.',
        card2Title: 'Инстансы',
        card2Desc: 'Создание, переименование и удаление. Скачивание выбранной версии Minecraft с vanilla, Fabric или Forge (jar, библиотеки, ассеты) с проверкой по sha1 — валидные файлы не скачиваются повторно. Forge ставится через официальный установщик (1.13+; для 26.1+ Forge не существует — лаунчер предупредит). У каждого инстанса свои <code>mods/</code>, <code>resourcepacks/</code>, <code>shaderpacks/</code>, <code>saves/</code>.',
        card3Title: 'Браузер контента',
        card3Desc: 'Поиск и установка модов, ресурспаков и шейдерпаков с Modrinth и CurseForge. Всегда фильтр по версии игры, для модов — ещё и по загрузчику (Fabric/Forge). Зависимости модов ставятся автоматически. CurseForge требует <code>CURSEFORGE_API_KEY</code>, без ключа доступен только Modrinth.',
        card4Title: 'Автоподбор Java',
        card4Desc: 'Пользовательский путь → рантайм Mojang (скачивается без UAC/MSI) → системная Java. Нужная версия подбирается автоматически.',
        card5Title: 'Запуск игры',
        card5Desc: 'JVM-аргументы, распаковка нативных библиотек, authlib-injector — скины по нику работают и офлайн. Лог пишется в <code>&lt;инстанс&gt;/launcher.log</code>, при аварийном выходе ошибка показывается в UI.',
        card6Title: 'Интерфейс',
        card6Desc: 'Тёмная и светлая темы, русский и английский языки. Аккуратный десктопный UI на React.',
        installTitle: 'Как начать',
        installSubtitle: 'Скачайте установщик, запустите его — и можно играть. Ely.by уже настроен.',
        step1Title: 'Скачайте установщик',
        step1Desc: 'Нажмите кнопку «Скачать» — файл <code>ligone-launcher_x64-setup.exe</code> загрузится на ваш компьютер.',
        step2Title: 'Установите и запустите',
        step2Desc: 'Откройте <code>ligone-launcher_x64-setup.exe</code>, следуйте инструкциям установщика и запустите лаунчер.',
        step3Title: 'Войдите и играйте',
        step3Desc: 'Выберите офлайн-аккаунт или Ely.by (работает сразу), создайте инстанс с нужной версией и запускайте игру.',
        installNote: '<b>Важно:</b> готовые сборки также лежат на вкладке <b>Releases</b> в GitHub. Для CurseForge нужен <code>CURSEFORGE_API_KEY</code>, без него поиск работает только через Modrinth. Forge недоступен для версий 26.1+ — лаунчер предупредит при создании такого инстанса.',
        ctaTitle: 'Готовы играть?',
        ctaDesc: 'Скачайте Ligone Launcher или соберите из исходников — проект открыт.',
        ctaBtn: 'Скачать установщик',
        footerCopy: '© 2025 Ligone Launcher. Проект с открытым исходным кодом.'
    },
    en: {
        navFeatures: 'Features',
        navDownload: 'Download',
        navGithub: 'GitHub',
        heroBadge: 'Minecraft · Tauri 2 · React 19 + Rust',
        heroDesc: 'A Minecraft launcher with offline login and Ely.by, instances, Fabric and Forge support, and a Modrinth/CurseForge browser for mods, resource packs and shaders.',
        heroBtnDownload: '⬇ Download',
        heroBtnFeatures: 'Features',
        techFrontend: 'Frontend: <b>React 19 + TypeScript (Vite)</b>',
        techBackend: 'Backend: <b>Rust</b>',
        techShell: 'Shell: <b>Tauri 2</b>',
        featuresTitle: 'Features',
        featuresSubtitle: 'Everything for comfortable play — from accounts to mods, shaders and launching.',
        card1Title: 'Accounts',
        card1Desc: 'Offline login (UUID matching Java\'s <code>nameUUIDFromBytes</code>) and Ely.by — OAuth (recommended) or a password fallback. Ely.by works out of the box, no setup needed. Accounts persist between runs; tokens are stored in the OS keyring (Windows Credential Manager), so no secrets ever touch disk files.',
        card2Title: 'Instances',
        card2Desc: 'Create, rename, delete. Download the selected Minecraft version with vanilla, Fabric or Forge (jar, libraries, assets) and sha1 verification — repeated downloads skip valid files. Forge is installed through the official installer (available for 1.13+; Forge does not exist for 26.1+ — the launcher warns you). Each instance has its own <code>mods/</code>, <code>resourcepacks/</code>, <code>shaderpacks/</code>, <code>saves/</code>.',
        card3Title: 'Content browser',
        card3Desc: 'Search and install mods, resource packs and shader packs from Modrinth and CurseForge. Always filtered by game version; for mods — by loader (Fabric/Forge) as well. Mod dependencies are installed automatically. CurseForge requires <code>CURSEFORGE_API_KEY</code>; without a key only Modrinth is available.',
        card4Title: 'Automatic Java',
        card4Desc: 'Custom path → Mojang runtime (downloaded without UAC/MSI) → system Java. The right version is resolved automatically.',
        card5Title: 'Game launch',
        card5Desc: 'JVM arguments, natives extraction, authlib-injector — skins by nickname work offline too. The log is written to <code>&lt;instance&gt;/launcher.log</code>; a crash shows the error in the UI.',
        card6Title: 'Interface',
        card6Desc: 'Dark and light themes, Russian and English languages. A clean React desktop UI.',
        installTitle: 'Getting started',
        installSubtitle: 'Download the installer, run it — and you are ready to play. Ely.by is already configured.',
        step1Title: 'Download the installer',
        step1Desc: 'Click the "Download" button — <code>ligone-launcher_x64-setup.exe</code> will be saved to your computer.',
        step2Title: 'Install and run',
        step2Desc: 'Open <code>ligone-launcher_x64-setup.exe</code>, follow the installer instructions and launch the app.',
        step3Title: 'Sign in and play',
        step3Desc: 'Choose an offline account or Ely.by (works right away), create an instance with the desired version and launch the game.',
        installNote: '<b>Important:</b> ready-made builds are also available on the <b>Releases</b> tab on GitHub. CurseForge requires <code>CURSEFORGE_API_KEY</code>; without it search works only through Modrinth. Forge is not available for 26.1+ — the launcher warns you when creating such an instance.',
        ctaTitle: 'Ready to play?',
        ctaDesc: 'Download Ligone Launcher or build it from source — the project is open.',
        ctaBtn: 'Download installer',
        footerCopy: '© 2025 Ligone Launcher. Open source project.'
    }
};

/* ============ Переключение языка ============ */
const LANG_KEY = 'ligone-lang';

function applyLanguage(lang) {
    if (!translations[lang]) lang = 'ru';

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const value = translations[lang][key];
        if (value !== undefined) {
            el.innerHTML = value;
        }
    });

    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem(LANG_KEY, lang);
}

/* ============ Переключение темы ============ */
const THEME_KEY = 'ligone-theme';
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') theme = 'dark';

    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeToggle) themeToggle.textContent = '🌙';
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeToggle) themeToggle.textContent = '☀️';
    }

    localStorage.setItem(THEME_KEY, theme);
}

function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') {
        applyTheme(saved);
        return;
    }
    const prefersLight = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(prefersLight ? 'light' : 'dark');
}

/* ============ Подстановка имени файла в ссылки ============ */
function applyDownloadFile() {
    document.querySelectorAll('[data-download]').forEach(link => {
        link.setAttribute('href', './' + DOWNLOAD_FILE);
        link.setAttribute('download', DOWNLOAD_FILE);
    });
}

/* ============ Инициализация ============ */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    applyDownloadFile();

    const saved = localStorage.getItem(LANG_KEY);
    const browserLang = (navigator.language || '').toLowerCase().startsWith('ru') ? 'ru' : 'en';
    applyLanguage(saved || browserLang);

    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            applyTheme(isLight ? 'dark' : 'light');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.card, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
