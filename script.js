/* ============ Имя файла для скачивания ============ */
// Меняйте только здесь при выходе новой версии
const DOWNLOAD_FILE = 'ligone-launcher_0.1.0_x64-setup.exe';

/* ============ Переводы ============ */
const translations = {
    ru: {
        navFeatures: 'Возможности',
        navDownload: 'Скачать',
        navGithub: 'GitHub',
        heroBadge: 'Minecraft · Tauri 2 · React 19 + Rust',
        heroDesc: 'Лаунчер Minecraft с офлайн-входом и Ely.by, инстансами, браузером модов Modrinth и CurseForge и автоматическим подбором Java. Лёгкий десктоп на Tauri 2.',
        heroBtnDownload: '⬇ Скачать',
        heroBtnFeatures: 'Возможности',
        techFrontend: 'Фронтенд: <b>React 19 + TypeScript (Vite)</b>',
        techBackend: 'Бэкенд: <b>Rust</b>',
        techShell: 'Оболочка: <b>Tauri 2</b>',
        featuresTitle: 'Возможности',
        featuresSubtitle: 'Всё для комфортной игры — от аккаунтов до модов и запуска.',
        card1Title: 'Аккаунты',
        card1Desc: 'Офлайн-вход (UUID как <code>nameUUIDFromBytes</code> в Java) и Ely.by — OAuth (рекомендуется) или вход по паролю. Аккаунты сохраняются, токены Ely.by — в OS keyring (Windows Credential Manager), на диске секретов нет.',
        card2Title: 'Инстансы',
        card2Desc: 'Создание, переименование и удаление. Скачивание выбранной версии Minecraft и Fabric (jar, библиотеки, ассеты) с проверкой по sha1 — валидные файлы не скачиваются повторно. У каждого инстанса свои <code>mods/</code>, <code>resourcepacks/</code>, <code>shaderpacks/</code>, <code>saves/</code>.',
        card3Title: 'Браузер контента',
        card3Desc: 'Поиск и установка модов и ресурспаков с Modrinth и CurseForge. Всегда фильтр по версии игры, для Fabric — по загрузчику. Зависимости модов ставятся автоматически. CurseForge — при наличии <code>CURSEFORGE_API_KEY</code>, иначе только Modrinth.',
        card4Title: 'Автоподбор Java',
        card4Desc: 'Пользовательский путь → рантайм Mojang (скачивается без UAC/MSI) → системная Java. Нужная версия подбирается автоматически.',
        card5Title: 'Запуск игры',
        card5Desc: 'JVM-аргументы, распаковка нативных библиотек, authlib-injector — скины по нику работают и офлайн. Лог пишется в <code>&lt;инстанс&gt;/launcher.log</code>, при аварийном выходе ошибка показывается в UI.',
        card6Title: 'Интерфейс',
        card6Desc: 'Тёмная и светлая темы, русский и английский языки. Аккуратный десктопный UI на React.',
        installTitle: 'Как начать',
        installSubtitle: 'Скачайте установщик лаунчера, запустите его и настройте Ely.by для входа через этот сервис.',
        step1Title: 'Скачайте установщик',
        step1Desc: 'Нажмите кнопку «Скачать» — файл <code>ligone-launcher_0.1.0_x64-setup.exe</code> загрузится на ваш компьютер.',
        step2Title: 'Запустите',
        step2Desc: 'Откройте <code>ligone-launcher_0.1.0_x64-setup.exe</code> и следуйте инструкциям установщика.',
        step3Title: 'Настройте Ely.by',
        step3Desc: 'Для OAuth/парольного входа укажите <code>ELYBY_CLIENT_ID</code> и <code>ELYBY_CLIENT_SECRET</code> в <code>%APPDATA%\\.ligone\\.env</code> или переменных окружения.',
        installNote: '<b>Для release-сборки:</b> Redirect URI для OAuth — <code>http://localhost:8921/ely/callback</code> (в dev — <code>http://localhost:1420/ely/callback</code>). Его нужно зарегистрировать в приложении Ely.by и при необходимости задать <code>ELYBY_REDIRECT_URI</code>. Переменные окружения имеют приоритет над <code>.env</code>, секреты нигде не хардкодятся.',
        ctaTitle: 'Готовы играть?',
        ctaDesc: 'Скачайте установщик Ligone Launcher или соберите из исходников — проект открыт.',
        ctaBtn: 'Скачать установщик',
        footerCopy: '© 2025 Ligone Launcher. Проект с открытым исходным кодом.'
    },
    en: {
        navFeatures: 'Features',
        navDownload: 'Download',
        navGithub: 'GitHub',
        heroBadge: 'Minecraft · Tauri 2 · React 19 + Rust',
        heroDesc: 'A Minecraft launcher with offline login and Ely.by, instances, a Modrinth/CurseForge content browser, and automatic Java resolution. A lightweight desktop app built with Tauri 2.',
        heroBtnDownload: '⬇ Download',
        heroBtnFeatures: 'Features',
        techFrontend: 'Frontend: <b>React 19 + TypeScript (Vite)</b>',
        techBackend: 'Backend: <b>Rust</b>',
        techShell: 'Shell: <b>Tauri 2</b>',
        featuresTitle: 'Features',
        featuresSubtitle: 'Everything for comfortable play — from accounts to mods and launching.',
        card1Title: 'Accounts',
        card1Desc: "Offline login (UUID matching Java's <code>nameUUIDFromBytes</code>) and Ely.by — OAuth (recommended) or a password fallback. Accounts persist between runs; Ely.by tokens are stored in the OS keyring (Windows Credential Manager), so no secrets ever touch disk files.",
        card2Title: 'Instances',
        card2Desc: 'Create, rename, delete. Download the selected Minecraft version and Fabric (jar, libraries, assets) with sha1 verification — repeated downloads skip valid files. Each instance has its own <code>mods/</code>, <code>resourcepacks/</code>, <code>shaderpacks/</code>, <code>saves/</code>.',
        card3Title: 'Content browser',
        card3Desc: 'Search and install mods and resource packs from Modrinth and CurseForge. Always filtered by the instance\'s game version; for Fabric — by loader as well. Mod dependencies are installed automatically. CurseForge is used when <code>CURSEFORGE_API_KEY</code> is set, otherwise it degrades to Modrinth only.',
        card4Title: 'Automatic Java',
        card4Desc: 'Custom path → Mojang runtime (downloaded without UAC/MSI) → system Java. The right version is resolved automatically.',
        card5Title: 'Game launch',
        card5Desc: 'JVM arguments, natives extraction, authlib-injector — skins by nickname work offline too. The log is written to <code>&lt;instance&gt;/launcher.log</code>; a crash shows the error in the UI.',
        card6Title: 'Interface',
        card6Desc: 'Dark and light themes, Russian and English languages. A clean React desktop UI.',
        installTitle: 'Getting started',
        installSubtitle: 'Download the launcher installer, run it, and set up Ely.by for that sign-in method.',
        step1Title: 'Download the installer',
        step1Desc: 'Click the "Download" button — <code>ligone-launcher_0.1.0_x64-setup.exe</code> will be saved to your computer.',
        step2Title: 'Run it',
        step2Desc: 'Open <code>ligone-launcher_0.1.0_x64-setup.exe</code> and follow the installer instructions.',
        step3Title: 'Set up Ely.by',
        step3Desc: 'For OAuth/password login, provide <code>ELYBY_CLIENT_ID</code> and <code>ELYBY_CLIENT_SECRET</code> in <code>%APPDATA%\\.ligone\\.env</code> or via environment variables.',
        installNote: '<b>For release builds:</b> the OAuth Redirect URI is <code>http://localhost:8921/ely/callback</code> (dev — <code>http://localhost:1420/ely/callback</code>). Register it in your Ely.by application and set <code>ELYBY_REDIRECT_URI</code> if needed. Environment variables take priority over <code>.env</code>; no secrets are hardcoded.',
        ctaTitle: 'Ready to play?',
        ctaDesc: 'Download the Ligone Launcher installer or build it from source — the project is open.',
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
    // Иначе — по системной теме
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
    // Тема — до отрисовки анимаций, чтобы не было вспышки
    initTheme();

    // Имя файла для скачивания
    applyDownloadFile();

    // Выбор языка: сохранённый → язык браузера → русский
    const saved = localStorage.getItem(LANG_KEY);
    const browserLang = (navigator.language || '').toLowerCase().startsWith('ru') ? 'ru' : 'en';
    applyLanguage(saved || browserLang);

    // Кнопки переключения языка
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });

    // Кнопка переключения темы
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            applyTheme(isLight ? 'dark' : 'light');
        });
    }

    // Плавная прокрутка по якорям
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Появление карточек и шагов при скролле
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