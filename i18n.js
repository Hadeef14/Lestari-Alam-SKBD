(function () {
  const translations = {
    en: {
      "meta.title": "Lestari Alam SKBD — Sustainability Program",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.programs": "Programs",
      "nav.portal": "Member Portal",
      "nav.contact": "Contact",
      "hero.eyebrow": "SKBD Sustainability Program",
      "hero.title": "Grow greener habits, one action at a time.",
      "hero.subtitle": "Join Lestari Alam SKBD to track recycling, earn points, and turn small habits into real impact for our school and planet.",
      "hero.cta": "Get involved",
      "hero.secondary": "Explore programs",
      "feature.recycle.title": "Track recycling",
      "feature.recycle.desc": "Log paper, plastic, and aluminium contributions and see your impact grow.",
      "feature.points.title": "Earn points & badges",
      "feature.points.desc": "Get rewarded for consistent habits and unlock achievement badges.",
      "feature.leaderboard.title": "Climb the leaderboard",
      "feature.leaderboard.desc": "Friendly competition between classes and members.",
      "footer.tagline": "Small actions. Big impact.",
      "lang.switch": "Switch language",
      "record.title": "Recycling Collection Record",
      "col.teacher": "TEACHER'S NAME",
      "col.newspaper": "NEWSPAPER",
      "col.white_paper": "WHITE PAPER",
      "col.mixed_paper": "MIXED PAPER & BOOKS",
      "col.magazine": "MAGAZINES",
      "col.battery": "BATTERIES",
      "col.aluminium": "ALUMINIUM",
      "col.iron": "IRON",
      "col.box": "CARDBOARD",
      "col.tetrapak": "TETRA PAK",
      "col.plastic": "PLASTIC",
      "col.cd": "CDs",
      "col.oil": "OIL",
      "col.glass": "GLASS",
      "col.fabric": "FABRIC",
      "col.ewaste": "E-WASTE",
      "placeholder.teacher": "e.g. Mr. Ali",
      "reset.title": "Reset password",
      "reset.email": "Email address",
      "reset.newPassword": "New password",
      "reset.confirmPassword": "Confirm new password",
      "reset.submit": "Update password"
    },
    ms: {
      "meta.title": "Lestari Alam SKBD — Program Kelestarian",
      "nav.home": "Utama",
      "nav.about": "Tentang",
      "nav.programs": "Program",
      "nav.portal": "Portal Ahli",
      "nav.contact": "Hubungi",
      "hero.eyebrow": "Program Kelestarian SKBD",
      "hero.title": "Amalkan tabiat lebih hijau, satu tindakan demi satu tindakan.",
      "hero.subtitle": "Sertai Lestari Alam SKBD untuk merekod kitar semula, mengumpul mata, dan menjadikan tabiat kecil sebagai impak sebenar untuk sekolah dan bumi kita.",
      "hero.cta": "Sertai program",
      "hero.secondary": "Lihat program",
      "feature.recycle.title": "Rekod kitar semula",
      "feature.recycle.desc": "Rekod sumbangan kertas, plastik dan aluminium serta lihat impak anda berkembang.",
      "feature.points.title": "Kumpul mata & lencana",
      "feature.points.desc": "Dapat ganjaran kerana amalan konsisten dan buka lencana pencapaian.",
      "feature.leaderboard.title": "Naik carta pendahulu",
      "feature.leaderboard.desc": "Persaingan mesra antara kelas dan ahli.",
      "footer.tagline": "Tindakan kecil. Impak besar.",
      "lang.switch": "Tukar bahasa",
      "record.title": "Rekod Kutipan Kitar Semula",
      "col.teacher": "NAMA GURU",
      "col.newspaper": "SURAT KHABAR",
      "col.white_paper": "KERTAS PUTIH",
      "col.mixed_paper": "K.CAMPUR & BUKU",
      "col.magazine": "MAJALAH",
      "col.battery": "BATERI",
      "col.aluminium": "ALUMINIUM",
      "col.iron": "BESI",
      "col.box": "KOTAK",
      "col.tetrapak": "TETRAPAK",
      "col.plastic": "PLASTIK",
      "col.cd": "CD",
      "col.oil": "MINYAK",
      "col.glass": "KACA",
      "col.fabric": "FABRIK",
      "col.ewaste": "EWASTE",
      "placeholder.teacher": "Cth: Cikgu Ali",
      "reset.title": "Tetapkan semula kata laluan",
      "reset.email": "Alamat e-mel",
      "reset.newPassword": "Kata laluan baharu",
      "reset.confirmPassword": "Sahkan kata laluan baharu",
      "reset.submit": "Kemas kini kata laluan"
    }
  };

  const defaultLang = navigator.language.toLowerCase().startsWith("ms") ? "ms" : "en";
  let currentLang = localStorage.getItem("lestari-lang") || defaultLang;

  function translate(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.title = dict["meta.title"] || document.title;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });
    const btn = document.getElementById("langToggle");
    if (btn) {
      btn.textContent = lang === "en" ? "BM" : "EN";
      btn.setAttribute("aria-label", dict["lang.switch"]);
    }
    localStorage.setItem("lestari-lang", lang);
    currentLang = lang;
  }

  document.addEventListener("DOMContentLoaded", () => {
    translate(currentLang);
    const btn = document.getElementById("langToggle");
    if (btn) btn.addEventListener("click", () => translate(currentLang === "en" ? "ms" : "en"));
  });
})();
