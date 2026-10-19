(function () {
  const translations = {
    en: {
      "brand.name": "Lestari Alam SKBD",
      "nav.login": "Member Login",
      "nav.join": "Join Program",
      "nav.logout": "Log Out",
      "nav.intro": "Introduction",
      "nav.inside": "Inside School",
      "nav.report": "Program Report",
      "nav.portal": "Member Portal",
      "hero.pill": "🌿 SK Bukit Damansara",
      "hero.title": "Become a <em>green hero</em> for our school.",
      "hero.subtitle": "Lestari Alam SKBD is more than a program. It's a student movement for Years 4 to 6 to recycle, plant, compost, save water, and make our school cleaner.",
      "hero.cta": "Join Program 🚀",
      "hero.login": "Member Login",
      "hero.stat.members": "active members",
      "hero.stat.recycled": "recycled",
      "hero.stat.badges": "badges to unlock",
      "hero.panel.title": "Program Pulse",
      "hero.panel.recycle": "School Recycling",
      "hero.panel.recycle.desc": "Every Tuesday & Thursday",
      "hero.panel.garden": "Lestari Garden",
      "hero.panel.garden.desc": "Student watering schedule",
      "hero.panel.compost": "School Compost",
      "hero.panel.compost.desc": "Green waste into fertilizer",
      "hero.panel.points": "Green Points",
      "hero.panel.points.desc": "Log records, collect badges",
      "hero.panel.foot": "Open to students in Years 4 to 6.",
      "mq.1": "♻️ Recycle", "mq.2": "🌱 Plant", "mq.3": "🪱 Compost", "mq.4": "💧 Save Water",
      "mq.5": "🧹 Got-Green", "mq.6": "📣 Awareness", "mq.7": "🏅 Green Challenge", "mq.8": "🌍 Lestari SKBD",
      "intro.kicker": "The Movement",
      "intro.title": "More than a program. It's a <em>lifestyle shift</em>.",
      "intro.p1": "We don't just learn about the environment; we get our hands dirty. From recycling old paper to growing our own school garden, this is where real change happens.",
      "intro.p2": "Think of it as a game where the planet is the grand prize. Collect points, unlock exclusive badges, and climb the ranks while making SKBD a greener, cooler place to be.",
      "intro.highlight": "\"Small actions. Big impact. You are the next green hero.\"",
      "intro.mission.title": "Your Missions",
      "intro.mission.1": "Reduce single-use plastic.",
      "intro.mission.2": "Recycle with clear records.",
      "intro.mission.3": "Care for the school garden together.",
      "intro.mission.4": "Build young green leaders.",
      "intro.mission.5": "Make the school cleaner and more beautiful.",
      "inside.kicker": "Inside School Program",
      "inside.title": "Activities students can do every week",
      "inside.card1.title": "School Recycling",
      "inside.card1.desc": "Paper, clean plastic, and aluminium cans are separated before being recorded.",
      "inside.card2.title": "Lestari Garden",
      "inside.card2.desc": "Students take turns watering, weeding, and caring for school plants.",
      "inside.card3.title": "School Compost",
      "inside.card3.desc": "Dry leaves and green waste can become fertilizer for the school garden.",
      "inside.card4.title": "Save Water",
      "inside.card4.desc": "Close taps tightly and report leaking pipes to teachers.",
      "inside.card5.title": "Short Speeches",
      "inside.card5.desc": "Program members deliver green messages during school assemblies.",
      "inside.card6.title": "Got-Green",
      "inside.card6.desc": "Clean the school area so the learning environment is more comfortable.",
      "report.kicker": "Program Report",
      "report.title": "Recycling Collection Record",
      "report.note": "This record can be updated by the teacher advisor or program committee.",
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
      "cta.title": "The member portal is ready. Log your first record.",
      "cta.subtitle": "After joining, students can log recycling records, collect Green Points, and unlock badges.",
      "cta.join": "Join Now 🌱",
      "cta.login": "Member Login",
      "portal.kicker": "Member Portal",
      "portal.title": "Your profile, your contribution",
      "portal.login": "Member login ↗",
      "portal.card.id": "Lestari Alam SKBD Card",
      "portal.card.points": "Green Points",
      "portal.card.kg": "2026 Contribution",
      "portal.card.active": "Months active",
      "portal.mini.badges": "Badges earned",
      "portal.mini.trees": "Trees cared for",
      "portal.mini.hours": "Service hours",
      "portal.mini.rank": "Your rank",
      "portal.form.title": "Log a contribution ♻️",
      "portal.form.sub": "+5 points / kg",
      "portal.form.type": "Material type",
      "portal.form.kg": "Kg",
      "portal.form.note": "Note (optional)",
      "portal.form.note.ph": "e.g. program recycling duty",
      "portal.form.submit": "Submit record",
      "portal.badges.title": "My badges",
      "portal.lb.title": "SKBD Leaderboard",
      "portal.lb.sub": "top members",
      "portal.veil.title": "This portal is for Lestari Alam SKBD members",
      "portal.veil.desc": "Members can log in to view their member card, track contributions, collect badges, and view their progress.",
      "portal.veil.login": "Member Login",
      "portal.veil.join": "Join Program",
      "footer.desc": "Official school program of SK Bukit Damansara — building green habits through student-led environmental activities.",
      "footer.contact.title": "Contact Us",
      "footer.contact.address": "Address:",
      "footer.contact.phone": "Phone:",
      "footer.contact.email": "Email:",
      "footer.copy": "© 2026 Lestari Alam SKBD · SK Bukit Damansara.",
      "auth.login.tab": "Login",
      "auth.signup.tab": "Join Program",
      "auth.login.title": "Welcome back 🌿",
      "auth.login.desc": "Log in to continue your green record.",
      "auth.email": "Email",
      "auth.password": "Password",
      "auth.password.ph": "Enter your password",
      "auth.password.new": "At least 8 characters",
      "auth.pw.show": "Show",
      "auth.login.submit": "Enter portal",
      "auth.signup.title": "Join Lestari Alam SKBD",
      "auth.signup.desc": "Create an account using your name, email, and password.",
      "auth.name": "Full name",
      "auth.confirm": "Confirm password",
      "auth.confirm.ph": "Retype password",
      "auth.terms": "I agree to the Program Rules.",
      "auth.signup.submit": "Create account"
    },
    ms: {
      "brand.name": "Lestari Alam SKBD",
      "nav.login": "Login Ahli",
      "nav.join": "Sertai Program",
      "nav.logout": "Log Keluar",
      "nav.intro": "Pengenalan",
      "nav.inside": "Dalam Sekolah",
      "nav.report": "Laporan Program",
      "nav.portal": "Portal Ahli",
      "hero.pill": "🌿 SK Bukit Damansara",
      "hero.title": "Jadi <em>hero hijau</em> untuk sekolah kita.",
      "hero.subtitle": "Lestari Alam SKBD bukan sekadar program. Ini gerakan murid Tahun 4 hingga 6 untuk kitar semula, tanam, kompos, jimat air, dan buat sekolah lebih bersih.",
      "hero.cta": "Sertai Program 🚀",
      "hero.login": "Login Ahli",
      "hero.stat.members": "ahli aktif",
      "hero.stat.recycled": "kitar semula",
      "hero.stat.badges": "badge boleh unlock",
      "hero.panel.title": "Program Pulse",
      "hero.panel.recycle": "Kitar Semula Sekolah",
      "hero.panel.recycle.desc": "Setiap Selasa & Khamis",
      "hero.panel.garden": "Taman Lestari",
      "hero.panel.garden.desc": "Jadual penyiraman murid",
      "hero.panel.compost": "Kompos Sekolah",
      "hero.panel.compost.desc": "Sisa hijau jadi baja",
      "hero.panel.points": "Green Points",
      "hero.panel.points.desc": "Log rekod, kumpul badge",
      "hero.panel.foot": "Terbuka kepada murid Tahun 4 hingga 6.",
      "mq.1": "♻️ Kitar Semula", "mq.2": "🌱 Tanam", "mq.3": "🪱 Kompos", "mq.4": "💧 Jimat Air",
      "mq.5": "🧹 Got-Green", "mq.6": "📣 Kesedaran", "mq.7": "🏅 Cabaran Hijau", "mq.8": "🌍 Lestari SKBD",
      "intro.kicker": "Gerakan Kita",
      "intro.title": "Bukan sekadar program. Ia satu <em>perubahan gaya hidup</em>.",
      "intro.p1": "Kami bukan sekadar belajar tentang alam sekitar; kami turun padang. Dari mengitar semula kertas terpakai hingga menanam taman sekolah sendiri, di sinilah perubahan sebenar berlaku.",
      "intro.p2": "Anggap ini sebagai satu permainan di mana bumi adalah hadiah utamanya. Kumpul mata, buka lencana eksklusif, dan naik ke kedudukan teratas sambil menjadikan SKBD tempat yang lebih hijau dan hebat.",
      "intro.highlight": "\"Tindakan kecil. Impak besar. Anda adalah hero hijau seterusnya.\"",
      "intro.mission.title": "Misi Anda",
      "intro.mission.1": "Kurangkan plastik sekali guna.",
      "intro.mission.2": "Kitar semula dengan rekod jelas.",
      "intro.mission.3": "Jaga taman sekolah bersama.",
      "intro.mission.4": "Bina pemimpin hijau muda.",
      "intro.mission.5": "Buat sekolah lebih bersih dan cantik.",
      "inside.kicker": "Program Dalam Sekolah",
      "inside.title": "Aktiviti yang murid boleh buat setiap minggu",
      "inside.card1.title": "Kitar Semula Sekolah",
      "inside.card1.desc": "Kertas, plastik bersih, dan tin aluminium dipisahkan sebelum direkod.",
      "inside.card2.title": "Taman Lestari",
      "inside.card2.desc": "Murid bergilir menyiram, mencabut rumput, dan menjaga tanaman sekolah.",
      "inside.card3.title": "Kompos Sekolah",
      "inside.card3.desc": "Daun kering dan sisa hijau boleh jadi baja untuk taman sekolah.",
      "inside.card4.title": "Jimat Air",
      "inside.card4.desc": "Tutup paip rapat-rapat dan laporkan paip bocor kepada guru.",
      "inside.card5.title": "Ceramahan Ringkas",
      "inside.card5.desc": "Ahli program sampaikan pesanan hijau semasa perhimpunan sekolah.",
      "inside.card6.title": "Got-Green",
      "inside.card6.desc": "Bersihkan kawasan sekolah supaya persekitaran belajar lebih selesa.",
      "report.kicker": "Laporan Program",
      "report.title": "Rekod Kutipan Kitar Semula",
      "report.note": "Rekod ini boleh dikemas kini oleh guru penasihat atau AJK program.",
      "col.teacher": "NAMA GURU",
      "col.newspaper": "SURAT KHABAR",
      "col.white_paper": "KERTAS PUTIH",
      "col.mixed_paper": "K.CAMPUR DAN BUKU",
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
      "cta.title": "Portal ahli dah siap. Jom log rekod pertama kamu.",
      "cta.subtitle": "Selepas sertai program, murid boleh log rekod kitar semula, kumpul Green Points, dan unlock badge.",
      "cta.join": "Sertai Sekarang 🌱",
      "cta.login": "Login Ahli",
      "portal.kicker": "Portal Ahli",
      "portal.title": "Profil anda, sumbangan anda",
      "portal.login": "Login Ahli ↗",
      "portal.card.id": "Kad Lestari Alam SKBD",
      "portal.card.points": "Mata Hijau",
      "portal.card.kg": "Sumbangan 2026",
      "portal.card.active": "Bulan aktif",
      "portal.mini.badges": "Lencana diperoleh",
      "portal.mini.trees": "Pokok dijaga",
      "portal.mini.hours": "Jam khidmat",
      "portal.mini.rank": "Kedudukan anda",
      "portal.form.title": "Log sumbangan ♻️",
      "portal.form.sub": "+5 mata / kg",
      "portal.form.type": "Jenis bahan",
      "portal.form.kg": "Kg",
      "portal.form.note": "Nota (pilihan)",
      "portal.form.note.ph": "Cth: tugas kitar semula program",
      "portal.form.submit": "Hantar rekod",
      "portal.badges.title": "Lencana saya",
      "portal.lb.title": "Carta Pendahulu SKBD",
      "portal.lb.sub": "ahli teratas",
      "portal.veil.title": "Portal ini untuk ahli Lestari Alam SKBD",
      "portal.veil.desc": "Ahli boleh log masuk untuk melihat kad ahli, menjejak sumbangan, mengumpul lencana, dan melihat kemajuan.",
      "portal.veil.login": "Login Ahli",
      "portal.veil.join": "Sertai Program",
      "footer.desc": "Program rasmi sekolah SK Bukit Damansara — membina tabiat hijau melalui aktiviti alam sekitar yang dipimpin murid.",
      "footer.contact.title": "Hubungi Kami",
      "footer.contact.address": "Alamat:",
      "footer.contact.phone": "Telefon:",
      "footer.contact.email": "E-mel:",
      "footer.copy": "© 2026 Lestari Alam SKBD · SK Bukit Damansara.",
      "auth.login.tab": "Login",
      "auth.signup.tab": "Sertai Program",
      "auth.login.title": "Selamat kembali 🌿",
      "auth.login.desc": "Log masuk untuk meneruskan rekod hijau anda.",
      "auth.email": "E-mel",
      "auth.password": "Kata laluan",
      "auth.password.ph": "Masukkan kata laluan",
      "auth.password.new": "Sekurang-kurangnya 8 aksara",
      "auth.pw.show": "Tunjuk",
      "auth.login.submit": "Masuk portal",
      "auth.signup.title": "Sertai Lestari Alam SKBD",
      "auth.signup.desc": "Cipta akaun menggunakan nama, e-mel, dan kata laluan anda.",
      "auth.name": "Nama penuh",
      "auth.confirm": "Sahkan kata laluan",
      "auth.confirm.ph": "Taip semula kata laluan",
      "auth.terms": "Saya bersetuju dengan Peraturan Program.",
      "auth.signup.submit": "Cipta akaun"
    }
  };

  const defaultLang = navigator.language.toLowerCase().startsWith("ms") ? "ms" : "en";
  let currentLang = defaultLang;
  
  try {
    currentLang = localStorage.getItem("lestari-lang") || defaultLang;
  } catch (e) {}

  function translate(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        if (dict[key].includes("<")) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    const btn = document.getElementById("langToggle");
    if (btn) {
      btn.textContent = lang === "en" ? "BM" : "EN";
    }

    try {
      localStorage.setItem("lestari-lang", lang);
    } catch (e) {}
    
    currentLang = lang;
  }

  document.addEventListener("click", function(e) {
    const btn = e.target.closest("#langToggle");
    if (btn) {
      e.preventDefault();
      const nextLang = currentLang === "en" ? "ms" : "en";
      translate(nextLang);
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => translate(currentLang));
  } else {
    translate(currentLang);
  }
})();
